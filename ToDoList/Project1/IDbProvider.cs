using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1
{
    public interface IDbProvider
    {
        public List<ToDo> GetTasks();
        public void ChangeTask(int id, string newTitle, string newBody);
        public void DeleteTask(int id);
        public Task AddTask(string title, string body);
    }
}
