import React from 'react';
import PropTypes from 'prop-types';

import NavBar from './navbar'
import Footer from './footer'

import "../styles/main.scss"

const Layout = ({children}) => {
  return ( 
    <div className="container">
      <NavBar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  
   );
}

Layout.propTypes = {
  children: PropTypes.node.isRequired
}
 
export default Layout;
