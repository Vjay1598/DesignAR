using UnityEngine;
using System.Collections;

public class Scaler : MonoBehaviour {

	private Vector3 initial;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
		initial = transform.localScale;
	}

	public void inc()
	{
		transform.localScale = initial * 2;
	}

	public void dec()
	{
		transform.localScale = initial * 0.5f;
	}
}

