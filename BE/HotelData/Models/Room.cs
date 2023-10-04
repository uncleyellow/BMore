using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class Room
    {
        public Guid Id { get; set; }
        public string RoomNumber { get; set; }
        public Guid HotelId { get; set; }
        public decimal Price { get; set; }
        public Guid UserId { get; set; }
        public int Status { get; set; }

    }
}
