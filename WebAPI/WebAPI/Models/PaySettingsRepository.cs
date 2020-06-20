namespace Service.Models
{
    public interface IPaySettingsRepository
    {
        int GetPayPeriods(int year);
    }

    public class PaySettingsRepository : IPaySettingsRepository
    {
        public int GetPayPeriods(int year)
        {
            // This would call into the db to get the periods for the Given Year using EF
            return 26;
        }
    }
}
