importScripts("../comp/hashmap.js");
var centerX,centerY;
var uint = (2 * Math.PI / 360);//每度代表的弧度
var maxBallX=0,maxBallY=0,maxBallRadius=0
var getXYByY=function(startX,startY,startZ,drgee){
	var x0,y0,z0,x,y,z;
	x0=startX-centerX
	y0=centerY-startY;
	z0=startZ;
	x=Math.round(x0*Math.cos(uint*drgee)+z0*Math.sin(uint*drgee));
	y=y0;
	z=Math.round(z0*Math.cos(uint*drgee)-x0*Math.sin(uint*drgee));
	return {x:centerX+x,y:centerY-y,z:z};
}
var resetZ=function(node,drgee){
	var x=0;
	var y=node.p.x-centerX;
	var z=centerY-node.p.y;
	var angel1 = Math.acos(z/maxBallRadius);
	var angel2 = Math.asin(y/(maxBallRadius*Math.sin(angel1)));
	x=Math.round(Math.abs(maxBallRadius*Math.sin(angel1)*Math.cos(angel2)));
	node.p.z=x//node.level<=2?x:0-x;
	if(isNaN(node.p.z))
		node.p.z=0;
	if(drgee!=undefined)
		node.p=getXYByY(node.p.x,node.p.y,node.p.z,drgee);
}
onmessage =function (evt){
  var d = evt.data;
  centerX=d.centerX;
  centerY=d.centerY;
  
  for(var i=0;i<d.nodes.length;i++){
  	var _node=d.nodes[i];
  	
  	var offsetX=Math.abs(_node.p.x-centerX);
	var offsetY=Math.abs(_node.p.y-centerY);
	maxBallX=offsetX>maxBallX?offsetX:maxBallX;
	maxBallY=offsetY>maxBallY?offsetY:maxBallY;
  }
  maxBallRadius=maxBallX>maxBallY?maxBallX:maxBallY;
  //maxBallRadius=Math.round(Math.sqrt(maxBallX * maxBallX + maxBallY * maxBallY));
  console.log("work's maxBallRadius:"+maxBallRadius)
  for(var i=0;i<d.nodes.length;i++)
  {
	resetZ(d.nodes[i],d.drgee)
  }
//通过evt.data获得发送来的数据
  postMessage(d);
//将获取到的数据发送会主线程
}