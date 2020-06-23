namespace WebAPI.Models
{
    public class CostPreviewContract
    {
        public decimal EmployeeSalary { get; set; }
        public decimal CostOfBenefits { get; set; }
        public decimal PayAfterBenefitsPerPeriod { get; set; }
        public decimal BenefitCostPerPayPeriod { get; set; }
    }
}
