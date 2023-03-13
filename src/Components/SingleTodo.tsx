import { TodoComponentPropsType } from "@/types";

const SingleTodo: React.FC<TodoComponentPropsType> = ({ todo }) => {
    return (
        <div className="bg-stone-100 rounded-md shadow-md p-2 text-black inline-block">
            <h1 className="text-xl font-medium text-stone-700">{todo.title}</h1>
            <span className="text-xs font-light">{`${todo.completed ? "Completed" : "not completed"}`}</span>
        </div>
    );
}

export default SingleTodo;