import { Popconfirm } from "antd"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { deleteDiscount, getAllDiscounts } from "../../store/actions/Discount/discountActions";

const DeleteDiscount = (props) => {
    const token=useSelector(state=>state.auth.token);
    const dispatch =useDispatch();
    const handleOk = () => {
        dispatch(deleteDiscount(props.id,token));
        props.onOK();
       
    }
    return (
        <Popconfirm 
        title="Are you sure you want to delete?"
        onConfirm={handleOk}
        onCancel={props.onCancel}
        >
            {props.children}
        </Popconfirm>
    )
}
export default DeleteDiscount;