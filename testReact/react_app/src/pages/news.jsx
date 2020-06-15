import React ,{Component} from 'react'
export default class news extends Component{
    state={
        newsArr:[
            'news01',
            'news02',
            'news03'
        ]
    }
    render(){
        return(
            <div>
                <div>
                    <ul>
                       {
                           this.state.newsArr.map((news,index)=>(
                           <li key={index}>{news}</li>
                           ))
                       }
                    </ul>
                </div>
            </div>
        )
    }
    
}