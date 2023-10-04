namespace HotelData.Models
{
    public class Bills
    {
        public Guid Id { get; set; }
        public int Rooms { get; set; }
        public Guid TotalPrice { get; set; }
        public DateTime CheckInDate { get; set; }
        public DateTime CheckOutDate { get; set; }
        public DateTime CreatAt { get; set; }
        public Guid UserId { get; set; }
    }
}
