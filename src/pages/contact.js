import _ from 'lodash';
import React from 'react';
import { Segment, Grid, Container, Divider } from 'semantic-ui-react';
import Layout from '../components/layout';
import Header from '../components/header';
import '../styles/global.css';

export default () => (
  <Layout>
    <Header title="Contact" description="Links to contact Ocius" />

    <div className="container-body ">
      <Grid columns={3} stackable className="container-contact-main">
        <Grid.Row>
          <Grid.Column width={5} className="padding">
            <Container>
              <strong>
                <p> For General Inquiries</p>
              </strong>
              <p>
                {' '}
                Main Phone:{' '}
                <a className="phone-link" href="tel:+61 2 9924 6400">
                  +61 2 9924 6400
                </a>
              </p>

              <p>
                {' '}
                Email:{' '}
                <a className="email-link" href="mailto:admin@ocius.com.au">
                  admin@ocius.com.au
                </a>
              </p>
              <br />
              <strong>
                <p> Address:</p>
              </strong>
              <p> Ainsworth Building</p>
              <p>University of New South Wales</p>
              <p>Willis Annex</p>
              <p>Kensington NSW 2052</p>

              <p>
                Phone:{' '}
                <a className="phone-link" href="tel:+61 2 9924 6400">
                  +61 2 9924 6400
                </a>
              </p>
            </Container>
          </Grid.Column>
          <Grid.Column width={5} className="padding">
            <Container>
              <strong>
                <p>For Investment Enquiries</p>
              </strong>
              <p>
                {' '}
                Email:{' '}
                <a className="email-link" href="mailto:cosecretary@ocius.com.au">
                  admin@ocius.com.au
                </a>{' '}
              </p>
              <br />
              <strong>
                <p> Postal Address:</p>
              </strong>
              <p> Office Box 4304</p>
              <p>Castlecrag</p>
              <p> Australia 2068</p>
            </Container>
          </Grid.Column>

          <Grid.Column width={4} floated="right" className="container-contact-right">
            <Grid.Column width={4} className="container-contact-right-items" divided="vertically">
              <h3> Latest News... </h3>

              <h3>
                {' '}
                OCIUS demonstrates ‘man portable’ USV prototype at Autonomous Warrior 18 Wargames
              </h3>

              <p>
                {' '}
                Ocius technology Ltd is building a new network of renewable energy powered unmanned
                surface vessels and...
              </p>
              <span style={{ color: 'black' }}> 13 December, 2018</span>
            </Grid.Column>
            <Grid.Column width={4} className="container-contact-right-items" divided="vertically">
              <Divider />
              <br />

              <h3> OCIUS Christens next generation of BlueBottle “BOB”.</h3>

              <p>
                {' '}
                Following our AGM on Tuesday, 27th November, 2018 as well as celebrating OCIUS’
                success at the...
              </p>
              <span style={{ color: 'black' }}> 29 November, 2018</span>
            </Grid.Column>
            <Grid.Column width={4} className="container-contact-right-items" divided="vertically">
              <Divider />
              <br />

              <h3> OCIUS Technology Awarded Defence Innovation Hub contract</h3>

              <p>
                {' '}
                The Defence Innovation Hub has awarded $1.7 million to Ocius, in order to “determine
                the viability...
              </p>
              <span style={{ color: 'black' }}> 22 November, 2018</span>
            </Grid.Column>
          </Grid.Column>
          <Grid.Column width={2} className="container-contact-right" />
        </Grid.Row>
      </Grid>
    </div>
  </Layout>
);
