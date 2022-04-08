import { Popconfirm } from "antd"
import { useDispatch,useSelector } from "react-redux";
import { deleteTax } from "../../store/actions/Tax/taxActions";


const DeleteTax = (props) => {
    const token = useSelector(state=>state.auth.token);
    const dispatch = useDispatch();
    const onConfirm = () => {
        dispatch(deleteTax(props.id,token));
        props.onOk();
    }
    return (
        <Popconfirm
        title="Are you sure you want to delete this?"
        onCancel={props.onCancel}
        onConfirm={onConfirm}
        >
            {props.children}
        </Popconfirm>
    )
}
export default DeleteTax;