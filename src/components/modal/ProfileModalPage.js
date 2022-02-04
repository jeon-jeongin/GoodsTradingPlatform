import React from 'react';
import styled from 'styled-components';

const ModalPage = () => {
  return (
  <>
    <Input
      type="text"
      autoComplete="userid"
      name="userid"
      placeholder="아이디" />
    <Input
      type="password"
      autoComplete="new-password"
      name="password"
      placeholder="비밀번호" />
    <Input
      type="text"
      autoComplete="username"
      name="username"
      placeholder="이름" />
    <Input
      type="email"
      autoComplete="useremail"
      name="useremail"
      placeholder="이메일" />
    <Input
      type="text"
      autoComplete="phonenumber"
      name="phonenumber"
      placeholder="전화번호" />
  </>
  );
};
  
export default ModalPage;

const Input = styled.input`
  margin: 0.5rem 2.5rem;
  padding: 0.4rem;
  width: 80%;
  border-radius: 5px;
  border: solid 1px #DEDEDE;
`;
