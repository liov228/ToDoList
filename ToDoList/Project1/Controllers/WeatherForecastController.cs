using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    public class Ttask
    {
        public int Id { get; set; }

        public string Title { get; set; }

        public string Body { get; set; }
    }
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        
        [HttpGet]
        public List<Task> Get()
        {
            return BD.GetTasks();
            
        }     
        [HttpPost] 
        public void Post([FromBody] Ttask ttask)
        {
            BD.AddTask(ttask.Title,ttask.Body);
        }
        [HttpPut]
        public void Put([FromBody] Ttask ttask)
        {
            BD.ChangeTask(ttask.Id ,ttask.Title,ttask.Body);
        }
        [HttpDelete]
        public void Delete([FromBody] Ttask ttask)
        {
            BD.DeleteTask(ttask.Id);
        }
    }
}
