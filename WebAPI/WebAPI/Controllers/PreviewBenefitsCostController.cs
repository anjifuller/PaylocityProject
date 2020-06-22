using Microsoft.AspNetCore.Mvc;
using Service.Models;

namespace Service.Controllers
{
    [Route("api/PreviewBenefitsCost")]
    [ApiController]
    public class PreviewBenefitsCostController : ControllerBase
    {
        private readonly IPreviewBenefitCost _previewBenefitCost;

        public PreviewBenefitsCostController(IPreviewBenefitCost previewBenefitCost)
        {
            _previewBenefitCost = previewBenefitCost;
        }

        [HttpPost]
        public CostPreviewContract Post([FromBody] Employee employee)
        {
            return _previewBenefitCost.CalculateCost(employee);
        }
    }
}
