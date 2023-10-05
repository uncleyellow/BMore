using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class Bills
    {
        [Key]
        public Guid Id { get; set; }
        public int Rooms { get; set; }
        public Guid TotalPrice { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public DateTime CreatAt { get; set; }
        public Guid UserId { get; set; }
        public User User { get; set; }
        public ICollection<BillsDetails> BillsDetails { get; set; }
    }
}
