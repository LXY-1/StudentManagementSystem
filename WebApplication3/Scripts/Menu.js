/*
 * @Description: 管理系统菜单栏数据,部分以及菜单，其中neturl是用于跳转的net mvc的一个跳转页面的方式，每次添加一个功能模块的时候，按照下面的方式就可以了。
 ***************  下面的功能模块页面我已经都添加了，如果还有需要的话.....
 * @version: 
 * @Author: lxw
 * @Date: 2019-09-24 14:44:41
 * @LastEditors: lxw
 * @LastEditTime: 2019-09-24 15:22:37
 */
const MenuDatas = [
    {
        name: '用户管理',
        child: [
            {
                name: '用户查询',
                neturl: '@Html.ActionLink("用户查询", "SearchUser", "User")',
                controlName: 'User',//页面所属的控制器
                pageName:'SearchUser'//具体的页面
            },
            {
                name: '添加用户',
                neturl: 'Html.ActionLink("添加用户", "AddUser", "User")',
                controlName: 'User',//页面所属的控制器
                pageName: 'AddUser'//具体的页面
            }
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    },
    {
        name: '角色管理',
        child: [
            {
                name: '角色查询',
                neturl: '@Html.ActionLink("用户查询", "SearchRole", "Role")',
                controlName: 'Role',//页面所属的控制器
                pageName: 'SearchRole'//具体的页面
            },
            {
                name: '添加角色',
                neturl: '@Html.ActionLink("用户查询", "AddRole", "Role")',
                controlName: 'Role',//页面所属的控制器
                pageName: 'AddRole'//具体的页面
            }
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    },
    {
        name: '权限管理',
        child: [
            {
                name: '查询权限',
                neturl: '@Html.ActionLink("用户查询", "SearchPermission", "Permission")',
                controlName: 'Permission',//页面所属的控制器
                pageName: 'SearchPermission'//具体的页面
            }
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    },
    {
        name: '学生管理',
        child: [
            {
                name: '查询学生',
                neturl: '@Html.ActionLink("用户查询", "SearchStudent", "Student")',
                controlName: 'Student',//页面所属的控制器
                pageName: 'SearchStudent'//具体的页面
            },
            {
                name: '添加学生',
                neturl: '@Html.ActionLink("用户查询", "AddStudent", "Student")',
                controlName: 'Student',//页面所属的控制器
                pageName: 'AddStudent'//具体的页面
            },
            {
                name: '学生选课',
                neturl: '@Html.ActionLink("用户查询", "SelectCourse", "Student")',
                controlName: 'Student',//页面所属的控制器
                pageName: 'SelectCourse'//具体的页面
            }
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    },
    {
        name: '课程管理',
        child: [
            {
                name: '查询课程',
                neturl: '@Html.ActionLink("添加用户", "SearchCourse", "Course")',
                controlName: 'Course',//页面所属的控制器
                pageName: 'SearchCourse'//具体的页面
            },
            {
                name: '添加课程',
                neturl: '@Html.ActionLink("添加用户", "AddCourse", "Course")',
                controlName: 'Course',//页面所属的控制器
                pageName: 'AddCourse'//具体的页面
            },
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    },
    {
        name: '成绩管理',
        child: [
            {
                name: '登记成绩',
                neturl: '@Html.ActionLink("添加用户", "RegisteGrade", "Grade")',
                controlName: 'Grade',//页面所属的控制器
                pageName: 'RegisteGrade'//具体的页面
            }
        ],
        neturl: '',
        controlName: '',//页面所属的控制器
        pageName: ''//具体的页面
    }
]
