/**
 * Created by yebo on 2016/4/8.
*/
var IndexAction = Flux.createAction({
    openModal: function(isOpen) {
        this.dispatch("openModal",{resultOpen:isOpen});
    },
    updateText: function(text) {
        this.dispatch("updateText",{resultText:text});
    },
    updateCurrent:function(current){
        this.dispatch("updateCurrent",{resultCurrent:current});
    }
});
module.exports = IndexAction;