using WebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace WebAPI.BusinessLogicService
{
    public interface IPreviewBenefitCost
    {
        CostPreviewContract CalculateCost(Employee employee);
    }

    public class PreviewBenefitCost : IPreviewBenefitCost
    {
        private readonly IPaySettingsRepository _paySettingsRepo;

        public PreviewBenefitCost(IPaySettingsRepository paySettingsRepo)
        {
            _paySettingsRepo = paySettingsRepo;
        }

        public CostPreviewContract CalculateCost(Employee employee)
        {
            decimal cost;
            cost = CalculateEmployee(employee);
            cost += CalculateSpouse(employee.Spouse);
            cost += CalculateDependents(employee.Dependents);

            int periods = _paySettingsRepo.GetPayPeriods(DateTime.Now.Year);

            CostPreviewContract costPreview = new CostPreviewContract
            {
                CostOfBenefits = cost,
                EmployeeSalary = employee.Salary,
                BenefitCostPerPayPeriod = cost / periods,
                PayAfterBenefitsPerPeriod = (employee.Salary - cost) / periods
            };

            return costPreview;
        }

        private decimal CalculateEmployee(Employee employee)
        {
            decimal total = 0;

            decimal cost = 1000m; //This would actually probably be a call to the database through a repo given a tier of coverage
            decimal discount = GetDiscountPercentage(employee);
            total = CalculateTotal(cost, discount);

            return total;
        }

        private decimal CalculateSpouse(Person spouse)
        {
            decimal total = 0;

            if (spouse == null)
            { return total; }

            decimal cost = 500m;
            decimal discount = GetDiscountPercentage(spouse);

            total = CalculateTotal(cost, discount);

            return total;
        }

        private decimal CalculateDependents(List<Person> dependents)
        {
            decimal total = 0;

            if (dependents == null || dependents.Count() == 0)
            { return total; }

            foreach (Person dependent in dependents)
            {
                decimal cost = 500m;
                decimal discount = GetDiscountPercentage(dependent);

                total += CalculateTotal(cost, discount);
            }

            return total;
        }

        private decimal GetDiscountPercentage(Person person)
        {
            decimal discount = 0;

            if (person.FirstName.ToUpper().StartsWith("A") || person.LastName.ToUpper().StartsWith("A"))
            {
                discount = 0.10m;
            }
            return discount;
        }

        private decimal CalculateTotal(decimal cost, decimal discount)
        {
            //This may be overkill for this example. But assuming a true application, there would be more logic here to consider.
            return cost * (1 - discount);
        }
    }
}
