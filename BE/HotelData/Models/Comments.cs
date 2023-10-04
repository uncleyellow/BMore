namespace HotelData.Models
{
    public class Comments
    {
        public Guid Id { get; set; }
        public string Contents { get; set; }

        public int Rate { get; set; }

        public Guid UserId { get; set; }

        public Guid HotelsId { get; set; }


    }
}
