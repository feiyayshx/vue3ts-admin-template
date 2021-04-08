
export const constantRoutes = []

export const asyncRoutes = [
    {
        title: '首页',
        path: 'dashboard',
        key: 'Index',
        icon: 'el-icon-s-home'
    },
    {
        title: '表单页面',
        path: 'form',
        key: 'Form',
        icon: 'el-icon-document',
        children: [
            {
                title: '单列表单',
                path: 'single-form',
                key: 'SingleForm',
            },
            {
                title: '多列表单',
                path: 'multi-form',
                key: 'MultiForm',
            },
            {
                title: '分布表单',
                path: 'step-form',
                key: 'StepForm',
            },
            {
                title: '分组表单',
                path: 'group-form',
                key: 'GroupForm',
            }
        ]
    },
    {
        title: '列表页面',
        path: 'list',
        key: 'List',
        icon:'el-icon-s-order',
        children: [
            {
                title: '基础列表',
                path: 'base-list',
                key: 'BaseList',
            },
            {
                title: '卡片列表',
                path: 'card-list',
                key: 'CardList',
            },
            {
                title: '表格列表',
                path: 'table',
                key: 'Table',
                children: [
                    {
                        title: '单列过滤',
                        path: 'single-filter',
                        key: 'SingleFilter',
                    },
                    {
                        title: '多列过滤',
                        path: 'multi-filter',
                        key: 'MultiFilter',
                    },
                    {
                        title: '多表头表格',
                        path: 'multi-thead',
                        key: 'MultiThead',
                    },
                    {
                        title: '行内编辑表格',
                        path: 'edit-table',
                        key: 'EditTable',
                    },
                    {
                        title: '树型表格',
                        path: 'tree-table',
                        key: 'TreeTable',
                    }
                ]
            }
        ]
    },
    {
        title: '功能组件',
        path: 'components',
        key: 'Components',
        icon:'el-icon-s-shop',
        children: [
            {
                title: '富文本编辑器',
                path: 'editor',
                key: 'Editor',
            },
            {
                title: '拖拽排序',
                path: 'drag-sort',
                key: 'DragSort',
            },
            {
                title: '工作流',
                path: 'work-flow',
                key: 'WorkFlow',
            }
        ]
    },
    {
        title: '系统配置',
        path: 'setting',
        key: 'Setting',
        icon: 'el-icon-s-tools',
        children: [
            {
                title: '用户管理',
                path: 'user-manage',
                key: 'UserManage',
            },
            {
                title: '角色管理',
                path: 'role-manage',
                key: 'RoleManage',
            },
            {
                title: '菜单管理',
                path: 'menu-manage',
                key: 'MenuManage',
            }
        ]
    },
    {
        title: '缺省页面',
        path: 'default',
        key: 'Default',
        icon:'el-icon-s-release',
        children: [
            {
                title: '404页面',
                path: 'html404',
                key: 'Html404',
            },
            {
                title: '403页面',
                path: 'html403',
                key: 'Html403',
            }
        ]
    },
    {
        title: '平台监控',
        path: 'monitor',
        key: 'monitor',
        icon:'el-icon-s-platform',
        children: [
            {
                title: '监控日志',
                path: 'monitor-logs',
                key: 'monitor-logs',
            },
            {
                title: '数据分析',
                path: 'analysis-data',
                key: 'analysis-data',
            }
        ]
    }

]