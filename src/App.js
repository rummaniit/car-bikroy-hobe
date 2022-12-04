// import logo from './logo.svg';
import './App.css';
import { RouterProvider } from 'react-router-dom';
import { routes } from './Routes/Routes/Routes';
import {
  QueryClient, QueryClientProvider
} from '@tanstack/react-query'
// import { getTodos, postTodo } from '../my-api'

function App() {
  const queryClient = new QueryClient()
  return (
    <div className="max-w-[1000px] mx-auto">

      <QueryClientProvider
        client={queryClient}
      >
        <RouterProvider
          router={routes}
        ></RouterProvider>
      </QueryClientProvider>
    </div>
  );
}

export default App;
