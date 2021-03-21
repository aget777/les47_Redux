import {combineReducers, createStore} from "redux";
import myReducer from './models/myReducer';
import userReducer from './models/user'
import { increment, decrement } from "./models/my-reducer.actions";
import { goodsReducer } from "./models/goods";
import { loadGoodList } from "./models/goods.actions";




const store =  createStore (
    combineReducers({
        goods: goodsReducer,
        user: userReducer,
        good: myReducer,
    })
    );

console.log('Initial state:', store.getState())

store.subscribe(function(){
    console.log(store.getState());
})


// store.dispatch(increment())
// store.dispatch(addPayloadAction(10))
// store.dispatch(addPayloadAction(5))

export default store


store.dispatch(loadGoodList([
    {
        id: 1,
        title: 'The best Good',
    },
    {
        id: 2,
        title: 'Most popular good',
    },
    {
        id: 3,
        title: 'Greates goods in the world',
    }
]))