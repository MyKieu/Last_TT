import React, { useState } from 'react';
import PerfectScrollbar from 'react-perfect-scrollbar';
import { Table, Pagination } from 'antd';
import './MyOrders.scss';
import { NewsLetter } from '../index';
import { mockData } from './mock-data';

const MyOrders = () => {
  const [tableData, setTableData] = useState(mockData);

  // define columns of table
  const columns = [
    {
      title: 'ORDER CODE',
      dataIndex: 'orderCode',
      key: 'orderCode',
    },
    {
      title: 'DATE',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'PRODUCTS',
      dataIndex: 'products',
      key: 'products',
      render: function renderElement(text) {
        return <span className="truncate d-block" style={{maxWidth: '340px'}}>{text}</span>;
      },
    },
    {
      title: 'AMOUNT',
      dataIndex: 'amount',
      key: 'amount',
      render: function renderElement(num) {
        return <span>{`$${num.toLocaleString()}.00`}</span>;
      },
    },
    {
      title: 'STATUS',
      dataIndex: 'status',
      key: 'status',
      render: function renderElement(text) {
        return <span className={text === 'Delivered' ? 'color-atlantis' : 'color-denim'}>{text}</span>;
      },
    }
  ];

  // handle change pagination for table
  const handleChangePagination = (page, pageSize) => {
    const begin = (page - 1) * pageSize;
    const end = page * pageSize;
    
    setTableData(mockData.slice(begin, end));
  };

  return (
    <div>
      <div className="my-orders pt-200px mb-80px">
        <div className="container">
          <div className="my-orders-wrapper">
            <div className="my-orders_header mb-80px">
              <div className="my-orders_sub-title mb-30px size-16 color-dim-gray text-center">MY ORDERS</div>
              <div className="my-orders_title font-title size-48 color-nero text-center font-weight-bold">Tracking your orders</div>
            </div>
            <PerfectScrollbar>
              <Table columns={columns} dataSource={tableData} pagination={false} />
            </PerfectScrollbar>
            <Pagination className="mt-20px d-flex justify-content-end" onChange={handleChangePagination} defaultCurrent={1} total={mockData.length} />
          </div>
        </div>
      </div>
      <NewsLetter />
    </div>
  );
};

export default MyOrders;