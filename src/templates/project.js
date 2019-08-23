import React from 'react';
import {graphql} from 'gatsby'

import Layout from '../components/layout'


const ProjectLayout = ({data}) => {
  return ( 
    <Layout>

      <article className="project">
        <div className="project__intro">
          <header className="project__header">
            <h1 className="project__title">__TITLE__</h1>
            <ul className="project__meta">
              <li>__WHAT__</li>
              <li>__WHEN__</li>
              <li>__WHERE__</li>
            </ul>
          </header>
        
          <div className="project__text">
            {/* content */}
          </div>
        </div>


        <section className="project__gallery">
          {/* each image figure with gatsby-image inside */}
        </section>

      </article>
    </Layout>
   );
}

// export const query = graphql``
export default ProjectLayout;
