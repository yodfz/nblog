import {combineReducers} from 'redux';
// import actions_Menu from './actions/Menu';
import Menu from './reducer/Menu';
import Article from './reducer/Article';

export default combineReducers({
    Article,
    Menu
});