import React from 'react';

export class TodoHeader extends React.Component<any, any> {
  // what is any for the class parameters?
  // this component is quiet simple for only static html
  // just change the class to className
  render() {
    return (
      <header>
        <h1>todos</h1>
        <div className="addTodo">
          <input className="textfield" placeholder="add todo" />
          <button className="submit">Add</button>
        </div>
        <nav className="filter">
          <button className="completed">all</button>
          <button>active</button>
          <button>completed</button>
        </nav>
      </header>
    );
  }
}
