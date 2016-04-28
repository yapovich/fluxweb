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
    },
    updateInterests:function(interests){
        this.dispatch("updateInterests",{interests:interests});
    },
    updateMale:function(male){
        this.dispatch("updateMale",{male:male});
    },
    chooseAll:function(){
        this.dispatch("chooseAll");
    }
});
module.exports = IndexAction;