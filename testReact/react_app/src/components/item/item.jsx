import React, {Component} from 'react'   //{Component}这个是es6的解构语法，把Component取出
import PropTypes from 'prop-types'
export default class item extends Component{ 
    static propTypes = {
        comments: PropTypes.object.isRequired,
        deleteFun:PropTypes.func.isRequired,
        index:PropTypes.number.isRequired
    }
  
    handleDele= ()=>{
        const {comments,deleteFun,index} = this.props
        // 提示
        if(window.confirm(`确定删除${comments.username}吗`)){
           // 删除
            deleteFun(index)
        }
        
    }
    render(){
        const {comments} = this.props
        return(
            <div className="box">
                <button className="btn" onClick={this.handleDele}>删除</button>
                <p>{comments.username}说：</p>
                <div>{comments.content}</div>
            </div>
        )
    }
} 