import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import { Link } from "react-router-dom";

function Footer(){
  return (
  <React.Fragment>
    <div style={{
      position: "fixed",
      bottom: "0",
      width: "100%",
      backgroundColor: "#FFFFFF",
    }}>
    <Grid is_flex width="1024px" height="150px" margin="auto">
      <Grid>Menu
        <Link to={`/`} style={{ textDecoration: 'none' }}><Menu>Home</Menu></Link>
        <Link to={`/post`} style={{ textDecoration: 'none' }}><Menu>Post</Menu></Link>
        <Link to={`/myPage`} style={{ textDecoration: 'none' }}><Menu>User</Menu></Link>
      </Grid>
      <Grid>Contanct us

        <P>김동현 | d_k067@student.usc.edu.au</P>
        <P>김바다 | padahkim@gmail.com</P>
        <P>박헤경 | hyekyoung1996@gmail.com</P>
        <P>송지영 | songjjyy@naver.com</P>
        <P>이현수 | zxzc9712@gmail.com</P>
        <P>전정인 | wjddls1702@naver.com</P>
      </Grid>
      <Grid>Text
        <P>멀티캠퍼스(Multicampus)</P>
        <P>지능형 웹서비스 풀스택 1기</P>
        <P>2022.01.21~2022.02.15</P>
        <P>웹서비스 세미프로젝트입니다.</P>
       </Grid>
    </Grid>
    </div>    
  </React.Fragment>
    );
};
export default Footer;

const Menu = styled.div`
  padding-top: 5px;
  color: #333333;
  font-size: 14px;
`;

const P = styled.div`
  padding-top: 5px;
  color: #333333;
  font-size: 12px;
`;