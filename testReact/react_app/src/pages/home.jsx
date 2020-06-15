import React ,{Component} from 'react'
import{NavLink,Switch,Route ,Redirect} from "react-router-dom"
import Message from './message'
import News from './news'
export default class home extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2> home home</h2>
                    <div>
                        <ul className="overflow">
                            <li className="homeLI">
                             <NavLink to='/home/news'>News</NavLink>
                            </li>
                            <li className="homeLI">
                             <NavLink to='/home/message'>Message</NavLink>
                            </li>
                        </ul>
                        <div className="homebody">
                            <Switch>
                                <Route path='/home/news' component={News}></Route>
                                <Route path='/home/message' component={Message}></Route>
                                <Redirect to='/home/news'></Redirect>
                            </Switch>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
    
}