using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class CourseController : Controller
    {
        // GET: Course
        public ActionResult SearchCourse()
        {
            return View();
        }
        public ActionResult AddCourse()
        {
            return View();
        }
    }
}