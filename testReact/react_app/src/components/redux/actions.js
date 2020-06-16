import {INCREMENT,DECREMENT} from '../redux/action-types'
// 添加
export const increment = (number)=>({type:INCREMENT,data:number})
// 减少
export const decrement = (number)=>({type:DECREMENT,data:number})
