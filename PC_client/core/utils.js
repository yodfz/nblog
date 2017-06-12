export default {
    returnMonthStringFormNumber (number) {
        const str = ['', '一', '二', '三', '四', '五', '六', '七', '八', '九', '十', '十一', '十二'];
        return str[number];
    }
    ,
    returnWeekStringFormNumber (number) {
        const str = ['天', '一', '二', '三', '四', '五', '六'];
        return str[number];
    }
}