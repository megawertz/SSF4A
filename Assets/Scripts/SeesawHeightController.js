#pragma strict

// Movement
var moveRate = 3.5;

function Start () {

}

function Update () {

	// Go up
	if(Input.GetKey(KeyCode.UpArrow)) {
		if(transform.position.y < 4.0)
			transform.position.y += Time.deltaTime * moveRate;
	}
	
	// Go Down
	if(Input.GetKey(KeyCode.DownArrow)) {
		if(transform.position.y > 0)		
			transform.position.y -= Time.deltaTime * moveRate;
	}

}