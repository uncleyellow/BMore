using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class Room
    {
        public Guid Id { get; set; }
        public string RoomNumber { get; set; }
        public Guid HotelId { get; set; }
        public decimal Price { get; set; }
        public Hotels Hotel { get; set; }
        public List<Hotels>? Hotels { get; set; }
        public List<Reservation>? Reservations { get; set; }
    }
}
