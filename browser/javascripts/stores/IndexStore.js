/**
 * Created by yebo on 2016/4/8.
 */
var resultText="init value";
var IndexStore = Flux.createStore({
    state:{
        open:false,
        text:"我是大灰狼",
        current:"left"
    },
    openModal:function(data) {
        this.setState(data);
    },
    updateText:function(data){
        this.setState(data);
    },
    updateCurrent:function(data){
        this.setState(data);
    }
});
//for(var i=0;i<1000;i++)
//resultText+="波波维奇";
module.exports = IndexStore;