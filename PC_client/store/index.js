import {combineReducers} from 'redux';
// import actions_Menu from './actions/Menu';
import Menu from './reducer/Menu';
import Article from './reducer/Article';
import Photo from './reducer/Photo';

export default combineReducers({
    Article,
    Menu,
    Photo
});