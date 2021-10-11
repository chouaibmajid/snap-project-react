import {combineReducers} from "redux"
import reducer from "./reducer"
const rootReducer= combineReducers({
    image: reducer,
})
export default rootReducer