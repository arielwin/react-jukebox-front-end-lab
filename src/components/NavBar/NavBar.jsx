import { Link } from 'react-router-dom';
//import { AuthedUserContext } from '../../App';
import { useContext } from 'react';
import './NavBar.css'

const NavBar = ({something}) => {
  return (
    <>
      <ul>
        <li><Link to='/'>HOME</Link></li>
        <li><Link to='/tracks'>SONGS</Link></li>

      </ul>
    </>
  );
};

export default NavBar;
