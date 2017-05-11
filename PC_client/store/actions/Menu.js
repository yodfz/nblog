import actionsType, {SELECT_MENU} from '../actionsType';
export function selectMenu (index) {
    console.log('index',index);
    return {type: SELECT_MENU, payLoad: {index}};
}
