import React, {Component} from 'react'
import Input from './input'
import UserInfo from './userInfo'

export default class searchApp extends Component {

    render(){
        return(
            <div>
                <h2>Search Github Users</h2>
                <Input  />
                <UserInfo />
            </div>
        )
    }
}