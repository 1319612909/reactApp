import React ,{Component} from 'react'
import {INCREMENT,DECREMENT} from '../redux/action-types'
import * as actions from '../redux/actions'  //* as 代表actions所有的暴露的对象
import PropTypes  from 'prop-types'
import{connect} from 'react-redux' //连接react组件，
 class reduxApp extends Component{
    state={
        count:0
    }
    // 使用react-redux
    static propTypes={
        count:PropTypes.number.isRequired,
        increment:PropTypes.func.isRequired,
        decrement:PropTypes.func.isRequired
    }


    //使用state
    // increment=()=>{
    // // 1:得到选择增加数量
    //     const number = this.select.value*1
    // // 2：得到原本的count状态，并计算新的count
    // const count = this.state.count + number
    // // 3：更新状态
    // this.setState({count})
    // }
    
    
    //使用store的状态 
    increment=()=>{
        // 1:得到选择增加数量
            const number = this.select.value*1
        // 2：调用store的方法更新状态
        // this.props.store.dispatch({type:INCREMENT,data:number}) //
        // 完善actions引入调用dispatch
        // this.props.store.dispatch(actions.increment(number))
        //使用react-redux
        this.props.increment(number) 
    }
    decrement=()=>{
        // 1:得到选择增加数量
        const number = this.select.value*1
         // 2：调用store的方法更新状态
        //  this.props.store.dispatch({type:DECREMENT,data:number})
        // this.props.store.dispatch(actions.decrement(number))
         //使用react-redux
         this.props.decrement(number) 
    }

    render(){

        // const {count} = this.state
        // 使用store获取count
        // const count = this.props.store.getState()
        // 使用react-redux
        const {count} = this.props
        return(
            <div>
                <p>click {count} times</p>
                <div>
                    <select ref={select=>this.select = select}>
                        <option value="1">1</option>
                        <option value="2">2</option>
                        <option value="3">3</option>
                    </select>&nbsp;
                   
                    <button onClick={this.increment}>+</button>
                    <button onClick={this.decrement}>-</button>
                </div>
            </div>
        )
    }
}


// 使用react-redux ，Provider,在本组件内接受参数，需要用的connect，按照以下的暴露方式
// 才能在组件内部this.props拿到父组件传递的store中的值
export default connect(
    state =>({count:state}),{
        increment:actions.increment,decrement:actions.decrement
    }
)(reduxApp)