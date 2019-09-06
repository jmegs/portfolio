import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import {useSiteMeta} from '../hooks/useSiteMeta'


const SEO = ({title: pageTitle, description: pageDescription}) => {
  const {siteTitle, siteDescription} = useSiteMeta()
  
  let pageTitleFull = pageTitle ? `${pageTitle} | ${siteTitle}` : siteTitle
  let descriptionFull = pageDescription ? pageDescription : siteDescription
  
  return ( 
    <Helmet>
      <title>{pageTitleFull}</title>
      <meta name="description" content={descriptionFull} />
    </Helmet>
   );
}
 
export default SEO;

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}
