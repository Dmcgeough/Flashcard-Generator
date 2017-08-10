function BasicCard (front, back) {
    this.front = front;
    this.back = back;
     this.questions = function(){
        var str = this.front;
        var res = str.replace(this.front, this.back);
        return res;
    }
};
module.exports = BasicCard;