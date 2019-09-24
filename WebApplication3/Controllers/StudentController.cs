using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class StudentController : Controller
    {
        // GET: Student
        public ActionResult SearchStudent()
        {
            return View();
        }
        public ActionResult AddStudent()
        {
            return View();
        }
        public ActionResult SelectCourse()
        {
            return View();
        }
    }
}