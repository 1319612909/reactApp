// redux
import {createStore} from 'redux'
import  {counter} from './reducres'

//生成一个store对象,接收import引入的counter对象，和redux关联上
const store = createStore(counter) //内部会第一次调用reduer函数得到初始的state
console.log(store)

// 暴露出去
export default store