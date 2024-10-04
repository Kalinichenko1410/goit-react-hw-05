import { Link } from 'react-router-dom';
import s from './Header.module.css';

const Header = () => {
  return (
      <div className={s.header}>
          <ul className={s.navlinks}>  
            <li className={s.navItems}><Link className={s.links} to="/">Home</Link></li>  
            <li className={s.navItems}><Link className={s.links} to="/movies">Movies</Link></li>  
          
          
        </ul>
          <p className={s.headerName}>MoviesSite</p>
    </div>
  )
}

export default Header