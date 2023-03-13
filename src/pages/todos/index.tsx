import SingleTodo from "@/Components/SingleTodo";
import { fetchTodos } from "@/Http";
import { fetchTodosRequestType, SingleTodoType } from "@/types";
import { useQuery } from "react-query";

export default function Todos() {

  const { isLoading, isError, data, error }: fetchTodosRequestType = useQuery('todos', fetchTodos)

  return (
    isLoading ? <span>Loading...</span> : isError ? <span>Error: {error?.message}</span> :
      <div className="flex gap-2 flex-col">
        {data?.map((todo: SingleTodoType) => (
          <SingleTodo key={todo.id} todo={todo} />
        ))}
      </div>
  )
}
