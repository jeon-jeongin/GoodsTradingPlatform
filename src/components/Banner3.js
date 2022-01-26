import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import banner3 from "../img/banner3.png";

function Banner3(){
  return (
    <React.Fragment>
      <div style={{
        padding: "3rem 0 0 0",
        backgroundColor: "#E9ECE9",
      }}>
      <Grid width="1024px" margin="auto">
        <Image1></Image1>
      </Grid>
      </div>
    </React.Fragment>
  );
}

export default Banner3;

const Image1 = styled.div`
  height: 630px;
  background-image: url(${banner3});
  background-size: 1024px 628px;
`;