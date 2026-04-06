import { Link, Outlet  } from 'react-router-dom';
import { Home } from './Task1';

export const MainPage = () => (
    <>
  <nav>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/about">About</Link>
      </li>
      <li>
        <Link to="/products">Products</Link>
      </li>
      <li>
        <Link to="/contacts">Contacts</Link>
      </li>
      <li>
        <Link to="/info">Info</Link>
      </li>
    </ul>  
  </nav>
   <hr/> 
{/* !!!!!!!!!!!!!!!!!!!!!! */}
<div id = "main">
  
  <Outlet/> 

</div>
  
{/* !!!!!!!!!!!!!!!!!!!!!! */}
  <Home></Home>
  <hr/>  
  </>

);