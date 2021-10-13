using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1
{
    public class DbProvider : IDbProvider
    {
        private readonly TodoDbContext _context;

        public DbProvider(TodoDbContext dbContext)
        {
            _context = dbContext;
        }

        public async Task AddTask(string title, string body,string startDate,string endDate)
        {
            var task = new ToDo
            {
                Title = title,
                Body = body,
                StartDate = startDate,
                EndDate = endDate
            };
            await _context.ToDos.AddAsync(task);
            await _context.SaveChangesAsync();
        }

        public  List<ToDo> GetTasks()
        {
            return _context.ToDos.ToList();
        }

        public void ChangeTask(int id, string newTitle, string newBody,string newDate)
        {
            ToDo toDo = _context.ToDos.Where(x => x.Id == id).FirstOrDefault();
            toDo.Title = newTitle;
            toDo.Body = newBody;
            toDo.EndDate = newDate;
            _context.SaveChanges();
        }

        public void DeleteTask(int id)
        {
            ToDo toDo = new ToDo { Id = id };
            _context.Attach(toDo);
            _context.ToDos.Remove(toDo);
            _context.SaveChanges();
        }
    }
}
