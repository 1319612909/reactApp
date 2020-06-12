import React,{Component} from 'react'
import PubSub from 'pubsub-js'
 export default class Input extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputVal :''
        }
    }
    
    handleChange = (event)=>{
        const  inputVal = event.target.value
        this.setState({inputVal})
    }
    searchBtn= ()=>{
        // 得到输入的关键字
        const  {inputVal} = this.state
        if(inputVal){
              // 兄弟传值
        //搜索,开启订阅使用pubsub,发布消息  publish参数：1：触发事件名称  2：数据内容
             PubSub.publish('search',inputVal)
        }
    }
   
    render(){
        return(
            <div>
                <input type="text" value={this.state.inputVal}  placeholder='请输入' onChange={this.handleChange}/>
                <button onClick={this.searchBtn}>Now Search</button>
            </div>
        )
    }
 }