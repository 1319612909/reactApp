import React,{Component} from 'react'
import logo from '../logo.svg'
import Comment from './comment/app/app'
import Search from './search/app'
import SearchSub from './search_pubsub/app'
export default class App extends Component{
    render(){
        return(
            // <Comment />
            // <Search />
            <SearchSub />
        )
    }
}