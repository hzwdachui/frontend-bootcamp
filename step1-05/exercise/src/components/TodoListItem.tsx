import React from 'react';

export class TodoListItem extends React.Component<any, any> {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <li className="todo">
        <label>
          <input type="checkbox" /> Todo {this.props.num}
        </label>
      </li>
    );
  }
}
