import { useRoutes } from 'react-router';
import './App.css';
import EmployeeList from './components/Employees/EmployeeList';
import ItemList from './components/Items/ItemList';
import Login from './components/Login/Login';
import MainLayout from './components/MainLayout/MainLayout';
function App() {
  const routes=[
    {path:'/login',element:<Login/>},
    {path:'/',element:<MainLayout/>,
    children:[
      {path:'items',element:<ItemList/>},
      {path:'employees',element:<EmployeeList/>}
    ]
  }
  ]
  const element=useRoutes(routes);
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
