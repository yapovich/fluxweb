/**
 * Created by yebo on 2016/4/11.
 */
var ButtonDemo = Flux.createView({
    //视图渲染，发生状态变化时自动调用
    render: function () {
        var getButton=function(type){
            return (<div>
                <h3>{type}</h3>
                <div className="row">
                    <Comp.Button type={type} size="lg">{type}</Comp.Button>&nbsp;
                    <Comp.Button type={type}>{type}</Comp.Button>&nbsp;
                    <Comp.Button type={type} disabled="true">{type}</Comp.Button>&nbsp;
                    <Comp.Button type={type} size="sm">{type}</Comp.Button>&nbsp;
                    <Comp.Button type={type} size="xs">{type}</Comp.Button>&nbsp;
                </div>
                <div className="row">
                     <Comp.Button type={type} size="lg" badge="4">{type}</Comp.Button>&nbsp;
                     <Comp.Button type={type} badge="4">{type}</Comp.Button>&nbsp;
                     <Comp.Button type={type} disabled="true" badge="4">{type}</Comp.Button>&nbsp;
                     <Comp.Button type={type} size="sm" badge="4">{type}</Comp.Button>&nbsp;
                     <Comp.Button type={type} size="xs" badge="4">{type}</Comp.Button>&nbsp;
               </div>
                <pre>
                    <span>sdfsdf</span>
                </pre>

            </div>)
        }
        return (
            <div>
                <h1 className="headline">Button</h1>
                {getButton("default")}
                {getButton("primary")}
                {getButton("success")}
                {getButton("info")}
                {getButton("warning")}
                {getButton("danger")}
            </div>
        )
    },
   //尺寸重绘，发生窗体大小变化时自动调用
    resize: function () {
        //获取当前页面的尺寸
        var width = FluxConstant.view.PAGE_WIDTH;
        var height = FluxConstant.view.PAGE_HEIGHT;
    },
    //渲染完成后
    didMount: function () {

    },
    //是否应该更新
    shouldUpdate:function(){
      return true;
    },
    //重新渲染完成时
    didUpdate: function(){

    }
});
module.exports = ButtonDemo;