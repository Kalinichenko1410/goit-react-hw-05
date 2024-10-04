import { NavLink } from 'react-router-dom';
import s from './Header.module.css';
import clsx from 'clsx';


const buildLinkClass = ({ isActive }) => {
  return clsx(s.links, isActive && s.activeLink);
};

const Header = () => {
  return (
      <div className={s.header}>
          <ul className={s.navLinks}>  
            <li className={s.navItems}><NavLink className={buildLinkClass} to="/">Home</NavLink></li>  
            <li className={s.navItems}><NavLink className={buildLinkClass} to="/movies">Movies</NavLink></li>  
          
          
        </ul>
          <p className={s.headerName}>MoviesSite</p>
    </div>
  )
}

export default Header