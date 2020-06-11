import React,{Component} from 'react'
import logo from '../logo.svg'
import Apps from './app/app'
export default class App extends Component{

    // render(){
    //     return(
    //         <div>
    //             <img class="logo" src={logo} alt=""/>
    //             <h1>holle1 23 </h1>
    //         </div>
    //     )
    // }

    // constructor(props) {
    //     super(props)
    //    this.state ={
    //        name:'',
    //        messg:''
    //    } ;
    // //    this.subFun = this.subFun.bind(this);
    // }
    // subFun(){
    //     // console.log(this.state.name )
    //     console.log('456')
    // }

    render(){
        return(
            <Apps />
        )
    }
}