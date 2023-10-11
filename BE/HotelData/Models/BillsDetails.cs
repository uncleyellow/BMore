using System.ComponentModel.DataAnnotations;

namespace HotelData.Models
{
    public class BillsDetails
    {
        [Key]
        public Guid Id { get; set; }
        public Guid BillsId { get; set; }
        public Guid RoomId { get; set; }
        public Guid HotelId { get; set; }
        public Bills? Bills { get; set; }
    }
}
