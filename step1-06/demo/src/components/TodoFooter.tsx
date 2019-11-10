import React from 'react';

export const TodoFooter = (props: any) => {
  // id 从哪来？
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  return (
    <footer>
      <span>{itemCount} items left</span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
