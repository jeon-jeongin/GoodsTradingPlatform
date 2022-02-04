import React, { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Table from "../../elements/Table";
import ModalPage from "../../components/modal/ProfileModalPage"
import 'antd/dist/antd.css';
import { Modal } from 'antd';

function ProfileData() {

  const [visible, setVisible] = useState(false);

  const columnsList = useMemo(()=> [
    {
    accessor: "id",
    Header: "ID",
  },
  {
    accessor: "name",
     Header: "Name",
  },
  {
    accessor: "pw",
    Header: "PassWord",
  },
  {
    accessor: "email",
    Header: "Email",
  },
  {
    accessor: "phone",
    Header: "Phone",
  },
  {
    accessor: "edit",
    Header: "Edit",
  },
  {
    accessor: "delete",
    Header: "Delete",
  },
  ], []);

  const arrayList = [
    {
        id: "1",
        name: "정인",
        pw: "1234",
        email: "wjddls@naver.com",
        phone: "010-6539-6133",
        edit: <Button onClick={() => setVisible(true)}>수정하기</Button>,
        delete: <Link to={`/accounts/my_page`}>탈퇴하기</Link>,
    },
  ];

  const [info, setInfo] = useState(arrayList);

  const getInfo = () => {
  data.getInfo().then(item => setInfo(item));
  };

  const data = useMemo(() => info, [info]);

  return (
    <>
      <Table columns={columnsList} data={data} />
      <Modal
        title="회원 정보 수정"
        centered
        visible={visible}
        onOk={() => setVisible(false)}
        onCancel={() => setVisible(false)}
      >
      <ModalPage/>
      </Modal>
    </>
  );
};

export default ProfileData;

const Button = styled.button`
  background-color: transparent;
  border: hidden;
  margin-left: -0.5rem;

  &:hover{
    opacity: 0.6;
  }
`;
