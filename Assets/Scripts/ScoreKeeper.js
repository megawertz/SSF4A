#pragma strict

// Yield reset time
var yieldResetTime = .7;

// Score
var leftPlayerScore : int;
var rightPlayerScore : int;
 
// Cached score triggers 
var leftScoreTrigger : GameObject;
var rightScoreTrigger : GameObject;

// Current game mode
var mode : GameMode;

// Scene management scripts
var manager : SceneManager;


function Start () {
	// Find the scene manager
	manager = GetComponent(SceneManager);
	// Default score
	leftPlayerScore = rightPlayerScore = 0;
	// Temporary until homescreen is created
	mode = GameMode.ScoreTheirs;
}

function Update () {

}

function Score (scoreTrigger : GameObject ) {
	
	// Written with maximum verbosity ;-)
	if(scoreTrigger.name == leftScoreTrigger.name) {
		
		if(mode == GameMode.ScoreYours) {
			leftPlayerScore += 1;
		}
		
		if(mode == GameMode.ScoreTheirs) {
			rightPlayerScore += 1;
		}
	}

	if(scoreTrigger.name == rightScoreTrigger.name) {
		
		if(mode == GameMode.ScoreYours) {
			rightPlayerScore += 1;
		}
		
		if(mode == GameMode.ScoreTheirs) {
			leftPlayerScore += 1;
		}
	}
	
	yield WaitForSeconds(yieldResetTime);
	// Add logic to determine if the game is over here;

	// If the game isn't over, reset the scene
	manager.ResetScene();

}