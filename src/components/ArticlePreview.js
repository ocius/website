import React from 'react';
import PropTypes from 'prop-types';
import assign from 'object-assign';
import { Link as GatsbyLink } from 'gatsby';
import Img from 'gatsby-image';

import font from '../common/font';
import Heading from './Heading';
import mq from '../common/mq';

const markup = html => ({ __html: html });

function ArticlePreview({ title, paragraph, image, href }) {
  const styles = {
    container: {
      fontFamily: font('grotesk'),
      color: '#001826',
      backgroundColor: '#ffffff',
      maxWidth: '540px',
      padding: '20px',

      [`@media (maxWidth: ${mq.max[768]})`]: {
        padding: 0
      }
    },

    imageContainer: {
      margin: 0
    },

    textContainer: {
      marginBottom: '22px'
    },

    anchor: {
      color: 'inherit',
      display: 'block',
      textDecoration: 'none'
    },

    heading: {
      fontSize: '24px',
      lineHeight: 32 / 24
    },

    paragraph: {
      fontSize: '1em',
      fontWeight: 300,
      lineHeight: 28 / 16,
      marginBottom: 0,
      marginTop: '13px'
    },

    image: {
      display: 'block',
      maxWidth: '100%'
    }
  };

  return (
    <article className="ArticlePreview" style={styles.container}>
      <div className="ArticlePreview-text" style={styles.textContainer}>
        <GatsbyLink to={href} style={assign({}, styles.anchor, { marginTop: '12px' })}>
          <Heading level={3} weight="thick" override={styles.heading}>
            {title}
          </Heading>

          <p style={styles.paragraph} dangerouslySetInnerHTML={markup(paragraph)} />
        </GatsbyLink>
      </div>

      {image && (
        <figure className="ArticlePreview-image" style={styles.imageContainer}>
          <GatsbyLink to={href} style={styles.anchor}>
            <Img fluid={image} alt="" style={styles.image} />
          </GatsbyLink>
        </figure>
      )}
    </article>
  );
}

ArticlePreview.propTypes = {
  title: PropTypes.string.isRequired,
  paragraph: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  image: PropTypes.objectOf(PropTypes.object)
};

ArticlePreview.defaultProps = {
  image: {}
};

export default ArticlePreview;
