using SQLite;
using System.Collections.Generic;

namespace Project1
{
    public static class BD
    {

        public static SQLiteConnection _db;

        public static void DatabaseHandler()
        {

            _db = new SQLiteConnection("todolist.DB");
            _db.CreateTable<Task>();
        }
        public static void AddTask(string title, string body)
        {

            var task = new Task
            {
                Title = title,

                Body=body
            };

            _db.Insert(task);
        }
        public static List<Task> GetTasks()
        {
            return _db.Table<Task>().ToList();
        }
        public static void  ChangeTask(int id,string newTitle,string newBody)
        {
            _db.Update(new Task { Id = id, Title = newTitle, Body = newBody });
        }
        public static void DeleteTask(int id)
        {
            _db.Delete<Task>(id);
        }
    }
}
