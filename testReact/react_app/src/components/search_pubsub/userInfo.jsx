import React,{Component} from 'react'
import Axios from 'axios'
import PubSub from 'pubsub-js'
export default class UserInfo extends Component{
    
    state={
        initView:true, //第一个初始页面
        loading:false,//搜索文本
        users:null,  
        erroMsg:null
    }
   
    componentDidMount(){
        // 兄弟传值
        // 订阅消息， 回调函数两个入参，1：名字，2：参数
        PubSub.subscribe('search', (msg, searchName) =>{
        // 用this,就切记用箭头函数，不然找不到this.setState
        this.setState({
            initView:false, 
            loading:true
        })
        const url = `https://api.github.com/search/repositories?q=${searchName}`
        Axios.get(url)
        .then(res=>{
            console.log(res)
            // 得到数据,返回的数据量太大，进行map筛选我们所需要的三个属性即可
            const users = res.data.items.map(item=>{
                return{
                    name:item.owner.login,
                    url:item.html_url,
                    avatarUrl:item.owner.avatar_url
                }
            })
            // 更新状态
            this.setState({
                initView:false, 
                loading:false,
                users
            })
        })
        .catch(err=>{
            console.log(err)
            // 更新状态
            this.setState({
                initView:false,
                erroMsg:err
            })
        })
           
        })

    }
   

    render(){
        const {initView,loading,users,erroMsg} = this.state
       
        if(initView){
        return  <p>请输入关键字进行搜索...</p>
        } else if(loading){
            return  <p>正在请求...</p>
        }else if(erroMsg){
             return  <p>{erroMsg}</p>
        }else{
            return(
                <div>
                    {
                        // 循环显示
                        // => 这个箭头代表两个作用，一个是函数，一个是返回，现在（）这个为返回
                        users.map((user,index) => (
                            <ul className='ul' key={index}>
                                <li className='li'>
                                    <a href={user.url}>
                                      <img src={user.avatarUrl} alt=""/>
                                    </a>
                                     <p>{user.name}</p>
                                </li>
                            </ul>
                        ))
                    }
                   
                  
                   
                </div>
            )
        }
       
    }
}
//    {
//                          /*下面的箭头函数返回对象{}和上面返回的（）一样性质，上面只是为了简写代码*/
//                          users.map((user,index) => {
//                             return (
//                                 <ul className='ul'>
//                                 <li className='li'>
//                                     <img src="https://ossweb-img.qq.com/images/lol/web201310/skin/big84000.jpg" alt=""/>
//                                 </li>
//                             </ul>
//                             )}
//                         )
//                     }