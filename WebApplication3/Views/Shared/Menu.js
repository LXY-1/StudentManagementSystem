/*
 * @Description: 管理系统菜单栏数据,部分以及菜单，有的还有二级菜单，其中neturl是用于跳转的，每次添加一个功能模块的时候，按照下面的方式就可以了。
 * @version: 
 * @Author: lxw
 * @Date: 2019-09-24 14:44:41
 * @LastEditors: lxw
 * @LastEditTime: 2019-09-24 15:22:37
 */
const MenuDatas = [
    {
        name:'用户管理',
        child:[
            {
                name:'用户查询',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            },
            {
                name:'添加用户',
                neturl:'@Html.ActionLink("添加用户", "AddUser", "User")'
            }
        ],
        neturl:''
    },
    {
        name:'角色管理',
        child:[
            {
                name:'角色查询',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            },
            {
                name:'添加角色',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            }
        ],
        neturl:''
    },
    {
        name:'权限管理',
        child:[],
        neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
    },
    {
        name:'学生管理',
        child:[
            {
                name:'查询学生',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            },
            {
                name:'添加学生',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            },
            {
                name:'学生选课',
                neturl:'@Html.ActionLink("用户查询", "SearchUser", "User")'
            }
        ],
        neturl:''
    },
    {
        name:'课程管理',
        child:[
            {
                name:'查询课程',
                neturl:'@Html.ActionLink("添加用户", "AddUser", "User")'
            },
            {
                name:'添加课程',
                neturl:'@Html.ActionLink("添加用户", "AddUser", "User")'
            },
        ],
        neturl:''
    },
    {
        name:'成绩管理',
        child:[
            {
                name:'登记成绩',
                neturl:'@Html.ActionLink("添加用户", "AddUser", "User")'
            }
        ],
        neturl:''
    }
]
 