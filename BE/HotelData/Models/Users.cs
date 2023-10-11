using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class User
    {
        [Key]
        public Guid Id { get; set; }
        public string userName { get; set; }
        public string Role { get; set; }
        public string Email { get; set; }
        public string PassWords { get; set; }
        public string? Address { get; set; }
        public decimal? PhoneNumbers { get; set; }
        public string? Pictures { get; set; }
        public DateTime? CreatAt { get; set; }
        public ICollection<Hotels>? Hotels { get; set; }
        public ICollection<Bills>? Bills { get; set; }
        public ICollection<Comments>? Comments { get; set; }

    }
}
