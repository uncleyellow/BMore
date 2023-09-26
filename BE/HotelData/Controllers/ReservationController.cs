using Microsoft.AspNetCore.Mvc;

namespace HotelData.Controllers
{
    public class ReservationController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
