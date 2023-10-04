namespace HotelData.Models
{
    public class Employees
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int Sex { get; set; }
        public DateTime DateOfBirth { get; set; }
        public string Address { get; set; }
        public int Role { get; set; }
        public Guid HotelId { get; set; }
    }
}
