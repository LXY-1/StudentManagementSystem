using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace WebApplication3.Controllers
{
    public class LoginController : Controller
    {
        // GET: Login ：url:xxx/Login进入这里调用控制器方法，也就是下面的Login
        public ActionResult Login()
        {
            return View();
        }
    }
}