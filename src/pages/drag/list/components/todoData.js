const initialData = {
  tasks: {
    'task-1': {
      id: 'task-1',
      content: '开发图表组件'
    },
    'task-2': {
      id: 'task-2',
      content: '开发拖拽组件'
    },
    'task-3': {
      id: 'task-3',
      content: '开发权限测试组件'
    },
    'task-4': {
      id: 'task-4',
      content: '开发登录注册页面'
    },
    'task-5': {
      id: 'task-5',
      content: '开发头部组件'
    },
    'task-6': {
      id: 'task-6',
      content: '开发表格相关组件'
    },
    'task-7': {
      id: 'task-7',
      content: '开发表单相关组件'
    },
    'task-8': {
      id: 'task-8',
      content: '初始化项目，生成工程目录，完成相关配置'
    },
    'task-9': {
      id: 'task-9',
      content: '开发项目整体框架'
    }
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'TODO',
      taskIds: ['task-1', 'task-2', 'task-3']
    },
    'column-2': {
      id: 'column-2',
      title: 'TODOING',
      taskIds: ['task-4','task-5','task-6','task-7']
    },
    'column-3': {
      id: 'column-3',
      title: 'FINISH',
      taskIds: ['task-8','task-9']
    }
  },

  columnOrder: ['column-1', 'column-2', 'column-3']
}

export default initialData