using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class Hotels
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public decimal RoomNumbers { get; set; }
        public string Descriptions { get; set; }
        public string Picture { get; set; }
        public int TotalRooms => Rooms?.Count ?? 0;
        public int AvailableRooms => Rooms?.Count(r => r.Reservations.Count == 0) ?? 0;
        public int BookedRooms => Rooms?.Count(r => r.Reservations.Count > 0) ?? 0;
        public List<Room>? Rooms { get; set; }
        public List<User>? Users { get; set; }
    }
}
