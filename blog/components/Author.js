import {Avatar,Divider, Icon} from 'antd'
import '../static/style/components/author.css'
import { GithubOutlined, QqOutlined, WechatOutlined} from '@ant-design/icons';

const Author =()=>{

    return (
        <div className="author-div comm-box">
            <div> <Avatar size={100} src="https://www.baidu.com/link?url=Jq1Km1IBzb_Ndo2pD3TNtlgRRewkdGtYlDUzbx_680HxUCJGsxySxClS5RW73FEDA_5jp7JE5BQcjjU8XTsed8-kFXd6A_ltr69iwXo8xZ4XS-1rK67Abfg-ihRQRAJdSwwsJYhmPMW3rm4GW8QQi439c6eGzIIz0bEp5GcP1fUfGcpKG8Wg77vT568QfOWWI1AyVMKZ40-pFm59oguxOsCXcifMcij0MJn7R2phIkRSadDQ36gX_KdW_Vk9qUZEU6qRlBv_TaxvNby8TRKCqvvAYRpuUNcUmb-FThbLJBLGKiUXhfmC8j1GtpT0Hu_adRXpASGIpEDFqRNmM0DYP_AtLzHijM5FvHsFN5G8FuD1XGf-XUER9vkLFafLkXpvJqTTdXVzQATRSG2pbKYlRED2ZD_hnc_W3SIm3iFAdEffeNiRw035DhaHc1w-p5uaeb_oyiCu-r_oHNQ_RoVxHrYJosxQhkoH-FnLL2cDdabaEptdt78NjmIjP3vDJ-3X31EcR3ZQ-909LEEWKyr4IBQKJL78m6_oJ0YGn02kHquA_wsWoFX__SJO2HHaD6wH9w4pRkedpkgLwv2IfGSWyvAQbL1eBM62aoNWBuAinNG&wd=&eqid=db21dc8f000457fe000000045fcc79ba"  /></div>
            <div className="author-introduction">
                光头程序员，专注于WEB和移动前端开发。要录1000集免费前端视频的傻X。此地维权无门，此时无能为力，此心随波逐流。
                <Divider>社交账号</Divider>
                <Avatar size={28} icon={<GithubOutlined />} className="account"  />
                <Avatar size={28} icon={<QqOutlined />}  className="account" />
                <Avatar size={28} icon={<WechatOutlined />}  className="account"  />

            </div>
        </div>
    )

}

export default Author