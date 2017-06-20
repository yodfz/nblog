export default {
    handleOnChange (event) {
        console.log(this);
        let id = event.target.id;
        let idArrays = id.split('.');
        let obj = {};
        let NowObj = obj;
        for (var i = 0; i < idArrays.length; i++) {
            if (i < idArrays.length - 1) {
                NowObj[idArrays[i]] = {};
                NowObj = NowObj[idArrays[i]];
            } else {
                NowObj[idArrays[i]] = event.target.value;
            }
        }
        this.setState(obj);
        // this.eventUpdateContent();
    }
}