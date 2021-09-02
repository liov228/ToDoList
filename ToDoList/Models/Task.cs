using System;
using System.ComponentModel.DataAnnotations;

namespace ToDoList.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string Title { get; set; }

        [DataType(DataType.Date)]
        public DateTime ReleaseDate { get; set; }
        public decimal Price { get; set; }
    }
}
