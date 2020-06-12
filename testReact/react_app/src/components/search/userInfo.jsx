import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Axios from 'axios'
export default class UserInfo extends Component{
    
    state={
        initView:true, //第一个初始页面
        loading:false,//搜索文本
        users:null,  
        erroMsg:null
    }
    static propTypes ={
        searchName:PropTypes.string.isRequired
    }
    componentDidMount(){
        // axios.post()
    }
    // 组件接收一个新的props，在父组件传过来的值发生变化就开始执行操作，就在此方法里面
    componentWillReceiveProps(nextProps){
        // 有了新的props
        const {searchName} = nextProps
        // 发请求
        // 更新状态（请求中）
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