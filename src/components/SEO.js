import React from 'react';
import PropTypes from 'prop-types';
import { Helmet } from 'react-helmet';
import { StaticQuery, graphql } from 'gatsby';

const detailsQuery = graphql`
  query DefaultSEOQuery {
    site {
      siteMetadata {
        title
        description
        authorTwitterAccount
      }
    }
  }
`;

const SEO = ({ description, lang, meta, keywords, title, image }) => (
  <StaticQuery
    query={detailsQuery}
    render={(data) => {
      const metaDescription = description || data.site.siteMetadata.description;
      return (
        <Helmet
          htmlAttributes={{
            lang,
          }}
          title={title}
          titleTemplate={`%s | ${data.site.siteMetadata.title}`}
          meta={[
            {
              name: `description`,
              content: metaDescription,
            },
            {
              property: `og:title`,
              content: `${title} | ${data.site.siteMetadata.title}`,
            },
            {
              property: `og:description`,
              content: metaDescription,
            },
            {
              property: `og:type`,
              content: `website`,
            },
            {
              property: `og:image`,
              content: image,
            },
            {
              name: `twitter:card`,
              content: `summary`,
            },
            {
              name: `twitter:creator`,
              content: data.site.siteMetadata.authorTwitterAccount
                ? data.site.siteMetadata.authorTwitterAccount
                : '',
            },
            {
              name: `twitter:title`,
              content: title,
            },
            {
              name: `twitter:image`,
              content: image,
            },
            {
              name: `twitter:description`,
              content: metaDescription,
            },
          ]
            .concat(
              keywords.length > 0
                ? {
                    name: `keywords`,
                    content: keywords.join(`, `),
                  }
                : []
            )
            .concat(meta)}
        />
      );
    }}
  />
);

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.string),
  keywords: PropTypes.arrayOf(PropTypes.string),
  title: PropTypes.string.isRequired,
  image: PropTypes.string,
};

SEO.defaultProps = {
  description:
    "OCIUS Technology's Unmanned Surface Vessels (USVs) provide innovative autonomous solutions for persistent maritime surveillance",
  lang: `en`,
  meta: [],
  keywords: ['USV', 'unmmanned', 'autonomous', 'unmanned surface vessel', 'maritime', 'drones'],
  image: '',
};

export default SEO;
