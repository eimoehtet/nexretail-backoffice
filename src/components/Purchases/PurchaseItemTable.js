import { Card, Col, Row, Table } from 'antd';
const PurchaseItemTable = (props) => {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Quantity',
      dataIndex:'quantity',
      key: 'quantity',
    },
    {
      title: 'Buying Price',
      key: 'buyingPrice',
      dataIndex:'buyingPrice'
    },
    {
      title: 'Total',
      key: 'total',
      dataIndex:'total'
    },
  ];
  
      return (
          <>
          <Table columns={columns} dataSource={props.items} />
          </>
      )
}
export default PurchaseItemTable;