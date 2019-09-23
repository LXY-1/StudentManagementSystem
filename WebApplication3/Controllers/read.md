#### 这里的control作用仅仅是用于创建页面还有路由跳转需要，比如创建一个功能模块A，A下面有三个页面，需要新建一个AControl.cs，cs里面的相关方法就是由url映射执行，其中包括对应的url调用对应的方法返回相关的页面。新建一个Acontrol之后，在view试图下会生成一个A文件夹我们把我们的三个页面放到A文件夹里面，AControl分别有三个对应的方法映射对应的页面。

```javascript

例子：登录页
LoginControl.cs:
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

view试图：Login/Login.cshtml:


```

