class wall{
	constructor(){
		//walls
		this.walls = new THREE.Group();
		
		//1
		buildWall(1000, 20, this.walls);
		this.walls.children[0].position.set(-490, 75, 0);
		this.walls.children[0].rotation.z = Math.PI/2;
		//1.2
		buildWall(1000, 20, this.walls);
		this.walls.children[1].position.set(0, 75, -490);
		//1.3
		buildWall(1000, 20, this.walls);
		this.walls.children[2].position.set(490, 75, 0);
		this.walls.children[2].rotation.z = Math.PI/2;
		//2
		buildWall(350, 20, this.walls);
		this.walls.children[3].position.set(-325, 75, 490);
		//2.2
		buildWall(350, 20, this.walls);
		this.walls.children[4].position.set(325, 75, 490);
		//3
		let wall3 = new THREE.Mesh(new THREE.BoxGeometry(180, 100, 5), new THREE.MeshLambertMaterial({color : 0xffffff}));
		this.walls.add(wall3);
		wall3.position.set(0, 50, 257.5);
		//wall3.
		//4
		buildWall(200, 20, this.walls);
		this.walls.children[6].position.set(-160, 75, 160);
		this.walls.children[6].rotation.z = Math.PI/2;
		//4.2
		buildWall(200, 20, this.walls);
		this.walls.children[7].position.set(160, 75, 160);
		this.walls.children[7].rotation.z = Math.PI/2;
		//5
		buildWall(300, 60, this.walls);
		this.walls.children[8].position.set(310, 75, 200);
		this.walls.children[8].rotation.z = Math.PI/2;
		//6
		buildWall(370, 20, this.walls);
		this.walls.children[9].position.set(205, 75, -30);
		//7
		buildWall(370, 20, this.walls);
		this.walls.children[10].position.set(30, 75, -205);
		this.walls.children[10].rotation.z = Math.PI/2;
		//8
		buildWall(200, 20, this.walls);
		this.walls.children[11].position.set(-290, 75, -380);
		this.walls.children[11].rotation.z = Math.PI/2;
		//8.2
		buildWall(200, 20, this.walls);
		this.walls.children[12].position.set(-290, 75, 20);
		this.walls.children[12].rotation.z = Math.PI/2;
		//8.3
		buildWall(200, 20, this.walls);
		this.walls.children[13].position.set(-390, 75, 110);
		//9
		let wall9 = new THREE.Mesh(new THREE.BoxGeometry(10, 100, 150), new THREE.MeshLambertMaterial({color : 0xffffff}));
		this.walls.add(wall9);
		wall9.position.set(-392.5, 50, -285);
		//9.2
		let w9 = wall9.clone();
		this.walls.add(w9);
		w9.position.set(-392.5, 50, -105);
	}
}

function buildWall(l, w, walls){
	let wall = new THREE.Mesh(new THREE.BoxGeometry(l, w, 150), new THREE.MeshLambertMaterial({color : 0xffffff}));
	wall.rotation.x = Math.PI/2;
	walls.add(wall);
}