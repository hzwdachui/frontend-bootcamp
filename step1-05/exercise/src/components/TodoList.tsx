import React from 'react';
import { TodoListItem } from '../components/TodoListItem';

export class TodoList extends React.Component<any, any> {
  render() {
    const l = ['1', '2', '3', '4'];
    const items = [];
    for (let name of l) {
      items.push(<TodoListItem num={name} />);
    }
    return <ul>{items}</ul>;
  }
}
