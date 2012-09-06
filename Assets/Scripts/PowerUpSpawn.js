#pragma strict

// Power up prefab
var powerUpPrefab : GameObject;

// Spawn rate
var spawnMin = 2.0;
var spawnMax = 10.0;

var spawnWait : float;
var spawnTimer : float;


// Total powerups to cache
// var powerupPreloadAmount = 10;

// Not used
// Array to hold a bunch of preloaded items
// @HideInInspector
// var powerups : GameObject[];


function Awake () {
		spawnWait = Random.Range(spawnMin,spawnMax);
}

function Update () {
	spawnTimer += Time.deltaTime;
	if(spawnTimer > spawnWait) {
		Spawner();
		spawnWait = Random.Range(spawnMin,spawnMax);
		spawnTimer = 0;
	}
}

function Spawner () {
	
	var pu = Instantiate(powerUpPrefab);
	pu.gameObject.transform.position = this.gameObject.transform.position;
	
}
