export default {
    handleOnChange (event) {
        let id = event.target.id;
        let idArrays = id.split('.');
        let obj = this.state;
        let NowObj = obj;
        for (var i = 0; i < idArrays.length; i++) {
            if (i < idArrays.length - 1) {
                // NowObj[idArrays[i]] = {};
                if (!NowObj[idArrays[i]]) {
                    NowObj[idArrays[i]] = {};
                }
                NowObj = NowObj[idArrays[i]];

            } else {
                NowObj[idArrays[i]] = event.target.value;
            }
        }
        console.log(obj);
        this.setState(obj);
        // this.eventUpdateContent();
    }
}