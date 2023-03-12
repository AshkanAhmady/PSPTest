export interface LayoutProps {
  children: React.ReactNode;
}

// ################################################
// ################################################
// ################################################

export interface SingleTodo {
  completed: boolean;
  id: number;
  title: string;
  userId: number;
}

// ################################################
// ################################################
// ################################################

export interface ReactQuery {
  data: any;
  error: any;
  isError: boolean;
  isLoading: boolean;
}
