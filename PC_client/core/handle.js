export default {
    handleOnChange (event) {
        let id = event.target.id;
        this.setState({[id]: event.target.value});
        // this.eventUpdateContent();
    }
}