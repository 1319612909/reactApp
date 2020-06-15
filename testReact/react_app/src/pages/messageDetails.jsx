import React ,{Component} from 'react'

const  allMessages=  [
    {
        id:1,title:'message01',content:'中国'
    },
    {
        id:2,title:'message02',content:'中国1'
    },
    {
        id:3,title:'message03',content:'中国2'
    }
]
export default function messageDetails(props){
 
        // 得到请求参数的id
        const {id} = props.match.params
        // 查询得到对应的message
        // id*1主要是隐式转换
        const   message =  allMessages.find((m)=>m.id ===id*1 )  //返回第一个结果为true的数组元素
        return(
            <div>
                <div>
                    <ul>
                      <li>Id:{message.id}</li>
                      <li>title :{message.title}  </li>
                      <li>content :{message.content}  </li>
                    </ul>
                </div>
            </div>
        )
 
  
    
}