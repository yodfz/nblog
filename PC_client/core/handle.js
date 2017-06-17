export default {
    handleOnChange (event) {
        console.log(this);
        let id = event.target.id;
        this.setState({[id]: event.target.value});
        // this.eventUpdateContent();
    }
}