using HotelData.Models;
using Microsoft.EntityFrameworkCore;
using System.Diagnostics;

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
        public DbSet<Bills> Bills { get; set; }
        public DbSet<BillsDetails> BillsDetails { get; set; }
        public DbSet<Comments> Comments { get; set; }
        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<Hotels>()
            .HasOne<User>(s => s.User)
            .WithMany(g => g.Hotels)
            .HasForeignKey(s => s.UserId);

            modelBuilder.Entity<Bills>()
            .HasOne<User>(s => s.User)
            .WithMany(g => g.Bills)
            .HasForeignKey(s => s.UserId);

            modelBuilder.Entity<Comments>()
            .HasOne<User>(s => s.User)
            .WithMany(g => g.Comments)
            .HasForeignKey(s => s.UserId);


            modelBuilder.Entity<Room>()
            .HasOne<Hotels>(s => s.Hotels)
            .WithMany(g => g.Room)
            .HasForeignKey(s => s.HotelId);


            modelBuilder.Entity<BillsDetails>()
            .HasOne<Bills>(s => s.Bills)
            .WithMany(g => g.BillsDetails)
            .HasForeignKey(s => s.BillsId);
        }
    }
}
