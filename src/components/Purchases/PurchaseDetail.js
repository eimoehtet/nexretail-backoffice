import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getPurchaseDetail } from "../../store/actions/Purchase/detailsActions";
import { Card, Table } from "antd";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";

const PurchaseDetail = () => {
    const [isLoading,setIsLoading]=useState(true);
    const token = useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    let param=useParams();
    console.log(param.id);
    useEffect(async ()=> {
        await dispatch(getPurchaseDetail(param.id,token));
        setIsLoading(false);
    },[])
   
    const columns = [
        {
          title: 'Name',
          dataIndex: ['item','name'],
          key: 'item',
        },
        {
          title: 'Quantity',
          dataIndex:'quantity',
          key: 'quantity',
        },
        {
          title: 'Buying Price',
          key: 'buyingPrice',
          dataIndex:'price'
        },
        {
          title: 'Total',
          key: 'total',
          dataIndex:'total'
        },
      ];
      const details = useSelector(state=>state.purchase.purchase);
      console.log("details:",details);
    //   console.log("name",details.user.name);
    return(
        isLoading ? <p>Loaing...</p> :<div>
           
          <div> <Link to='/purchases'><ArrowLeftOutlined style={{width:'50px',color:'black'}}/></Link>Purchase Detail</div>
          <Card>
              <p>User : {details.user.name}</p>
              <p>Supplier : {details.supplier.name}</p>
          </Card>
        <Table columns={columns} dataSource={details.purchaseItems}/>
        </div>
    )
}
export default PurchaseDetail;