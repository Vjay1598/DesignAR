#pragma strict

function Start () {
	
}


var initialFingersDistance : float;
var initialScale : Vector3;
 
function Update(){
    var fingersOnScreen : int = 0;
 
    for (var touch : Touch in Input.touches) {
        fingersOnScreen++; //Count fingers (or rather touches) on screen as you iterate through all screen touches.
 
        //You need two fingers on screen to pinch.
        if(fingersOnScreen == 2){
 
            //First set the initial distance between fingers so you can compare.
            if(touch.phase == TouchPhase.Began){
                initialFingersDistance = Vector2.Distance(Input.touches[0].position, Input.touches[1].position);
                initialScale = transform.localScale;
            }
            else{
                var currentFingersDistance : float = Vector2.Distance(Input.touches[0].position, Input.touches[1].position);
         
               var scaleFactor : float = currentFingersDistance / initialFingersDistance;
         
                transform.localScale = initialScale * scaleFactor;
            }
        }
    
}

		
}
