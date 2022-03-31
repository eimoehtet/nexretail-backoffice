import { Button, Layout, Menu } from 'antd';
import { Link } from 'react-router-dom';
import React from 'react';
import {
  MenuUnfoldOutlined,
  MenuFoldOutlined,
  UserOutlined,
  ContactsOutlined,
  ShoppingCartOutlined,
  DatabaseOutlined,
  SettingOutlined,
  BarChartOutlined,
  FileSearchOutlined,
  BankOutlined
} from '@ant-design/icons';
import { useState } from 'react';
import './MainLayout.css'
import logo from '../../assests/logo.png'
import { Outlet } from 'react-router';

const { Header, Sider, Content } = Layout;
const {SubMenu}=Menu;
const MainLayout = () => {
 const [collapsed,setCollapsed]=useState(false);

  const toggle = () => {
   setCollapsed(!collapsed);
  };

    return (
        <Layout className='main' >
        <Header className='nav-bar'>
            <Button className='trigger' onClick={toggle} style={{marginTop:6,marginLeft:18,marginRight:10}}>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
            <img src={logo} style={{height:40,paddingBottom:5}}/></Header>
      <Layout style={{paddingTop:1}}>
        <Sider trigger={null} collapsible collapsed={collapsed} >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{height:'100%'}}>
            <SubMenu key="sub1"  title="Items" icon={<MenuFoldOutlined/>}>
            <Menu.Item key="1"><Link to='/items'>Items</Link></Menu.Item>
            <Menu.Item key="2"><Link to='/categories'>Categories</Link></Menu.Item>
            <Menu.Item key="3"><Link to='/units'>Units</Link></Menu.Item>
            <Menu.Item key="4"><Link to='/brands'>Brands</Link></Menu.Item>
            <Menu.Item key="5"><Link to='/discounts'>Discount</Link></Menu.Item>
            <Menu.Item key="6"><Link to='/coupons'>Coupons</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<UserOutlined />}>
              <Link to='/employees'>Employees</Link>
            </Menu.Item>
            <SubMenu key='sub2' title="Contacts" icon={<ContactsOutlined/>}>
            <Menu.Item key='8'><Link to='contacts/customers'>Customers</Link></Menu.Item>
            <Menu.Item key='9'><Link to='contacts/suppliers'>Suppliers</Link></Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title="Purchases" icon={<ShoppingCartOutlined/>}>
            <Menu.Item key='10'><Link to='/purchases'>Purchases</Link></Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title="Inventory" icon={<BankOutlined/>}>
            <Menu.Item key='11'><Link to='inventory/stocks'>Stock</Link></Menu.Item>
            <Menu.Item key='12'><Link to='inventory/damages'>Damage</Link></Menu.Item>
            <Menu.Item key='13'><Link to='/losts'>Losts</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="14" icon={<DatabaseOutlined />}>
             <Link to='/registers'>Registers</Link> 
            </Menu.Item>
            <SubMenu key='sub5' title="Report" icon={<BarChartOutlined/>}>
            <Menu.Item key='15'><Link to='/report/sales'>By Sale</Link></Menu.Item>
            <Menu.Item key='16'><Link to='/report/purchases'>By Purchase</Link></Menu.Item>
            <Menu.Item key='17'><Link to='/report/returns'>By Return</Link></Menu.Item>
            <Menu.Item key='18'><Link to='/report/ledger'>Ledger</Link></Menu.Item>
            </SubMenu>
            <Menu.Item key="19" icon={<FileSearchOutlined />}>
            <Link to='/invoices'>Invoices</Link>
            </Menu.Item>
            <SubMenu key='sub6' title="Setting" icon={<SettingOutlined/>}>
            <Menu.Item key='20'><Link to='/setting/taxes'>Taxes</Link></Menu.Item>
            <Menu.Item key='21'><Link to='/setting/locations'>Locations</Link></Menu.Item>
            <Menu.Item key='22'><Link to='/setting/stores'>Stores</Link></Menu.Item>
           
            </SubMenu>
          </Menu>
        </Sider>
        <Layout style={{padding:20}}>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 0,
              minHeight: '100vh',
              backgroundColor:'#f0f2f5' 
            }}
          >
          <Outlet/>
          </Content>
        </Layout>
      </Layout>
      </Layout>
    );
  }


export default MainLayout;