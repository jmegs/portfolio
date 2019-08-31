import React from 'react';
import {Link} from 'gatsby'

const NavBar = () => {
  return ( 
    <header className="u-box navbar">
      <Link to="/" className="navbar__name">
        <span className="navbar__emoji" role="img" aria-label="emoji">🙃 </span> John Meguerian
      </Link>
      <span className="navbar__tagline">Don't Panic.</span>
    </header>
   );
}
 
export default NavBar;
