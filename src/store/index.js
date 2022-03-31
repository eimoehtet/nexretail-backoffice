import {createStore} from 'redux';
import {combineReducers,compose,applyMiddleware} from 'redux';
import ReduxThunk from 'redux-thunk'
import ItemReducer from './reducers/Item/ItemReducer'
import LoginReducer from './reducers/Login/LoginReducer';
import CategoryReducer from './reducers/Category/CategoryReducer';
import UnitReducer from './reducers/Unit/UnitReducer';
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const reducers=combineReducers({
    auth:LoginReducer,
    items:ItemReducer,
    categories:CategoryReducer,
    units:UnitReducer
});
const store=createStore(reducers,composeEnhancers(applyMiddleware(ReduxThunk)));
export default store;
//window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()