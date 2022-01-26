import React from "react";
import { Grid } from "../elements";
import styled, { createGlobalStyle } from "styled-components";
import Logo from '../img/ourGoods.svg';
import { Link } from "react-router-dom";

function Header() {
  return (
    <React.Fragment>
      <GlobalStyle />
      <div
        style={{
          position: "sticky",
          top: "0",
          width: "100%",
          backgroundColor: "#FFFFFF",
        }}
      >
        <Grid is_flex padding="5px 0px" width="1024px" margin="auto">
          <Grid is_start maxwidth="700px">
          <Link to={`/`}>
            <img
              width="150px"
              height="40px"
              src={Logo}
              alt="굿즈 로고" />
          </Link>
            <InputWrap>
              <Grid is_flex>
                <Input placeholder="카테고리, 물품명 등을 검색하세요"></Input>
                <img
                  style={{ marginRight: "10px" }}
                  src="https://d1unjqcospf8gs.cloudfront.net/assets/home/base/header/search-icon-7008edd4f9aaa32188f55e65258f1c1905d7a9d1a3ca2a07ae809b5535380f14.svg"
                  alt="검색 돋보기"
                ></img>
              </Grid>
            </InputWrap>
          </Grid>
          <Link to={`/`} style={{ textDecoration: 'none' }}><Menu>Home</Menu></Link>
          <Link to={`/post`} style={{ textDecoration: 'none' }}><Menu>Post</Menu></Link>
          <Link to={`/accounts/myPage`} style={{ textDecoration: 'none' }}><Menu>User</Menu></Link>
          <Link to={`/accounts/login`}><Button>Log In</Button></Link>
          <Link to={`/accounts/singup`}><Button>Sign Up</Button></Link>
        </Grid>
      </div>
    </React.Fragment>
  );
};
export default Header;

const GlobalStyle = createGlobalStyle`
  body {
    padding: 0;
    margin: 0;
  }
`

const InputWrap = styled.div`
  border-radius: 5px;
  border: solid 1px #E9ECEF;
  text-decoration: none;
  height: 40px;
  box-sizing: border-box;
  margin: 10px 20px;
`;

const Input = styled.input`
  border: hidden;
  margin: 0px;
  padding: 10px;
  width: 340px;
  font-size: 15px;
  margin: auto;
  -webkit-appearance: none;
  background-color: transparent;
  
  &::placeholder{
    color: #999999;
  }
`;

const Menu = styled.div`
  margin: auto;
  padding: 10px;
  color: #333333;
  font-size: 16px;

  &:hover{
    text-decoration: underline;
  }
`;

const Button = styled.button`
  width: 90px;
  border-radius: 5px;
  border: solid 1px #E9ECEF;
  box-sizing: border-box;
  text-decoration: none;
  display: inline-block;
  vertical-align: middle;
  font-size: 14px;
  text-align: center;
  padding: 7px;
  height: 40px;
  margin: 0px 5px;
  background-color: #ffffff;
  color: #333333;

  &:hover{
    background-color: #EC9A71;
    color: #ffffff;
  }
`;
