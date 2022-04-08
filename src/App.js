import { useRoutes } from 'react-router';
import './App.css';
import BrandList from './components/Brands/BrandList';
import CategoryList from './components/Categories/CategoryList';
import CustomerList from './components/Contacts/Customers/CustomerList';
import SupplierList from './components/Contacts/Suppliers/SupplierList';
import CouponList from './components/Coupons/CouponList';
import DamageList from './components/Damage/DamageLIst';
import DiscountList from './components/Discounts/DiscountList';
import EmployeeList from './components/Employees/EmployeeList';
import ItemList from './components/Items/ItemList';
import Login from './components/Login/Login';
import LostList from './components/Losts/LostList';
import MainLayout from './components/MainLayout/MainLayout';
import PurchaseList from './components/Purchases/PurchaseList';
import Stock from './components/Stock/Stock';
import UnitList from './components/Units/UnitList';
import Register from './components/Registers/Register';
import SaleReport from './components/Report/BySaleReport';
import ReturnReport from './components/Report/ByReturnReport';
import PurchaseReport from './components/Report/ByPurchaseReport';
import Ledger from './components/Report/Ledger';
import Invoice from './components/Invoices/Invoice';
import TaxList from './components/Tax/TaxList';
import StoreList from './components/Stores/StoreList';
import LocationList from './components/Locations/LocationList';
import ProtectedRoute from './routes/ProtectedRoute';
import CreateUnit from './components/Units/CreateUnit';
import CreateCategory from './components/Categories/CreateCategory';
import CreateItem from './components/Items/CreateItem';
import CreateBrand from './components/Brands/CreateBrand';
import CreateDiscount from './components/Discounts/CreateDiscount';
import CreateCoupon from './components/Coupons/CreateCoupon';
import CreateEmployee from './components/Employees/CreateEmployee';
import CreateCustomer from './components/Contacts/Customers/CreateCustomer';
import CreateSupplier from './components/Contacts/Suppliers/CreateSupplier';
import CreatePurchase from './components/Purchases/CreatePurchase';
import PurchaseDetail from './components/Purchases/PurchaseDetail';
import CreateDamage from './components/Damage/CreateDamage';
import CreateLost from './components/Losts/CreateLost';
import CreateTax from './components/Tax/CreateTax';
function App() {
  const routes=[
    {path:'/login',element:<Login/>},
    {path:'/',element:<ProtectedRoute><MainLayout/></ProtectedRoute>,
    children:[
      {path:'items',element:<ItemList/>},
      {path:'items/new',element:<CreateItem/>},
      {path:'employees',element:<EmployeeList/>},
      {path:'employees/new',element:<CreateEmployee/>},
      {path:'contacts/customers',element:<CustomerList/>},
      {path:'contacts/customers/new',element:<CreateCustomer/>},
      {path:'contacts/suppliers',element:<SupplierList/>},
      {path:'contacts/suppliers/new',element:<CreateSupplier/>},
      {path:'purchases',element:<PurchaseList/>},
      {path:'purchases/details/:id',element:<PurchaseDetail/>},
      {path:'purchases/new',element:<CreatePurchase/>},
      {path:'categories',element:<CategoryList/>},
      {path:'categories/new',element:<CreateCategory/>},
      {path:'units',element:<UnitList/>},
      {path:'units/new',element:<CreateUnit/>},
      {path:'brands',element:<BrandList/>},
      {path:'brands/new',element:<CreateBrand/>},
      {path:'discounts',element:<DiscountList/>},
      {path:'discounts/new',element:<CreateDiscount/>},
      {path:'coupons',element:<CouponList/>},
      {path:'coupons/new',element:<CreateCoupon/>},
      {path:'inventory/stocks',element:<Stock/>},
      {path:'inventory/damages',element:<DamageList/>},
      {path:'inventory/damages/new',element:<CreateDamage/>},
      {path:'inventory/losts',element:<LostList/>},
      {path:'inventory/losts/new',element:<CreateLost/>},
      {path:'registers',element:<Register/>},
      {path:'report/sales',element:<SaleReport/>},
      {path:'report/returns',element:<ReturnReport/>},
      {path:'report/purchases',element:<PurchaseReport/>},
      {path:'report/ledger',element:<Ledger/>},
      {path:'invoices',element:<Invoice/>},
      {path:'setting/taxes',element:<TaxList/>},
      {path:'setting/taxes/new',element:<CreateTax/>},
      {path:'setting/stores',element:<StoreList/>},
      {path:'setting/locations',element:<LocationList/>},
      


      
    ]
  }
  ]
  const element=useRoutes(routes);
  return (
    <div>
      {element}
    </div>
  );
}

export default App;
