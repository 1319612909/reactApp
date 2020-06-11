import React,{Component} from 'react'
import Add from '../add/add'
import List from '../list/list'

export default class app extends Component{
    constructor(props){
        super(props)
        this.state={
            comments:[
                {username:'AA',content:'123'},
                {username:'BB',content:'456'}
            ]
        }
    }
    // 给组件对象指定state属性，跟上面的一样，这是简写方法
    // state={
    //     comments:[
    //         {username:'AA',content:'123'},
    //         {username:'BB',content:'456'}
    //     ]
    // }

    addComment = (comment)=>{
        // 先得到原本的状态
        const { comments} = this.state
        // 修改状态内容
        comments.unshift(comment)
        // 更新状态
        this.setState({comments})
    }
    deleteFun = (index)=>{
       // 先得到原本的状态
       const { comments} = this.state
       // 修改状态内容(指定下标删除）
       comments.splice(index,1)
       // 更新状态
       this.setState({comments})
    }

    render(){
        return(
            <div>
                <h2>标题</h2>
                <Add  addComment={this.addComment}/>
                <List  comments={this.state.comments} deleteFun={this.deleteFun}/>
            </div>
        )
    }
    
}