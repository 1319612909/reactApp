import React ,{Component} from 'react'
import{NavLink,Switch,Route ,Redirect} from "react-router-dom"
import MessageDetails from './messageDetails'
export default class message extends Component{
    state={
        messages: []
    }
   
    componentDidMount(){
        // 模拟发送ajax请求异步获取数据
        setTimeout(()=>{
            const   messages= [
                {
                    id:1,title:'message01'
                },
                {
                    id:2,title:'message02'
                },
                {
                    id:3,title:'message03'
                }
            ]
            this.setState({messages})
        },1000)
    }
    render(){
       
        return(
            <div>
                <div>
                    <ul>
                        {
                            this.state.messages.map((m,index) =>(
                            <li key={index}>
                                <NavLink to={`/home/message/${m.id}`} >{m.title}</NavLink>
                            </li>
                            ))
                        }
                    </ul>
                    <Route path='/home/message/:id' component={MessageDetails} />
                </div>
            </div>
        )
    }
    
}