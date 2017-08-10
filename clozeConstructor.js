function ClozeCard(cloze, fulltext) {
    this.cloze = cloze;
    this.fulltext = fulltext;
    this.partial = function(){
        var str = this.fulltext;
        var res = str.replace(this.cloze, "...");
        return res;
    }
};

module.exports = ClozeCard;