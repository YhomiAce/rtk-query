import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { useDeleteTodoMutation, useUpdateTodoMutation } from '../features/api/apiSlice';

const TodoItem = ({ todo }) => {
    const [ updateTodo ] = useUpdateTodoMutation();
    const [ deleteTodo ] = useDeleteTodoMutation();
    return (
        <article key={todo.id}>
            <div className="todo">
                <input
                    type="checkbox"
                    checked={todo.completed}
                    id={todo.id}
                    onChange={() => updateTodo({ ...todo, completed: !todo.completed })}
                />
                <label htmlFor={todo.id}>{todo.title}</label>
            </div>
            <button className="trash" onClick={() => deleteTodo({ id: todo.id })}>
                <FontAwesomeIcon icon={faTrash} />
            </button>
        </article>
    )
}

export default TodoItem