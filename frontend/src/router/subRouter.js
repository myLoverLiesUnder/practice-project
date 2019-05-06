import Content from '@/pages/Content'

export const subRouter = [
    {
        path: '/example',
        name: 'example',
        title: '示例',
        icon: 'dashboard',
        component: Content,
        children: [
            {
                path: '/example/list',
                name: 'list',
                title: '示例list',
                component: resolve => {
                    require(['@/pages/example/list.vue'], resolve)
                }
            },
            {
                path: '/example/create',
                name: 'create',
                title: '示例create',
                component: resolve => {
                    require(['@/pages/example/create.vue'], resolve)
                }
            }
        ]
    },
    {
        path: '/member',
        name: 'member',
        title: '成员',
        icon: 'question_answer',
        component: Content,
        children: [
            {
                path: '/member/list',
                name: 'memberList',
                title: '成员list',
                component: resolve => {
                    require(['@/pages/member/list.vue'], resolve)
                }
            },
            {
                path: '/member/:id',
                name: 'memberEdit',
                title: '成员edit',
                component: resolve => {
                    require(['@/pages/member/edit.vue'], resolve)
                }
            }
        ]
    },
];
