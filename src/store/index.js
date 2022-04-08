import {createStore} from 'redux';
import {combineReducers,compose,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import ItemReducer from './reducers/Item/ItemReducer'
import LoginReducer from './reducers/Login/LoginReducer';
import CategoryReducer from './reducers/Category/CategoryReducer';
import UnitReducer from './reducers/Unit/UnitReducer';
import BrandReducer from './reducers/Brand/BrandReducer';
import DiscountReducer from './reducers/Discount/DiscountReducer';
import CouponReducer from './reducers/Coupon/CouponReducer';
import EmployeeReducer from './reducers/Employee/EmployeeReducer';
import CustomerReducer from './reducers/Customer/CustomerReducer';
import SupplierReducer from './reducers/Supplier/SupplierReducer';
import PurchaseReducer from './reducers/Purchase/PurchaseReducer';
import PurchaseDetailReducer from './reducers/Purchase/PurchaseDetailReducer';
import InventoryReducer from './reducers/Stock/InventoryReducer';
import DamageReducer from './reducers/Damage/DamageReducer';
import LostReducer from './reducers/Lost/LostReducer';
import TaxReducer from './reducers/Tax/TaxReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers=combineReducers({
    auth:LoginReducer,
    items:ItemReducer,
    categories:CategoryReducer,
    units:UnitReducer,
    brands:BrandReducer,
    discounts:DiscountReducer,
    coupons:CouponReducer,
    employees:EmployeeReducer,
    customers:CustomerReducer,
    suppliers:SupplierReducer,
    purchases:PurchaseReducer,
    purchase:PurchaseDetailReducer,
    inventory:InventoryReducer,
    damages:DamageReducer,
    losts : LostReducer,
    taxes : TaxReducer
});
const store=createStore(reducers,composeEnhancers(applyMiddleware(ReduxThunk)));
export default store;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()