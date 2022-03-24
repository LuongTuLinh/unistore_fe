import authApi from 'api/authApi';
import React, { useState, useEffect } from 'react'
import SignupForm from './component/SignupForm'

export default function Signup() {
	const [error, setError] = useState("");

	const [user, setUser] = useState({username: "", email: "", password: "", name: "", phone: "", role:null});

	useEffect(() => {
        if(localStorage.getItem("token")) window.location.href = "/home"    
    })

	const Signup = async (details) => {
		
		if(details.password !== details.rePassword) {
			setError("Password don't match");
			return;
		}

		var regexUsername = /^\S{6,45}$/g;
		var regexPassword = /^\S{6,45}/g

		if(!regexUsername.test(details.username)) {
			setError("Username only 6-45 characters, please");
			return;
		}
		if(!regexPassword.test(details.password)) {
			setError("Password only 6-45 characters, please");
			return;
		}
		await setUser({...user, username: details.username, password: details.password, email: details.email, name: details.name, phone: details.phone});
		
	}

	useEffect(() => {
		const createUser = async (user) => {
			if(user.username !== "" && user.password !== "") {
				const response = await authApi.signup(user);
				console.log(response);
				if(parseInt(response.status) === 400) {
					setError(response.data.message)
				}
	
				if(response.status === "ok") {
					alert(response.message)
					window.location.href = "/home";
				}
				console.log(user);
			}
		}
		
		createUser(user);
	}, [user])


	return (
		<>
			<SignupForm onSignup = {Signup} error={error} setError={setError} />
		</>
	)
}
