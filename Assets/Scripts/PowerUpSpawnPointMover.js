#pragma strict

var freq = 1.0;
var amp = 1.0;

function Start () {

}

function Update () {
	var newX = Mathf.Sin(Time.time * freq) * amp;
	var newPosition = Vector3(newX, transform.position.y, transform.position.x);
	transform.position = newPosition;
}