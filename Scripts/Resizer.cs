using UnityEngine;
using System.Collections;

public class Resizer : MonoBehaviour {

	//private int value = 2;
	public GameObject table;
	public Scaler scaler;

	// Use this for initialization
	void Start () {
	
	}
	
	// Update is called once per frame
	void Update () {
	
	}

	public void zoomin()
	{
		scaler.inc ();
	}

	public void zoomout()
	{
		scaler.dec ();
	}
}
