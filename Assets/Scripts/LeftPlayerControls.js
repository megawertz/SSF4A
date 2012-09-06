#pragma strict

var moveRate = 2;
var jumpForce = 5;

function Start () {

}

function Update () {

	// Go left
	if(Input.GetKey("a")) {
		transform.position.x -= Time.deltaTime * moveRate;
	}
	
	// Go right
	if(Input.GetKey("d")) {
		transform.position.x += Time.deltaTime * moveRate;
	}
	
	// Jump
	if(Input.GetKeyDown("s")) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}

}