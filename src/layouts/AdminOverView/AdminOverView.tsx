import { TabletOutlined, UnorderedListOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Breadcrumb, Layout, Menu } from 'antd';
import React from 'react';
import {Link, Outlet} from 'react-router-dom'
import styled from 'styled-components';

import LogoImage from '../../assets/images/logo.png'

const { Header, Content, Sider } = Layout;

const item3: MenuProps['items'] = [
    {key: "cellphone", icon: <TabletOutlined />, label: <Link to="/admin">Sản phẩm</Link>},
    {key: "categories", icon: <UnorderedListOutlined />,
     label: <Link to="/admin/category">Danh mục</Link>
    },
]

const AdminOverView: React.FC = () => (
  <Layout>
    <HeaderCustom>
      <Link to={`/`}><Logo src={LogoImage}/></Link>
      {/* <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} items={items1} /> */}
    </HeaderCustom>
    <Layout>
      <Sider width={200} className="site-layout-background">
        <Menu
          mode="inline"
          defaultSelectedKeys={['1']}
          defaultOpenKeys={['sub1']}
          style={{ height: '100%', borderRight: 0 }}
          items={item3}
        />
      </Sider>
      <Layout style={{ padding: '0 24px 24px' }}>
        <ContentCustom>
          <Outlet/>
        </ContentCustom>
      </Layout>
    </Layout>
  </Layout>
);

const HeaderCustom = styled(Header)`
    background-color: #00B0D7;
    height: 64px;
    display: flex;
    align-items: center;
`

const Logo = styled.img`
    width: 64px;
    height: auto;
`

const ContentCustom = styled(Content)`
  min-height: 100vh;
`

export default AdminOverView;