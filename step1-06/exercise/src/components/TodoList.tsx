import React from 'react';
import { TodoListItem } from './TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const { filter, todos } = this.props;

    // filteredTodos returns an array of filtered todo keys [01,02,03]
    // 常用js函数filter()
    const filteredTodos = Object.keys(todos).filter(id => {
      return filter === 'all' || (filter === 'completed' && todos[id].completed) || (filter === 'active' && !todos[id].completed);
    });
    return (
      <ul className="todos">
        {filteredTodos.map(idx => (
          // idx 想叫啥叫啥,或者id什么的，其来自于数组
          <TodoListItem key={idx} id={idx} {...todos[idx]} />
        ))}
      </ul>
    );
  }
}
