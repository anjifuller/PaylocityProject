using System.Collections.Generic;
using NUnit.Framework;
using WebAPI.BusinessLogicService;
using WebAPI.Models;
namespace Tests
{
    public class CostCalculationTests
    {
        private const int Periods = 26;
        private PreviewBenefitCost _service;

        [SetUp]
        public void Setup()
        {
            IPaySettingsRepository repository = new PaySettingsRepository();
            _service = new PreviewBenefitCost(repository);
        }

        /// <summary>
        ///     Given: We have an employee with no spouse and no dependents
        ///     When:  We calculate the cost of benefits
        ///     Then:  We should receive a cost of 1000
        /// </summary>
        [Test]
        public void CalculateCostForEmployeeOnlyTest([Values(0, 1000, 5000, 10000)] decimal salary)
        {
            // Given
            var employee = BuildTestEmployee(salary);
            // When
            var result = _service.CalculateCost(employee);
            // Then
            ValidateResult(salary, result, 1000);
        }

        /// <summary>
        ///     Given: We have an employee with no spouse and 1 dependent
        ///     When:  We calculate the cost of benefits
        ///     Then:  We should receive a cost of 1500
        /// </summary>
        [Test]
        public void CalculateCostForEmployeeWithDependentTest([Values(0, 1000, 5000, 10000)] decimal salary)
        {
            // Given
            var employee = BuildTestEmployee(salary, false, 1);
            // When
            var result = _service.CalculateCost(employee);
            // Then
            ValidateResult(salary, result, 1500);
        }

        /// <summary>
        ///     Given: We have an employee with a spouse and no dependents
        ///     When:  We calculate the cost of benefits
        ///     Then:  We should receive a cost of 1500
        /// </summary>
        [Test]
        public void CalculateCostForSpouseTest([Values(0, 1000, 5000, 10000)] decimal salary)
        {
            // Given
            var employee = BuildTestEmployee(salary, true);
            // When
            var result = _service.CalculateCost(employee);
            // Then
            ValidateResult(salary, result, 1500);
        }

        /// <summary>
        ///     Given: We have an employee with a name that begins with A with no spouse and no dependents
        ///     When:  We calculate the cost of benefits
        ///     Then:  We should receive a cost of 900, including discounts
        /// </summary>
        [Test]
        public void CalculateCostEmployeeWithSpecialNameTest([Values(0, 1000, 5000, 10000)] decimal salary)
        {
            // Given
            var employee = BuildTestEmployee(salary);
            employee.FirstName = "A" + employee.FirstName;
            // When
            var result = _service.CalculateCost(employee);
            // Then
            ValidateResult(salary, result, 900);
        }

        private static void ValidateResult(decimal salary, CostPreviewContract result, decimal expectedCostOfBenefits)
        {
            Assert.AreEqual(expectedCostOfBenefits, result.CostOfBenefits,
                "The calculated cost did not match expectations");
            Assert.AreEqual(expectedCostOfBenefits / Periods, result.BenefitCostPerPayPeriod,
                "The calculated cost did not match expectations");
            Assert.AreEqual((salary - result.CostOfBenefits) / Periods, result.PayAfterBenefitsPerPeriod,
                "The calculated cost did not match expectations");
        }


        private static Employee BuildTestEmployee(decimal salary, bool addSpouse = false, int numberOfDependents = 0)
        {
            return new Employee
            {
                FirstName = "Test",
                LastName = "Test",
                Salary = salary,
                Spouse = addSpouse ? BuildTestPerson() : null,
                Dependents = BuildDependents(numberOfDependents)
            };
        }

        private static List<Person> BuildDependents(int numberOfDependents)
        {
            var dependents = new List<Person>();
            for (var i = 0; i < numberOfDependents; i++) dependents.Add(BuildTestPerson());
            return dependents;
        }

        private static Person BuildTestPerson()
        {
            return new Person { FirstName = "TestPerson", LastName = "TestPersonLastName" };
        }
    }
}