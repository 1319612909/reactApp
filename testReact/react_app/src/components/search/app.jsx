import React, {Component} from 'react'
import Input from './input'
import UserInfo from './userInfo'
export default class searchApp extends Component {
    constructor(props){
        super(props)
     
    }
    state={
        searchName:''
    }
    // 入参要把searchName传进来
    setSearchName= (searchName)=>{
        // this.searchName = searchName，这样写，传递过去是空值，因为状态没有更新，要按照下面的写法
        // 切记更新状态
        this.setState({searchName})
    }
    render(){
        return(
            <div>
                <h2>Search Github Users</h2>
                <Input setSearchName={this.setSearchName}  />
                <UserInfo searchName= {this.state.searchName} />
            </div>
        )
    }
}