import React from 'react';

export default function TodoList({todos, completeTodo, deleteTodo}) {
    return (
        <ul>
            {todos.map((todo) => (
                <li key={todo.id}>
                    {todo.completed ? <strike>{todo.content}</strike> : todo.content}
                    <div>
                        <button className="complete" onClick={() => completeTodo(todo.id)}>{todo.completed ? '-' : '√'}</button>
                        <button className="delete" onClick={() => deleteTodo(todo.id)}>X</button>
                    </div>
                </li>
            ))}
        </ul>
    );
}