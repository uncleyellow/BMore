using HotelData.Context;
using HotelData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/bills")]
    public class BillsController : Controller
    {
        private readonly DataContext _context;

        public BillsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Bills>>> GetUsers()
        {
            return await _context.Bills.ToListAsync();
        }

        // GET: api/Bills/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Bills>> GetUser(Guid id)
        {
            var user = await _context.Bills.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/Bills
        [HttpPost]
        public async Task<ActionResult<Bills>> CreateUser(Bills user)
        {
            user.Id = Guid.NewGuid();
            _context.Bills.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/Bills/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, Bills user)
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

        // DELETE: api/users/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Bills.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Bills.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Bills.Any(u => u.Id == id);
        }
    }
}
