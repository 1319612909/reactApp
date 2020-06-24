import React,{Component} from 'react'
import PropTypes from 'prop-types'
export default class add extends Component{
  
    constructor(props){
        super(props)
        this.state={
            userName:'',
            content:''
        }
  
    //  this.handSubmit =  this.handSubmit.bind(this) //使用箭头函数不需要写这句
    }
    static propTypes={
        addComment:PropTypes.func.isRequired
    }
    handleNameChange = (event)=>{
        const userName = event.target.value
        this.setState({userName})
    }
    handleContentChange = (event) =>{
        const content = event.target.value
        this.setState({content})
    }
    // 如果使用箭头函数，就不需要在constructor里面绑定this了
    handSubmit = ()=>{
        // 收集数据,并且封装对象
        const comment = this.state
        // 更新状态
        this.props.addComment(comment)
        // 清楚输入数据
        this.setState({
            userName:'',
            content:''
        })
    }
    
    render(){
        return(
            <div>
                  <div className='lf'>
                    <form action="">
                        <p>用户名</p>
                        <input type="text" placeholder="用户名" value={this.state.userName}  onChange={this.handleNameChange} />
                        <p>评价内容</p>
                        <textarea name="" id="" cols="30" rows="10" placeholder="评价内容" value={this.state.content} onChange={this.handleContentChange}></textarea>
                    </form>
                    <button  onClick={this.handSubmit}>提交</button>
                    
                </div>
            </div>

        )
    }
    
}


          