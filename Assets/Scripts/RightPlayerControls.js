#pragma strict

var moveRate = 2;
var jumpForce = 5;

private var originalRotation : Quaternion;

function Start () {

}

function Update () {
	
	// Go left
	if(Input.GetKey("j")) {
		transform.position.x -= Time.deltaTime * moveRate;
	}
	
	// Go right
	if(Input.GetKey("l")) {
		transform.position.x += Time.deltaTime * moveRate;
	}
	
		// Jump
	if(Input.GetKeyDown("k")) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}
	
	// Have to account for 340 to 360 as well as 0 to 20. Hmmm.
	// transform.eulerAngles.z = Mathf.Clamp(transform.eulerAngles.z,0,20);

}

static function ClampAngle (angle : float, min : float, max : float) : float {
	if (angle < -360.0)
		angle += 360.0;
	if (angle > 360.0)
		angle -= 360.0;
	return Mathf.Clamp (angle, min, max);
}

function FixedUpdate() {
	
	
}