using HotelData.Context;
using HotelData.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/comments")]
    public class CommentsController : Controller
    {
        private readonly DataContext _context;

        public CommentsController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<Comments>>> GetUsers()
        {
            return await _context.Comments.ToListAsync();
        }

        // GET: api/Comments/1
        [HttpGet("{id}")]
        public async Task<ActionResult<Comments>> GetUser(Guid id)
        {
            var user = await _context.Comments.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/Comments
        [HttpPost]
        public async Task<ActionResult<Comments>> CreateUser(Comments user)
        {
            user.Id = Guid.NewGuid();
            _context.Comments.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/Comments/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, Comments user)
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

        // DELETE: api/Comments/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Comments.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Comments.Remove(user);
            await _context.SaveChangesAsync();

            return NoContent();
        }

        private bool UserExists(Guid id)
        {
            return _context.Comments.Any(u => u.Id == id);
        }
    }
}
