import React,{useState} from 'react';
import { Layout, Menu, Breadcrumb } from 'antd';
import '../static/css/AdminIndex.css'
import AddArticle from './AddArticle'
import ArticleList from './ArticleList'
import { PieChartOutlined, DesktopOutlined, FileDoneOutlined } from '@ant-design/icons';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


function AdminIndex(props){

	const [collapsed,setCollapsed] = useState(false)
	const onCollapse = collapsed => {
		setCollapsed(collapsed)
	};

	return (
		<Router>
			<Layout style={{ minHeight: '100vh' }}>
				<Sider  collapsible collapsed={collapsed} onCollapse={onCollapse}>
					<div className="logo" />
					<Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
						<Menu.Item key="1">
							<PieChartOutlined />
						<span>工作台</span>
						</Menu.Item>
						<Menu.Item key="2">
							<DesktopOutlined />
						<span>添加文章</span>
						</Menu.Item>
						<SubMenu
							key="sub1"
							title={
							<span>
								{/* <Icon type="desktop" /> */}
								<span>文章管理</span>
							</span>
							}
						>
							<Menu.Item key="addArticle"><Link to='/index/add/'>添加文章</Link></Menu.Item>
							<Menu.Item key="articleList"><Link to='/index/list/'>文章列表</Link></Menu.Item>
						</SubMenu>
						<Menu.Item key="9">
							<FileDoneOutlined />
						<span>留言管理</span>
						</Menu.Item>
					</Menu>
				</Sider>
				<Layout>
					<Header style={{ background: '#fff', padding: 0 }} />
					<Content style={{ margin: '0 16px' }}>
						<Breadcrumb style={{ margin: '16px 0' }}>
						<Breadcrumb.Item>后台管理</Breadcrumb.Item>
						<Breadcrumb.Item>工作台</Breadcrumb.Item>
						</Breadcrumb>
						<div style={{ padding: 24, background: '#fff', minHeight: 360 }}> 
							<Route path="/index/" exact component={AddArticle} />
							<Route path="/index/add/" exact component={AddArticle} />
							<Route path="/index/add/:id" exact component={AddArticle} />
							<Route path="/index/list/" exact component={ArticleList} />
						</div>
					</Content>
					<Footer style={{ textAlign: 'center' }}>JSPang.com</Footer>
				</Layout>
			</Layout>
		</Router>
    )

}

export default AdminIndex