#pragma strict

// GUI Style
var scoreStyle : GUIStyle;
@HideInInspector
var scoreSize : Vector2;

// Text padding values
var topPadding = .05;
var leftPadding = .05;
var rightPadding = .05;

// Reference to score script for display
var scoreScript : ScoreKeeper;

function Start () {

	// Measure to get max size
	scoreSize = scoreStyle.CalcSize(new GUIContent("00"));
	
	// Find the score script. It's attached to this object currently.
	scoreScript = GetComponent(ScoreKeeper);
}

function Update () {

}

function OnGUI() {
	// Left player score
	GUI.Label(new Rect(Screen.width*leftPadding,Screen.height*topPadding,scoreSize.x,scoreSize.y),(""+scoreScript.leftPlayerScore),scoreStyle);

	// Right player score
	GUI.Label(new Rect((Screen.width*(1.0-leftPadding)-scoreSize.x),Screen.height*topPadding,scoreSize.x,scoreSize.y),(""+scoreScript.rightPlayerScore),scoreStyle);

}