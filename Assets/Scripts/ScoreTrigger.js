#pragma strict

// Reference to score script for display
var scoreScript : ScoreKeeper;

function Start () {
	scoreScript = GameObject.Find("LevelGlobalScripts").GetComponent(ScoreKeeper);
}

function Update () {

}

function OnTriggerEnter(other : Collider) {
	
	// Score
	scoreScript.Score(this.gameObject);

}