import React from 'react'

import Container from '@material-ui/core/Container';

const Home = () => (
  <>
      <Container style={{maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box'}}>
          <h1>Material-UI Template</h1>
          <p>This is a basic fixed menu template using fixed size containers.</p>
          <p>
              A text container is used for the main container, which is useful for single column layouts.
          </p>

          <div style={{maxWidth: '100%', maxHeight: '100%', boxSizing: 'border-box'}}>
            <img src='/images/wireframe/media-paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
            <img src='/images/wireframe/paragraph.png' style={{ marginTop: '2em' }} />
          </div>
      </Container>

  </>
)

export default Home
