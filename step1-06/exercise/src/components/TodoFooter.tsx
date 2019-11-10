import React from 'react';

export const TodoFooter = (props: any) => {
  const itemCount = Object.keys(props.todos).filter(id => !props.todos[id].completed).length;
  const item = itemCount === 1 ? 'items' : 'item';
  return (
    <footer>
      <span>
        {itemCount} {item} left
      </span>
      <button className="submit">Clear Completed</button>
    </footer>
  );
};
