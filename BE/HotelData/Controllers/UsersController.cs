using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotelData.Models;
using HotelData.Context;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : Controller
    {
        private readonly DataContext _context;

        public UsersController(DataContext context)
        {
            _context = context;
        }
        [HttpGet]
        public async Task<ActionResult<IEnumerable<User>>> GetUsers()
        {
            var lstUsers = await _context.Users.ToListAsync();
            var lstIdUser = lstUsers.Select(x => x.Id).Distinct().ToList(); 
            var lstHotels = await _context.Hotels.Where(x =>  lstIdUser.Contains(x.UserId ?? new Guid())).ToListAsync();

            foreach (var item in lstHotels)
            {
                item.User = new User();
            }

            foreach (var item in lstUsers)
            {
                item.Hotels = lstHotels.Where(x => x.UserId.Equals(item.Id)).ToList();
            }

            return lstUsers;
        }

        // GET: api/users/1
        [HttpGet("{id}")]
        public async Task<ActionResult<User>> GetUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);

            if (user == null)
            {
                return NotFound();
            }

            return user;
        }

        // POST: api/users
        [HttpPost]
        public async Task<ActionResult<User>> CreateUser(User user)
        {
            user.Id = Guid.NewGuid();
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }

        // PUT: api/users/1
        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateUser(Guid id, User user)
        {
            if (id != user.Id)
            {
                return BadRequest();
            }
           
            _context.Entry<User>(user).State = EntityState.Modified;
            await _context.SaveChangesAsync();

            return Ok(user);
        }

        // DELETE: api/users/1
        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteUser(Guid id)
        {
            var user = await _context.Users.FindAsync(id);
            if (user == null)
            {
                return NotFound();
            }

            _context.Users.Remove(user);
            await _context.SaveChangesAsync();

            return Ok("Xoá Thành Công");
        }

        private bool UserExists(Guid id)
        {
            return _context.Users.Any(u => u.Id == id);
        }
    }
}
