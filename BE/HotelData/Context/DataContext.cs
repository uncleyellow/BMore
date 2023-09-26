using HotelData.Models;
using Microsoft.EntityFrameworkCore;

namespace HotelData.Context
{
    public class DataContext : DbContext
    {
        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {

        }
        public DbSet<User> Users { get; set; }
        public DbSet<Hotels> Hotels { get; set; }
        public DbSet<Room> Rooms { get; set; }
        public DbSet<Reservation> Reservations { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<User>()
                .HasMany(u => u.Reservations)
                .WithOne(r => r.User)
                .HasForeignKey(r => r.UserId);

            modelBuilder.Entity<Room>()
                .HasMany(r => r.Reservations)
                .WithOne(r => r.Room)
                .HasForeignKey(r => r.RoomId);

            modelBuilder.Entity<Hotels>()
               .HasMany(h => h.Rooms)
               .WithOne(r => r.Hotel)
               .HasForeignKey(r => r.HotelId);

            modelBuilder.Entity<Reservation>()
                .HasOne(r => r.User)
                .WithMany(u => u.Reservations)
                .HasForeignKey(r => r.UserId);

            modelBuilder.Entity<Reservation>()
                .HasOne(r => r.Room)
                .WithMany(r => r.Reservations)
                .HasForeignKey(r => r.RoomId);
        }
    }
}
