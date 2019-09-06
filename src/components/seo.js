import React from 'react';
import PropTypes from 'prop-types';

import { Helmet } from 'react-helmet';
import { useStaticQuery, graphql } from 'gatsby';
import {useSiteMeta} from '../hooks/useSiteMeta'


const SEO = ({pageTitle, pageDescription}) => {
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
  pageTitle: PropTypes.string,
  pageDescription: PropTypes.string
}
