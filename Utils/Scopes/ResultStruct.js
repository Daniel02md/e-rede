
class ResultStruct{
    constructor(success, content){
        if (success){
            this.success = success
            this.result = content
        } else{
            this.success = success
            this.error = { message: content}
        }
    }
}

module.exports = ResultStruct