import React from 'react';
import Layout from '../layouts/Layout';
import Container from '../components/Container';
import BluebottleImage from '../../static/wallpaperocius-768x432.jpg';

const styles = {
  center: {
    textAlign: 'center'
  },
  header: {
    textAlign: 'center',
    position: 'relative',
    paddingBottom: '0.25em',
    ':after': {
      content: '',
      position: 'absolute',
      bottom: 0,
      left: 0,
      right: 0,
      borderBottom: '1px solid #60d2f6',
      height: '1px',
      width: '150px',
      margin: 'auto'
    }
  },
  highlight: {
    color: '#3366ff'
  },
  link: {
    color: '#135292'
  }
};

export default () => (
  <Layout>
    <section className="page-content">
      <Container>
        <article>
          <h1 style={styles.header}>What is a USV?</h1>
          <h3 style={styles.center}>
            <strong>A USV is an Unmanned Surface Vessel</strong>
          </h3>
          <h4>
            <strong>There are two types:</strong>
          </h4>
          <ol>
            <li>
              Conventional powered vessels which are unmanned. They have limited time and range at
              sea and are acoustically noisy.
            </li>
            <li>
              Renewable energy powered vessels which are unmanned. They use solar and/or wind and/or
              wave energy so are persistent and can stay at sea indefinitely only limited by
              biofouling. Bluebottles are in this category.
            </li>
          </ol>
          <h4>
            <strong>Bluebottle USVs are the new &apos;Satellites Of the Sea&apos;.</strong>
          </h4>
          <p>
            Bluebottle USVs are autonomous data gathering &amp; communications platforms being like
            &apos;satellites of the sea&apos;. They offer&nbsp;multiple economic and operational
            advantages over conventional methods of ocean surveillance such as:
          </p>
          <ul>
            <li>Continuous coverage</li>
            <li>Wide coverage</li>
            <li>Greatly reduced capital costs</li>
            <li>Greatly reduced operational costs - no fuel, food or crew</li>
            <li>Elimination of errors due to human fatigue</li>
            <li>No people or expensive assets in harm&apos;s way</li>
          </ul>
          <p>
            Other persistent USVs carry only small payloads, have low power for the payload and
            often have low performance to manoeuvre, avoid collisions and &apos;make way&apos; out
            of currents.
          </p>
          <p style={styles.center}>
            <strong>
              Bluebottles harvest all the weather on the ocean; the sun, the wind and the waves so
              they can advance under all conditions and can remain at sea for months at a
              time.&nbsp;
            </strong>
          </p>
          <p style={styles.center}>
            <strong>
              Bluebottles have more power, payload and performance in the one USV than any known
              persistent USV.
            </strong>
          </p>
          <p style={styles.center}>
            <img src={BluebottleImage} alt="Bluebottle USV" />
          </p>
          <p>
            Applications for USVs are myriad and measured in the billions of dollars. Major entities
            in offshore energy, defence and science are investing heavily in unmanned systems for
            “dull, dirty or dangerous” operations. Independent industry research estimates the USV
            market for defence alone to be a staggering US$3.8Bn by 2020¹.
          </p>
          <p>
            Bluebottle USVs&nbsp;have greater <strong>power, payload and performance</strong>
            &nbsp;compared to known competitors and are able to navigate freely and indefinitely
            across the world’s oceans. Already Ocius is working with two major private-sector
            partners to develop USVs capable of undertaking specific high value applications in
            hydrography and defence.
          </p>
          <p>
            The team at Ocius are focusing all of our experience, networks and love of the sea to
            create a revolutionary Australian technology for the world’s oceans.
          </p>
          <p>
            <strong>
              We&apos;d love to hear from you.&nbsp;<span style={styles.highlight}>Tell us </span>
              what YOU think about our product or how it could benefit your organisation...
            </strong>
          </p>
          <p>
            ¹&nbsp;
            <a
              style={styles.link}
              href="http://marketinfogroup.com/unmanned-surface-vehicles-for-defense-and-security-markets-technologies/"
            >
              http://marketinfogroup.com/unmanned-surface-vehicles-for-defense-and-security-markets-technologies/
            </a>
          </p>
        </article>
      </Container>
    </section>
  </Layout>
);
