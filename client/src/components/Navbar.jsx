import { Badge } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { Search, ShoppingCartOutlined } from '@material-ui/icons/';

const Container = styled.div`
  height: 90px;
  /* width: 50px; */
  background-color: white;
`;

const Wrapper = styled.div`
  padding: 5x 20px;
  display: flex;
  justify-content: space-between;
`;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: pointer;
`;
const SearcContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;
const Center = styled.div`
  flex: 1;
  text-align: center;
`;
const Input = styled.input`
  border: none;
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;
const Logo = styled.h1`
  font-weight: bold;
`;

const MenuItem = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
`;

const Navbar = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>En</Language>
          <SearcContainer>
            <Input placeholder="search" />
            <Search style={{ color: 'gray', fontSize: '15' }} />
          </SearcContainer>
        </Left>
        <Center>
          <Logo>PenShop</Logo>
        </Center>
        <Right>
          <MenuItem> Create Account </MenuItem>
          <MenuItem> Sign Up </MenuItem>
          <MenuItem>
            <Badge badgeContent={2} color="secondary">
              <ShoppingCartOutlined />
            </Badge>
          </MenuItem>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
