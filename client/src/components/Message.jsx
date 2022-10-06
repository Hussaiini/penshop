import React from 'react';
import styled from 'styled-components';

const Container = styled.div`
  height: 30px;
  display: flex;
  background-color: black;
  color: white;
  align-items: center;
  justify-content: center;
`;

const Message = () => {
  return (
    <Container>
      AWOOOF ! PROMO PROMO PROMO BUY ANYTHING UNDER $30 PLUS FREE SHIPPING!
    </Container>
  );
};

export default Message;
