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

const {  Sider, Content } = Layout;
const {SubMenu}=Menu;
const MainLayout = () => {
 const [collapsed,setCollapsed]=useState(false);

  const toggle = () => {
   setCollapsed(!collapsed);
  };

    return (
        <div>
        <div className='nav-bar'>
            <Button className='trigger' onClick={toggle} style={{marginTop:6,marginLeft:18,marginRight:10}}>
            {collapsed ? <MenuUnfoldOutlined/> : <MenuFoldOutlined/>}
            </Button>
            <img src={logo} style={{height:40,paddingBottom:5}}/></div>
      <Layout style={{paddingTop:1}}>
        <Sider trigger={null} collapsible collapsed={collapsed} >
            <Menu theme="light" mode="inline" defaultSelectedKeys={['1']} style={{height:'100%'}}>
            <SubMenu key="sub1"  title="Items" icon={<MenuFoldOutlined/>}>
            <Menu.Item key="1"><Link to='/items'>Items</Link></Menu.Item>
            <Menu.Item key="2">Categories</Menu.Item>
            <Menu.Item key="3">Units</Menu.Item>
            <Menu.Item key="4">Brands</Menu.Item>
            <Menu.Item key="5">Discount</Menu.Item>
            <Menu.Item key="6">Coupons</Menu.Item>
            </SubMenu>
            <Menu.Item key="7" icon={<UserOutlined />}>
              <Link to='/employees'>Employees</Link>
            </Menu.Item>
            <SubMenu key='sub2' title="Contacts" icon={<ContactsOutlined/>}>
            <Menu.Item key='8'>Customers</Menu.Item>
            <Menu.Item key='9'>Suppliers</Menu.Item>
            </SubMenu>
            <SubMenu key='sub3' title="Purchases" icon={<ShoppingCartOutlined/>}>
            <Menu.Item key='10'>Purchases</Menu.Item>
            </SubMenu>
            <SubMenu key='sub4' title="Inventory" icon={<BankOutlined/>}>
            <Menu.Item key='11'>Stock</Menu.Item>
            <Menu.Item key='12'>Damage</Menu.Item>
            <Menu.Item key='13'>Losts</Menu.Item>
            </SubMenu>
            <Menu.Item key="14" icon={<DatabaseOutlined />}>
              Registers
            </Menu.Item>
            <SubMenu key='sub5' title="Report" icon={<BarChartOutlined/>}>
            <Menu.Item key='15'>By Sale</Menu.Item>
            <Menu.Item key='16'>By Purchase</Menu.Item>
            <Menu.Item key='17'>By Return</Menu.Item>
            <Menu.Item key='18'>Ledger</Menu.Item>
            </SubMenu>
            <Menu.Item key="19" icon={<FileSearchOutlined />}>
              Invoices
            </Menu.Item>
            <SubMenu key='sub6' title="Setting" icon={<SettingOutlined/>}>
            <Menu.Item key='20'>Taxes</Menu.Item>
            <Menu.Item key='21'>Locations</Menu.Item>
            <Menu.Item key='22'>Stores</Menu.Item>
           
            </SubMenu>
          </Menu>
        </Sider>
        <Layout>
          <Content
            className="site-layout-background"
            style={{
              margin: '24px 16px',
              padding: 24,
              minHeight: 500,
            }}
          >
          <Outlet/>
          </Content>
        </Layout>
      </Layout>
      </div>
    );
  }


export default MainLayout;