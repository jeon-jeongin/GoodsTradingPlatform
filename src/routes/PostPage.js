import React, { useState } from 'react';
import styled from 'styled-components';
import Modal from '../components/modal/ChattingModalPage';
import { Grid } from '../elements';


const PostPage = () => {
  const [modalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <>
    <Grid width="1024px" margin="auto">
      <Button onClick={openModal}>채팅</Button>
      <Modal open={modalOpen} close={closeModal} header="채팅창">
      </Modal>
    </Grid>
    </>
  );
};

export default PostPage;

const Button = styled.button`

  &:hover{
    opacity: 0.6;
  }
`;
