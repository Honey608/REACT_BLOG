import Head from 'next/head'
import Header from '../components/Header'
import {Row, Col , List ,Icon} from 'antd'
import Link from 'next/link'
import React,{useState} from 'react'
import Author from '../components/Author'
import '../static/style/pages/index.css'
import Advert from '../components/Advert'
import Footer from '../components/Footer'
import axios from 'axios'
import servicePath from '../config/apiUrl'
import marked from 'marked'
import hljs from "highlight.js";
import 'highlight.js/styles/monokai-sublime.css';

import {
    CalendarOutlined,
    FundProjectionScreenOutlined,
    FireOutlined,
  } from '@ant-design/icons';

const Home = (list) => {
	console.log(list)
	const [ mylist , setMylist ] = useState( list.data);
	const renderer = new marked.Renderer();
  	marked.setOptions({
		renderer: renderer,
		gfm: true,
		pedantic: false,
		sanitize: false,
		tables: true,
		breaks: false,
		smartLists: true,
		smartypants: false,
		sanitize:false,
		xhtml: false,
		highlight: function (code) {
			return hljs.highlightAuto(code).value;
		}
  	}); 
	return (
		<>
			<Head>
				<title>Home</title>
			</Head>
			<Header />
			<Row className="comm-main" type="flex" justify="center">
				<Col className="comm-left" xs={24} sm={24} md={16} lg={18} xl={14}  >
					<List
						header={<div>最新日志</div>}
						itemLayout="vertical"
						dataSource={mylist}
						renderItem={item => (
						<List.Item>
							<div className="list-title">
								<Link href={{pathname:'/detailed',query:{id:item.id}}}>
									{item.title}
								</Link>
							</div>
							<div className="list-icon">
							<span><CalendarOutlined /> {item.addTime}</span>
							<span><FundProjectionScreenOutlined /> {item.typeName}</span>
							<span><FireOutlined /> {item.view_count}人</span>
							</div>
							<div className="list-context" dangerouslySetInnerHTML={{__html:marked(item.introduce)}}></div>
						</List.Item>
						)}
					/>
				</Col>
				<Col className="comm-right" xs={0} sm={0} md={7} lg={5} xl={4}>
					<Author />
					<Advert />
				</Col>
			</Row>
			<Footer />
		</>
	)
}

Home.getInitialProps = async ()=>{
	const promise = new Promise((resolve)=>{
	  axios(servicePath.getArticleList).then(
		(res)=>{
		  resolve(res.data)
		}
	  )
	})
	return await promise
}

export default Home