import React, { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import styled from 'styled-components';
import Table from "../../elements/Table";
import 'antd/dist/antd.css';

function ManagerData() {

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
        delete: <Link to={`/accounts/myPage`}>회원 삭제</Link>,
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
    </>
  );
};

export default ManagerData;
