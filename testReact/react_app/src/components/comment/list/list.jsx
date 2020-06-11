import React,{Component} from 'react'
import PropTypes from 'prop-types'
import Item from '../item/item'
export default class list extends Component{
    // 给组件内指定属性(子接收父组件的值)
    static propTypes={
        comments:PropTypes.array.isRequired,
        deleteFun:PropTypes.func.isRequired
    }
    // componentDidMount(){
    //     // 发送ajax,实例
    //     const url ='https://api.github.com/search/repositories?q=re$sort=stars'
    //     axios.get(url)
    //     // .post(url,{})  
    //     .then(res=>{
    //         // 处理数据、
    //         const {name,htmlurl} = res.data.items[0] //解构取值 
    //     })
    // }
    render(){
        
        // 可以先把父组件传递过来的保存一下,使用变量把父组件传递的值取出来保存
        const {comments,deleteFun} = this.props
        // 计算comments，判断暂无评论是否显示
        const display = comments.length===0? 'block' :'none'
        return(
            <div>
                   <div className="lr">
                    <h3>评论回复：</h3>
                    <h2 style={{display}}>暂无评论，点击添加</h2>
                    {
                        comments.map((comments,index) => <Item comments={comments} key={index}  deleteFun={deleteFun} index={index} />)

                        //comments.map((comments,index) => <Item comments={comments} key={index}  deleteFun={this.props.deleteFun} />)
                    }
                </div>
            </div>
        )
    }
    
}
