import { NavLink } from 'react-router-dom';
import { ErrorCode, ErrorDescription, Wraper, Link } from './NotFound.styled';

export const NotFound = () => {
  return (
    <Wraper>
      <ErrorCode>404</ErrorCode>
      <ErrorDescription>Page not found! </ErrorDescription>
      <Link>
        <NavLink to="/" className="css.link">
          Go to Home page
        </NavLink>
      </Link>
    </Wraper>
  );
};
