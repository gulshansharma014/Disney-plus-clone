import React from 'react'
import styled from 'styled-components'

const Maintenance = () => {
    return (
        <Container>
            <Background>
                <img src="/images/underMaintenance.png" alt="" />
            </Background>
        </Container>
    )
}

export default Maintenance

const Container = styled.div`
  position: relative;
  min-height: calc(100vh-250px);
  overflow-x: hidden;
  display: block;
  top: 72px;
  padding: 0 calc(3.5vw + 5px);
`;

const Background = styled.div`
  left: 0px;
  opacity: 0.9;
  position: fixed;
  right: 0px;
  top: 0px;
  z-index: -1;
  img {
    width: 100vw;
    height: 100vh;
    @media (max-width: 768px) {
      width: initial;
    }
  }
`;
