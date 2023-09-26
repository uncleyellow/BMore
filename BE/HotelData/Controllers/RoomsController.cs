using Microsoft.AspNetCore.Mvc;

namespace HotelData.Controllers
{
    public class RoomsController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }
    }
}
