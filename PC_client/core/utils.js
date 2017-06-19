import {STATE} from '../store/actionsType';

export default {
    returnMonthStringFormNumber (number) {
        const str = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        return str[number];
    },
    returnWeekStringFormNumber (number) {
        const str = ['天', '一', '二', '三', '四', '五', '六'];
        return str[number];
    },
    formatString (STATUS) {
        if (STATUS == STATE.FETCHING) return '正在与服务器聊天,请稍后...';
        if (STATUS == STATE.SUCCESS) return '执行成功';
        if (STATUS == STATE.ERROR) return '服务器聊崩了，看看出什么问题了。';
        return STATUS;
    }
}