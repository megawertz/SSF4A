#pragma strict

// Prefabs
var leftPlayerPrefab : GameObject;
var rightPlayerPrefab : GameObject;

// In-game Objects
var leftPlayer : GameObject;
var rightPlayer : GameObject;
var plank : GameObject;

// Spawn Points
var leftPlayerSpawnPoint : GameObject;
var rightPlayerSpawnPoint : GameObject;

function Start () {
	// Spawn initial objects
	// Copy and paste from below.
	leftPlayer = GameObject.Instantiate(leftPlayerPrefab,leftPlayerSpawnPoint.transform.position,Quaternion.identity);
	rightPlayer = GameObject.Instantiate(rightPlayerPrefab,rightPlayerSpawnPoint.transform.position,Quaternion.identity);
}

function Update () {

}

function ResetScene () {

	// Delete current player objects
	GameObject.Destroy(leftPlayer);
	GameObject.Destroy(rightPlayer);
	
	// Reinstantiate...doing this to remove physics
	leftPlayer = GameObject.Instantiate(leftPlayerPrefab,leftPlayerSpawnPoint.transform.position,Quaternion.identity);
	rightPlayer = GameObject.Instantiate(rightPlayerPrefab,rightPlayerSpawnPoint.transform.position,Quaternion.identity);
	
	// Reset the plank to have no rotation
	var rb = plank.GetComponent(Rigidbody);
	rb.velocity = Vector3.zero;
	rb.angularVelocity = Vector3.zero;
	plank.transform.rotation = Quaternion.identity;

}