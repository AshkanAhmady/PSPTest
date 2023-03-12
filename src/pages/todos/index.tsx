import { fetchTodos } from "@/Http";
import { ReactQuery, SingleTodo } from "@/types";
import { useQuery } from "react-query";

export default function Todos() {

  const { isLoading, isError, data, error }: ReactQuery = useQuery('todos', fetchTodos)

  return (
    isLoading ? <span>Loading...</span> : isError ? <span>Error: {error.message}</span> :
      <ul>
        {data?.map((todo: SingleTodo) => (
          <li key={todo.id}>{todo.title}</li>
        ))}
      </ul>
  )
}
