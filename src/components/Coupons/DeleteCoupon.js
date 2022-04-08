import { Popconfirm } from "antd";
import { deleteCoupon, getCoupons } from "../../store/actions/Coupon/couponActions";
import { useSelector,useDispatch } from "react-redux";
const DeleteCoupon = (props) => {
    const token = useSelector(state=>state.auth.token);
    const dispatch=useDispatch();
    const confirm =async () => {
        await dispatch(deleteCoupon(props.id,token));
        props.onOK();
        dispatch(getCoupons(token));
    }
    return (
        <Popconfirm 
        title="Are you sure you want to delete this?"
        onCancel={props.onCancel}
        onConfirm={confirm}
        >
            {props.children}
        </Popconfirm>
    )
}
export default DeleteCoupon;