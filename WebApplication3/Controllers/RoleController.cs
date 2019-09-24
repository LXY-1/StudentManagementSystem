using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class RoleController : Controller
    {
        // GET: Role
        public ActionResult SearchRole()
        {
            return View();
        }
        public ActionResult AddRole()
        {
            return View();
        }
    }
}