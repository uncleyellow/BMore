using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using HotelData.Models;
using HotelData.Context;
using Microsoft.Extensions.Configuration;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace HotelData.Controllers
{
    [ApiController]
    [Route("api/users")]
    public class UsersController : Controller
    {
        private readonly DataContext _context;
        private readonly IConfiguration _configuration;

        public UsersController(DataContext context, IConfiguration configuration)
        {
            _context = context;
            _configuration = configuration;
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
                if(item.Role == "admin")
                {
                    item.Hotels = lstHotels.Where(x => x.UserId.Equals(item.Id)).ToList();
                    continue;
                }
                item.Hotels = lstHotels.Where(x => x.Id.Equals(item.HotelsId)).ToList();
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
            var user2 = await _context.Users.AnyAsync(a => a.Email.Equals(user.Email) || a.PhoneNumbers.Equals(user.PhoneNumbers));
            if (user2)
            {
                return BadRequest("Đã tồn tại Email hoặc Số điện thoại");
            }
            _context.Users.Add(user);
            await _context.SaveChangesAsync();

            return CreatedAtAction(nameof(GetUser), new { id = user.Id }, user);
        }


        [HttpGet("search")]
        public async Task<ActionResult<IEnumerable<User>>> SearchUser(string search)
        {
            var hotels = await _context.Users
                .Where(h => h.userName.Contains(search) || h.Sex.Contains(search))
                .ToListAsync();

            if (hotels.Count == 0)
            {
                return NotFound();
            }

            return hotels;
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



        [HttpPost("login")]
        public async Task<ActionResult<string>> Login(LoginRequest request)
        {
            var user = await _context.Users.FirstOrDefaultAsync(x => x.Email == request.Email && x.PassWords == request.PassWords);

            if (user == null)
            {
                return Unauthorized("Invalid email or password.");
            }

            var token = GenerateAccessToken(user);
            return Ok(token);
        }

        private string GenerateAccessToken(User user)
        {
            var tokenHandler = new JwtSecurityTokenHandler();
            var secretKey = _configuration.GetValue<string>("Jwt:SecretKey");
            var key = Encoding.ASCII.GetBytes(secretKey);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Subject = new ClaimsIdentity(new[]
                {
                    new Claim("userId", user.Id.ToString()),
                    new Claim(ClaimTypes.Name, user.Email)
                }),
                Expires = DateTime.UtcNow.AddDays(7),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key), SecurityAlgorithms.HmacSha256Signature)
            };

            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }
    }

    // Model for login request
    public class LoginRequest
    {
        public string Email { get; set; }
        public string PassWords { get; set; }
    }


}

