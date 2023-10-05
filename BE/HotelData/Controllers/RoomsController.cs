using HotelData.Context;
using HotelData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/rooms")]
    public class RoomsController : Controller
    {
        private readonly DataContext _context;

        public RoomsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Room>>> GetUsers()
        {
            return await _context.Rooms.ToListAsync();
        }

        // GET: api/Room/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Room>> GetUser(Guid id)
        {
            var user = await _context.Rooms.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<Room>> CreateUser(Room user)
        {
            user.Id = Guid.NewGuid();
            _context.Rooms.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/Room/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, Room user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }

            _context.Entry(user).State = EntityState.Modified;

            try
            {
                await _context.SaveChangesAsync();
            }
            catch (DbUpdateConcurrencyException)
            {
                if (!UserExists(id))
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

        // DELETE: api/Room/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Rooms.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Rooms.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Rooms.Any(u => u.Id == id);
        }
    }
}
