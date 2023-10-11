using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class Hotels
    {
        [Key]
        public Guid Id { get; set; }
        public string? Name { get; set; }
        public string? Address { get; set; }
        public decimal RoomNumbers { get; set; }
        public string? Descriptions { get; set; }
        public string? Picture { get; set; }
        public  DateTime CreatAt { get; set; }
        public int TotalRooms { get; set; }
        public int AvailableRooms { get; set; }
        public int BookedRooms { get; set; }
        public Guid? UserId { get; set; }
        public User? User { get; set; }
        public ICollection<Room>? Room { get; set; }
    }
}
