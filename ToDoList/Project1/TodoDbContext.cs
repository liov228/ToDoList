using SQLite;
using System.Collections.Generic;
using Microsoft.EntityFrameworkCore;
using System;

namespace Project1
{
    public class TodoDbContext : DbContext
    {
        public TodoDbContext(DbContextOptions<TodoDbContext> options) : base(options) {}

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder) {}

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.Entity<ToDo>().ToTable("ToDo");
        }
        public DbSet<ToDo> ToDos { get; set; }

    }
}
