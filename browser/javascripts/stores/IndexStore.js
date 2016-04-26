/**
 * Created by yebo on 2016/4/8.
 */
var resultText="init value";
var IndexStore = Flux.createStore({
    state:{
        open:true,
        text:"我是大灰狼",
        current:"left"
    },
    openModal:function(data) {
        this.setState({open:data.resultOpen});
    },
    updateText:function(data){
        this.setState({text:data.resultText,open:false});
    },
    updateCurrent:function(data){
        this.setState({current:data.resultCurrent,open:false});
    }
});
//for(var i=0;i<1000;i++)
//resultText+="波波维奇";
module.exports = IndexStore;