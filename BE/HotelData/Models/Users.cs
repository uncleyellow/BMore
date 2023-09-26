using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class User
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string PassWords { get; set; }
        public string Address { get; set; }
        public decimal PhoneNumbers { get; set; }
        public DateTime CreatAt { get; set; }
        public List<Reservation>? Reservations { get; set; }

    }
}
