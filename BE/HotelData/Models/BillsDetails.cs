namespace HotelData.Models
{
    public class BillsDetails
    {
        public Guid Id { get; set; }
        public Guid BillsId { get; set; }
        public Guid HotelsId { get; set; }
        public Guid RoomId { get; set; }
    }
}
