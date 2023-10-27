using HotelData.Context;
using HotelData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/hotels")]
    public class HotelsController : Controller
    {
        private readonly DataContext _context;

        public HotelsController(DataContext context)
        {
            _context = context;
        }
        // GET: api/hotels
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Hotels>>> GetHotels()
        {
            return await _context.Hotels.ToListAsync();

        }

        // GET: api/hotels/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Hotels>> GetHotel(Guid id)
        {
            var hotel = await _context.Hotels.FindAsync(id);

            if (hotel == null)
            {
                return NotFound();
            }

            return hotel;
        }
        // GET: api/hotels/search?name={name}
        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<Hotels>>> SearchHotels(string search)
        {
            var hotels = await _context.Hotels
                .Where(h => h.Name.Contains(search) || h.Address.Contains(search))
                .ToListAsync();

            if (hotels.Count == 0)
            {
                return NotFound();
            }

            return hotels;
        }
       
        // POST: api/hotels
        [HttpPost]
        public async Task<ActionResult<Hotels>> CreateHotel(Hotels hotels)
        {
            hotels.Id = Guid.NewGuid();
            _context.Hotels.Add(hotels);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetHotel), new { id = hotels.Id }, hotels);
        }

        // PUT: api/hotels/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateHotel(Guid id, Hotels hotels)
        {
            if (id != hotels.Id)
            {
                return BadRequest();
            }

            _context.Entry(hotels).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!HotelExists(id))
                {
                    return NotFound();
                }
                else
                {
                    throw;
                }
            }

            return NoContent();
        }

        // DELETE: api/hotels/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteHotel(Guid id)
        {
            var hotel = await _context.Hotels.FindAsync(id);
            if (hotel == null)
            {
                return NotFound();
            }

            _context.Hotels.Remove(hotel);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool HotelExists(Guid id)
        {
            return _context.Hotels.Any(u => u.Id == id);
        }
    }
}
