using HotelData.Context;
using HotelData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/billDetails")]
    public class BillDetailsController : Controller
    {

        private readonly DataContext _context;

        public BillDetailsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<BillsDetails>>> GetUsers()
        {
            return await _context.BillsDetails.ToListAsync();
        }

        // GET: api/BillsDetails/1
        [HttpGet("{id}")]
        public async Task<ActionResult<BillsDetails>> GetUser(Guid id)
        {
            var user = await _context.BillsDetails.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/BillsDetails
        [HttpPost]
        public async Task<ActionResult<BillsDetails>> CreateUser(BillsDetails user)
        {
            user.Id = Guid.NewGuid();
            _context.BillsDetails.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/BillsDetails/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, BillsDetails user)
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

        // DELETE: api/BillsDetails/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.BillsDetails.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.BillsDetails.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.BillsDetails.Any(u => u.Id == id);
        }
    }
}
