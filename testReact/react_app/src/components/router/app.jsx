import React ,{Component} from 'react'
import{NavLink,Switch,Route ,Redirect} from "react-router-dom"
import About from '../../pages/about'
import Home from '../../pages/home'

export default class roterApp extends Component{
    render(){
        return(
            <div>
                <div>
                    <h2>react router demo</h2>
                </div>
                <div>
                    <div className="lf">
                         <NavLink className="nav" to="/about" activeClassName="selected" >about</NavLink> 
                         <NavLink className="nav" to="/home" activeClassName="selected">home</NavLink> 
                    </div>
                    <div className="lr">
                     <Switch>
                        <Route path='/about' component={About} />
                        <Route path='/Home' component={Home} />
                        <Redirect to='/about'></Redirect>
                      </Switch>  
                    </div>
                </div>
            </div>
        )
    }
    
}