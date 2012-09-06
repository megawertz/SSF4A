#pragma strict

// Keybindings
var left : String;
var  right : String;
var jump : String;

// Movement
var moveRate = 3.5;
var jumpForce = 5;
var mass = 1.0;

// PowerUp
var pu : GameObject;

function Start () {

}

function Update () {

	// Go left
	if(Input.GetKey(left)) {
		transform.position.x -= Time.deltaTime * moveRate;
	}
	
	// Go right
	if(Input.GetKey(right)) {
		transform.position.x += Time.deltaTime * moveRate;
	}
	
	// Jump
	if(Input.GetKeyDown(jump)) {
		rigidbody.AddForce(Vector3.up * jumpForce, ForceMode.Impulse);
	}

}

// *********************
// Need to refactor this to be one script.
// Set keys via the editor
// *********************
function OnCollisionEnter(collision : Collision) 
{
	// If we hit a power up, apply it
	if(collision.gameObject.tag == "Powerup") 
	{
		// Save the powerup mode and kill the powerup
		var mode =  collision.gameObject.GetComponent(PowerUpConfig).mode;
		GameObject.Destroy(collision.gameObject);
		
		// get the player rigidbody in case we need it
		// Future powerups might not be physics based?
		var rb = GetComponent(Rigidbody);
		
		Debug.Log("Mode:" + collision.gameObject.GetComponent(PowerUpConfig).mode);
		
		switch(mode) 
		{
			case PowerUpModes.IncreaseMass:
				rb.mass = rb.mass * 2.0;
				this.gameObject.transform.localScale *= 2.0;
				ResetPlayer();
				break;
			case PowerUpModes.DecreaseMass:
				rb.mass = rb.mass / 2.0;
				this.gameObject.transform.localScale /= 2.0;
				ResetPlayer();
				break;
			case PowerUpModes.None:
				Debug.Log("None");
				break;
			default:
				Debug.Log("No Mode found. Mode is " + mode);
		
		}
		
	}
}

function ResetPlayer() {

	yield WaitForSeconds(5);
	GetComponent(Rigidbody).mass = this.mass;
	this.gameObject.transform.localScale = Vector3.one;
}
