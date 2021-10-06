using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Project1.Controllers
{
    
    [ApiController]
    [Route("[controller]")]
    public class WeatherForecastController : ControllerBase
    {
        private readonly IDbProvider dbProvider;

        public WeatherForecastController(IDbProvider dbPrtovider)
        {
            this.dbProvider = dbPrtovider;
        }
        [HttpGet]
        public List<ToDo> Get()
        {
            return dbProvider.GetTasks();
            
        }     
        [HttpPost] 
        public void Post([FromBody] Ttask ttask)
        {
            dbProvider.AddTask(ttask.Title,ttask.Body);
        }
        [HttpPut]
        public void Put([FromBody] Ttask ttask)
        {
            dbProvider.ChangeTask(ttask.Id ,ttask.Title,ttask.Body);
        }
        [HttpDelete]
        public void Delete([FromBody] Ttask ttask)
        {
            dbProvider.DeleteTask(ttask.Id);
        }
    }
}
