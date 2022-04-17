import { combineReducers, createStore,applyMiddleware } from "redux";
import { datareducer } from "./Data/datareducer";
import { loginReducer } from "./Login/loginReducer";
import thunk from "redux-thunk";
 
const rootReducer = combineReducers({data:datareducer,login:loginReducer})

export const store = createStore(rootReducer,window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
