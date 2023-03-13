export interface LayoutPropsType {
  children: React.ReactNode;
}

export interface SingleTodoType {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

export interface fetchTodosRequestType {
  data: Array<SingleTodoType> | undefined;
  error: null | Error;
  isError: boolean;
  isLoading: boolean;
}

export interface TodoComponentPropsType {
  todo: SingleTodoType;
}
