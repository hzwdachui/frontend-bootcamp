import React from 'react';
import { TodoItem } from '../TodoApp.types';
import { string } from 'prop-types';
import { CompleteTodo } from '../TodoApp.types';

interface TodoListItemProps extends TodoItem {
  id: string;
  complete: CompleteTodo;
}

export class TodoListItem extends React.Component<TodoListItemProps, any> {
  render() {
    const { label, completed } = this.props;

    return (
      <li className="todo">
        <label>
          <input type="checkbox" checked={completed} onChange={() => undefined} /> {label}
        </label>
      </li>
    );
  }
}
