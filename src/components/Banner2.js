import React from "react";
import { Grid } from "../elements";
import styled from "styled-components";
import banner2 from "../img/banner2.png";

function Banner2(){
  return (
    <React.Fragment>
      <div style={{
        padding: "3rem 0",
        backgroundColor: "#FFFFFF",
      }}>
      <Grid width="1024px" margin="auto">
        <Image1></Image1>
      </Grid>
      </div>
    </React.Fragment>
  );
}

export default Banner2;

const Image1 = styled.div`
  height: 600px;
  background-image: url(${banner2});
  background-size: 1024px 628px;
`;