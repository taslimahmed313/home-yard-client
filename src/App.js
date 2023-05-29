import { RouterProvider } from 'react-router-dom';
import './App.css';
import { router } from './Routers/Router/Router';

function App() {
  return (
    <div className="">
      {/* <h1>This is our new Project Home Page</h1> */}
      {/* <Navbar/> */}
      <RouterProvider router={router}></RouterProvider>
    </div>
  );
}

export default App;
