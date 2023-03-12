export interface LayoutPropsType {
  children: React.ReactNode;
}

// ################################################
// ################################################
// ################################################

export interface SingleTodoType {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

// ################################################
// ################################################
// ################################################

export interface ReactQueryType {
  data: any;
  error: any;
  isError: boolean;
  isLoading: boolean;
}


export interface TodoComponentPropsType {
  todo: SingleTodoType
}