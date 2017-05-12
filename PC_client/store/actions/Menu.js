/**
 * 用于将修改指令进行封装，否则需要自己进行指令的封装
 * old: dispatch({type:SELECT_MENU,payLoad:{index}})
 * now: dispatch(selectMenu(index));
 */
import actionsType, {SELECT_MENU} from '../actionsType';
export function selectMenu (index) {
    console.log('index',index);
    return {type: SELECT_MENU, payLoad: {index}};
}
