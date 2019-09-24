using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class UserController : Controller
    {
        // GET: User
        public ActionResult SearchUser()
        {
            return View();
        }
        // GET: User User/AddUser
        public ActionResult AddUser()
        {
            return View();
        }
    }
}