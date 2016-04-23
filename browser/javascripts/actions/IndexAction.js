/**
 * Created by yebo on 2016/4/8.
*/
var IndexAction = Flux.createAction({
    openModal: function(isOpen) {
        this.dispatch("openModal",{open:isOpen});
    },
    updateText: function(text) {
        this.dispatch("updateText",{text:text});
    },
    updateCurrent:function(current){
        this.dispatch("updateCurrent",{current:current});
    }
});
module.exports = IndexAction;