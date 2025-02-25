import { Layout, Menu, MenuProps } from "antd";
import { Outlet } from "react-router-dom";
const { Content, Header, Sider } = Layout;

const items: MenuProps["items"] = [
  {
    key: "aa",
    label: "Dashboard",
  },
  {
    key: "bb",
    label: "profile",
  },
  {
    key: "cc",
    label: "User Management",
    children: [
      {
        key: "dd",
        label: "create admin",
      },
      {
        key: "ee",
        label: "Create User",
      },
    ],
  },
];

const MainLayout = () => {
  return (
    <Layout style={{ height: "100vh" }}>
      <Sider
        breakpoint="lg"
        collapsedWidth="0"
        onBreakpoint={(broken) => {
          console.log(broken);
        }}
        onCollapse={(collapsed, type) => {
          console.log(collapsed, type);
        }}
      >
        <div style={{color: "white", height: '4rem', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
          <h1>LOGO</h1>
        </div>
        <Menu
          theme="dark"
          mode="inline"
          defaultSelectedKeys={["4"]}
          items={items}
        />
      </Sider>
      <Layout>
        <Header style={{ padding: 0 }} />
        <Content style={{ margin: "24px 16px 0" }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
            }}
          >
            <Outlet />
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};

export default MainLayout;
