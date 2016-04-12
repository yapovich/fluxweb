//自定义建筑工人
THREE.CustomerBuildUtil=function(option){
    var _self=this;
    var opt=option||{
            domId:"stage",
            sceneParam:{
                fog:new THREE.Fog( 0x050505, 1, 4000 )
            },
            cameraParam:{
                angel:95,
                near:1,
                far:4000,
                x:50,
                y:100,
                z:200
            },
            trackPointHandler:null
        }
    //定义场景
    var scene = new THREE.Scene();
    //添加公共组
    if(opt.sceneParam){
        if(opt.sceneParam.fog)
          scene.fog = opt.sceneParam.fog;
    }
    //定义高宽
    var width=document.getElementById(opt.domId).offsetWidth;
    var height=document.getElementById(opt.domId).offsetHeight;
    //定义摄像头
    var camera = new THREE.PerspectiveCamera( opt.cameraParam.angel, width / height, opt.cameraParam.near, opt.cameraParam.far );
    camera.position.x = opt.cameraParam.x;
    camera.position.y = opt.cameraParam.y;
    camera.position.z = opt.cameraParam.z;
    //创建渲染器
    var renderer = new THREE.WebGLRenderer({ antialias: true } );
    renderer.shadowMap.enabled = true;
    //renderer.setPixelRatio( window.devicePixelRatio );
    //创建渲染器尺寸
    renderer.setSize( width, height );
    renderer.setClearColor( scene.fog.color );
    //添加渲染器到画布
    document.getElementById(opt.domId).appendChild( renderer.domElement );
    //添加矩阵变化控件
    var orbit = new THREE.OrbitControls( camera, renderer.domElement );
    orbit.enableZoom = true;
    //添加环境光源
    var ambientLight = new THREE.AmbientLight( 0xffffff );
    scene.add( ambientLight );
    //添加点光源
    var light = new THREE.PointLight( 0xffffff,opt.cameraParam.near, opt.cameraParam.far );
    light.position.set( 0, opt.cameraParam.y, 0);
    light.castShadow = true;
    scene.add( light );
    light = new THREE.PointLight( 0xffffff,opt.cameraParam.near, opt.cameraParam.far );
    light.position.set( 0, 0-opt.cameraParam.y, 0 );
    light.castShadow = true;
    scene.add( light );
    //定义重绘
    window.addEventListener( 'resize', function() {
        var width=document.getElementById(opt.domId).offsetWidth;
        var height=document.getElementById(opt.domId).offsetHeight;
        camera.aspect = width / height;
        camera.updateProjectionMatrix();
        renderer.setSize( width, height );
    }, true );
    //第一人称
    //var clock=new THREE.Clock();
    //var controls=new THREE.FirstPersonControls(camera);
    this.render=function(){
        //controls.update(clock.getDelta());
        renderer.render(scene, camera);
        requestAnimationFrame( _self.render );
    }
    //获取渲染器----------------------------------------------------
    this.getRenderer=function(){
        return renderer;
    }
    //获取场景对象--------------------------------------------------
    this.getScene=function(){
        return scene;
    }
    //获取摄影机对象------------------------------------------------
    this.getCamera=function(){
       return camera;
    }
    //创建粒子系统========================================
    //创建建筑===========================================
    this.createBuilder=function(width,height,thickness,x,y,z){
        var centerX=width?(width/2):100;
        var centerY=height?(height/2):100;
        var centerX3=x?x:0;
        var centerY3=y?y:0;
        var centerZ3=z?z:0;
        var fthickness = thickness?thickness/2:1;
        //添加组
        var group = new THREE.Group();
        var trackPointGroup=new THREE.Group();
        group.add(trackPointGroup);
        scene.add( group );
        group.position.x+=centerX3
        group.position.y+=centerY3
        group.position.z+=centerZ3
        //定义轨迹点鼠标事件------------------------------------------------
        var raycaster = new THREE.Raycaster();
        var raycaster2 = new THREE.Raycaster();
        var intersect,intersect2;
        var mouse = new THREE.Vector2();
        window.addEventListener('mousemove', function(event) {
            event.preventDefault();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster.setFromCamera( mouse, camera );
            //鼠标经过
            var intersects = raycaster.intersectObjects(trackPointGroup.children);
            if ( intersects.length > 0 ) {
                intersect = intersects[intersects.length-1];
                intersect.object.material.color=new THREE.Color(1,1,0);
                document.body.style.cursor = 'pointer';
            }else if(intersect){
                intersect.object.material.color=new THREE.Color(1,0,0);
                intersect=null;
                document.body.style.cursor = 'auto';
            }
        },false);
        window.addEventListener('mousedown', function(event) {
            event.preventDefault();
            mouse.x = ( event.clientX / window.innerWidth ) * 2 - 1;
            mouse.y = - ( event.clientY / window.innerHeight ) * 2 + 1;
            raycaster2.setFromCamera( mouse, camera );
            //鼠标点击
            var intersects2 = raycaster2.intersectObjects(trackPointGroup.children);
            if ( intersects2.length > 0 ) {
                intersect2 = intersects2[intersects2.length-1];
                console.log("deviceId:"+intersect2.object.data);
                if(opt.trackPointHandler)
                    opt.trackPointHandler.call(this);
            }
        },false);
        //------------------------------------------------
        var result={
            //打地基-------------------------------------------------------
            buildFoundation: function (material) {
                var geometry = new THREE.BoxGeometry(width, thickness, height);
                var cube = new THREE.Mesh(geometry, material);
                cube.receiveShadow = true;
                cube.position.x=centerX;
                cube.position.z=centerY;
                group.add(cube);
                return cube;
            },
            //建围墙
            buildWall: function (points, height, thickness,zvalue,material) {
                var wallGroup=new THREE.Group();
                for (var i = 0; i < points.length - 1; i++) {
                    var dx = (points[i + 1].x + points[i].x) / 2;
                    var dy = (points[i + 1].y + points[i].y) / 2;
                    if(points[i+1].opened)
                       continue;
                    if(points[i + 1].x===points[i].x) {
                        var distance = Math.abs(points[i + 1].y - points[i].y) + thickness
                        var x = points[i + 1].x;
                        var y = zvalue+height / 2 + fthickness
                        var z = dy;
                        var geometry = new THREE.BoxGeometry(thickness, height, distance);
                        var cube = new THREE.Mesh(geometry, material);
                        cube.castShadow = true;
                        cube.position.x = x;
                        cube.position.y = y;
                        cube.position.z = z;
                        wallGroup.add(cube);
                    } else if(points[i + 1].y===points[i].y) {
                        var distance = Math.abs(points[i + 1].x - points[i].x) + thickness
                        var x = dx;
                        var y = zvalue+height / 2 + fthickness;
                        var z = points[i + 1].y;
                        var geometry = new THREE.BoxGeometry(distance, height, thickness);
                        var cube = new THREE.Mesh(geometry, material);
                        cube.castShadow = true;
                        cube.position.x = x;
                        cube.position.y = y;
                        cube.position.z = z;
                        wallGroup.add(cube);
                    }else{
                        var dx=points[i + 1].x-points[i].x;
                        var dy=points[i + 1].y-points[i].y;
                        var distance=Math.sqrt(dx*dx+dy*dy);
                        var x = (points[i].x+dx/2);
                        var y = zvalue+height / 2 + fthickness;
                        var z = (points[i].y+dy/2);
                        var geometry = new THREE.BoxGeometry(distance, height, thickness);
                        var cube = new THREE.Mesh(geometry, material);
                        cube.castShadow = true;
                        cube.position.x = x;
                        cube.position.y = y;
                        cube.position.z = z;
                        cube.rotation.y=0-Math.atan2(dy,dx)
                        wallGroup.add(cube);
                    }
                }
                group.add(wallGroup);
                return wallGroup;
            },
            //建立方体
            buildCube: function (point, width, height, thickness,zvalue,material) {
                var geometry = new THREE.BoxGeometry(width, thickness, height);
                var cube = new THREE.Mesh(geometry, material);
                cube.castShadow = true;
                cube.position.x = (point.x + width / 2);
                cube.position.y = zvalue + thickness / 2 + fthickness;
                cube.position.z = (point.y + height / 2);
                group.add(cube);
                return cube;
            },
            //建多边体
            buildPolygon: function(points,height,zvalue,material) {
                var extrudeSettings = {
                    amount: height,
                    steps: 10,
                    bevelEnabled: false
                };
                var pts = [];
                for (var i = 0; i < points.length; i++) {
                    var x = points[i].x;
                    var y = 0-points[i].y;
                    pts.push(new THREE.Vector2(x, y));
                }
                var shape = new THREE.Shape(pts);
                var geometry = new THREE.ExtrudeGeometry(shape, extrudeSettings);
                var mesh = new THREE.Mesh(geometry, material);
                mesh.castShadow = true;
                mesh.rotation.x = -Math.PI/2;
                mesh.position.y = fthickness + zvalue;
                //mesh.position.z = -centerY
                group.add(mesh);
                return mesh;
            },
            //建管道
            buildTube: function(points,radius,radiusSegment,material){
                var vp=[]
                for(var i=0;i<points.length;i++){
                    var x = points[i].x;
                    var y = fthickness + points[i].z;
                    var z = points[i].y;
                    vp.push(new THREE.Vector3(x,y,z));
                }
                console.log(vp);
                var sampleClosedSpline = new THREE.ClosedSplineCurve3(vp);
                var geometry = new THREE.TubeGeometry(sampleClosedSpline, 200, radius, radiusSegment, true);
                var tube = new THREE.Mesh(geometry, material);
                tube.castShadow = true;
                group.add(tube);
                return tube;
            },
            //建立方体房子
            buildCubeHouse: function(point,width,height,amount,thickness,floor,material) {
                var pts = [];
                var z = point.z ? (point.z + amount / 2) : (amount / 2);
                //建立方体单个房子
                var _buildHouse=function(point,width,height,amount,thickness,material){
                    var _group=new THREE.Group();
                    //左
                    var geometry = new THREE.BoxGeometry(thickness, amount, height);
                    var cube = new THREE.Mesh(geometry, material);
                    cube.castShadow = true;
                    cube.position.x = 0-(width-thickness)/2
                    _group.add(cube)
                    //右
                    geometry = new THREE.BoxGeometry(thickness, amount,height);
                    cube = new THREE.Mesh(geometry, material);
                    cube.castShadow = true;
                    cube.position.x = (width-thickness)/2
                    _group.add(cube)
                    //上
                    geometry = new THREE.BoxGeometry(width-thickness*2, thickness, height);
                    cube = new THREE.Mesh(geometry, material);
                    cube.castShadow = true;
                    cube.position.y = (amount-thickness)/2
                    _group.add(cube)
                    //下
                    geometry = new THREE.BoxGeometry(width-thickness*2, thickness, height);
                    cube = new THREE.Mesh(geometry, material);
                    cube.castShadow = true;
                    cube.position.y = 0-(amount-thickness)/2
                    _group.add(cube);
                    //后
                    geometry = new THREE.BoxGeometry(width, amount-thickness*2, thickness);
                    cube = new THREE.Mesh(geometry, material);
                    cube.castShadow = true;
                    cube.position.z = 0-(height-thickness)/2
                    _group.add(cube)
                    _group.position.x = (point.x+width/2);
                    _group.position.y =  point.z+fthickness;
                    _group.position.z = (point.y+height/2);
                    group.add(_group);
                    return _group;
                };
                for (var j = 0; j < floor; j++) {
                    var pt={x: point.x, y: point.y, z: z + (amount - thickness) * j};
                    _buildHouse(pt, width, height, amount, thickness, material);
                }
            },
            //建多边体房子
            buildPolygonHouse: function(points,height,thickness,zvalue,floor,material){
                for(var i=0;i<floor;i++) {
                    result.buildWall(points, height, 0.01, i*height+zvalue, material);
                    result.buildPolygon(points, thickness, i*height+zvalue, material);
                    result.buildPolygon(points, thickness, (i+1)*height-thickness, material);
                }
            },
            //建圆柱体房子
            buildCylinderHouse: function(point,radius,height,thickness,zvalue,floor,material){
                var r1=radius-thickness/2;
                var r2=radius+thickness/2
                for (var j = 0; j < floor; j++) {
                    var pts = [];
                    for (var i = 0; i <= 240; i++) {
                        var d = uint * i * 1.5;
                        var x = r1 * Math.cos(d);
                        var y = r1 * Math.sin(d);
                        pts.push({x: x, y: y});
                    }
                    for (var i = 0; i <= 240; i++) {
                        var d = uint * (240 - i) * 1.5;
                        var x = r2 * Math.cos(d);
                        var y = r2 * Math.sin(d);
                        pts.push({x: x, y: y});
                    }
                    result.buildPolygon(pts, height, j*height+zvalue, material);
                    pts = [];
                    for (var i = 0; i <= 240; i++) {
                        var d = uint * i * 1.5;
                        var x = r2 * Math.cos(d);
                        var y = r2 * Math.sin(d);
                        pts.push({x: x, y: y});
                    }
                    result.buildPolygon(pts, thickness, j*height+zvalue, material);
                    result.buildPolygon(pts, thickness, (j+1)*height+zvalue, material);
                }
            },
            //建水平平面
            buildHorizontalPanel: function(point,width,height,material){
                    var geometry = new THREE.PlaneBufferGeometry( width, height, 10 );
                    var plane = new THREE.Mesh( geometry, material );
                    plane.castShadow = true;
                    plane.position.x=(point.x + width / 2);
                    plane.position.y=point.z+fthickness
                    plane.position.z=(point.y+height/2);
                    plane.rotation.x=0-Math.PI/2
                    group.add( plane );
            },
            //建垂直平面
            buildVerticalPanel: function(point,width,height,material){
                    var geometry = new THREE.PlaneBufferGeometry( width, height, 10 );
                    var plane = new THREE.Mesh( geometry, material );
                    plane.castShadow = true;
                    plane.position.x=(point.x + width / 2);
                    plane.position.y=(point.z + height/2) + fthickness
                    plane.position.z=point.y;
                    group.add( plane );
                    console.log("plane.position.z:->"+plane.position.z);
            },
            //建轨迹点
            buildTrackPoint: function(points,r,material){
                for(var i=0;i<points.length;i++){
                    var x=points[i].x;
                    var y=points[i].y;
                    var z=points[i].z;
                    var geometry = new THREE.SphereBufferGeometry( r, 50, 50 );
                    var sphere = new THREE.Mesh( geometry, material.clone(material));
                    sphere.data=points[i].data;
                    sphere.position.x=x
                    sphere.position.y=z+r+fthickness
                    sphere.position.z=y
                    sphere.castShadow = true;
                    trackPointGroup.add( sphere );
                }
            },
            //建轨迹路径
            buildTrackPath: function(points,material){
                var geometry = new THREE.Geometry();
                for (var i = 0; i < points.length; i++) {
                    var x=points[i].x;
                    var y=points[i].z+fthickness;
                    var z=points[i].y;
                    geometry.vertices.push(new THREE.Vector3( x, y, z ));
                }
                var line = new THREE.Line( geometry, material );
                line.castShadow = true;
                group.add( line );
                return line;
            },
            buildTest :function(){
                /*
                var count=9;
                var v = 0;
                function verts_push() {
                    for (var i=0; i < arguments.length; i++) {
                        vertices.array[v++] = arguments[i];
                    }
                }
                var vertices = new THREE.BufferAttribute(new Float32Array( count * 3),3);
                var geometry = new THREE.BufferGeometry();
                geometry.addAttribute( 'position', vertices );
                verts_push(
                    100,20,30,
                    70,35,40,
                    60,20,30,
                    70,35,40,
                    60,20,30,
                    60,20,80,
                    60,20,80,
                    100,20,30,
                    70,35,40
                );
                console.log(vertices);
                var material = new THREE.MeshPhongMaterial( {
                    side: THREE.DoubleSide,
                    color:0x339966,
                    shading: THREE.FlatShading,
                    wireframe:wf,
                    transparent:true,
                    opacity:0.7
                })
                var mesh = new THREE.Mesh( geometry, material);
                group.add( mesh );*/

                var heartShape = new THREE.Shape();
                heartShape.moveTo( 20, 0 );
                heartShape.bezierCurveTo( 40,20,40,20,50,50);
                heartShape.bezierCurveTo( 50,50,20,40,20,0);
                var extrudeSettings = {curveSegments:50,amount: 50, bevelEnabled: false, bevelSegments: 2, steps: 20, bevelSize: 1, bevelThickness: 1 };
                var geometry = new THREE.ExtrudeGeometry( heartShape, extrudeSettings );
                var mesh = new THREE.Mesh( geometry, new THREE.MeshPhongMaterial({color:0xff6695,wireframe:false}) );
                mesh.castShadow = true;
                //mesh.rotation.x = -Math.PI/2;
                mesh.position.y = fthickness;
                mesh.rotation.y = -Math.PI/2;
                mesh.position.x = 50+10;
                group.add( mesh );

                var axisHelper = new THREE.AxisHelper( 2000 );
                scene.add( axisHelper );
            }

        }
        return result;
    }

}