import { Layout, Menu } from 'antd';
import "antd/dist/antd.css";
import './Nav.css'


function Nav () {

const { Header } = Layout;
    return (
    <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['2']} >
        {new Array(3).fill(null).map((_, index) => {
          const key = index + 1;
          return <Menu.Item key={key}>{`nav ${key}`}</Menu.Item>;
        })}
      </Menu>
    </Header>
    )
}
 export default Nav; 