import React,{Component} from 'react'
import PropTypes from 'prop-types'
 export default class Input extends Component{
    constructor(props){
        super(props)
        this.state ={
            inputVal :''
        }
    }
    static propTypes ={
        setSearchName:PropTypes.func.isRequired
    }
    
    handleChange = (event)=>{
        const  inputVal = event.target.value
        this.setState({inputVal})
    }
    searchBtn= ()=>{
        // 得到输入的关键字
        const  {inputVal} = this.state
        console.log(inputVal)
        if(inputVal){
        // 搜索
        this.props.setSearchName(inputVal)
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