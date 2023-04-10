import { Link, useLocation } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import authAction from '../../redux/auth/actions';

/**
 * Single NavBarOption, checks if user is logged in or not to display an option
 * @param navBarOption
 * @returns {JSX.Element}
 * @constructor
 */
export default function NavBarOption({ navBarOption }) {
  const { logout } = authAction;
  const isLoggedIn = useSelector((state) => state.Auth.idToken);
  let location = useLocation();
  const dispatch = useDispatch();
  let isActive = '';
  // if (typeof navBarOption.jsx === 'undefined') {
  //     return <li className='nav-item'>{ navBarOption.JSX }</li>
  // }
  if (navBarOption.to === location.pathname) {
    isActive = 'active';
  }
  if (typeof navBarOption.displayIfLoggedIn === 'boolean') {
    if (navBarOption.displayIfLoggedIn && !isLoggedIn) {
      return <></>;
    }
    if (isLoggedIn && !navBarOption.displayIfLoggedIn) {
      return <></>;
    }
  }
  if (navBarOption.to === '/logout') {
    return (
      <li
        onClick={() => {
          dispatch(logout());
        }}
        className="nav-item"
      >
        <span className="nav-link">{navBarOption.option}</span>
      </li>
    );
  }
  return (
    <li className="nav-item">
      <Link className={'nav-link ' + isActive} to={navBarOption.to}>
        {navBarOption.option}
      </Link>
    </li>
  );
}
