import React from 'react';
import style from './TodoList.css';

const TodoList = props => {
	const List = (
		<ul>
			{props.todos.map((todo) =>
				<li key={todo.id}>
					<a href="#" onClick={()=>props.removeTodo(todo.id)}>{todo.text}  <span>(Delete)</span></a>
				</li>
			)}
		</ul>
	);

	return (
		<div className={style.TodoList}>
		{List}
		</div>
	);
}

export default TodoList;