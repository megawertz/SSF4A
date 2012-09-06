#pragma strict

// Title to live for this powerup
var ttl : float;
var ttlMin = 1.0;
var ttlMax = 10.0;

var mode : PowerUpModes;

var plank : GameObject; 

function Awake() {
	// defaults
	ttl = 1.0;
	mode = PowerUpModes.None;
}

function Start () {
	plank = GameObject.Find("Plank");
	ttl = Random.Range(ttlMin, ttlMax);
	
	// Select one of the powerups
	// 0 is none and Length is too many, so, you know, deal with that.
	var i : PowerUpModes = Random.Range(1,System.Enum.GetValues(PowerUpModes).Length);
	mode = i;

}

function Update () {

}

function OnCollisionEnter(collision : Collision) {

	if(collision.gameObject.name == plank.name) {
		// When we hit the plank, start the ttl timer
		yield WaitForSeconds(ttl);
		// Then die.
		GameObject.Destroy(this.gameObject);
	}
	
	// The player objects will worry about getting powered-up
	//  if they hit one of these.

}