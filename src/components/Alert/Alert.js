import React from 'react'
import './Alert.css'

export default function Alert({type, text}) {

	// useEffect(() => {
	// 	const showAlert = () => {
	// 		const alert = document.getElementById('alert');
	// 		document.getElementById('alert').style.display = "block";

	// 		setTimeout(function() {alert.style.display='none'}, 2000);
	// 	}
	// 	showAlert();
	// },[])

	return (
		<div id="alert" className={"alert " + type}>
			<span className="closebtn" onClick={(e) => e.target.parentNode.style.display = 'none'}>&times;</span> 
			<strong>{text}</strong> 
		</div>
	)
}
