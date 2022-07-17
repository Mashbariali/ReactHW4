import { useState } from 'react';


function Log() {
const [name, setName] = useState('');

const [password, setPassword] = useState('');
const [isLoggedin, setIsLoggedin] = useState(false);

const login = (e) => {
	
	console.log(name, password);
	const userData = {
	name,
	password,
	};
	localStorage.setItem('key', JSON.stringify(userData));
	setIsLoggedin(true);
	setName('');
	setPassword('');
};

const logout = () => {
	localStorage.removeItem('key');
	setIsLoggedin(false);
};

return (
	<>
	<div>
		<h1>Login Page</h1>
		{!isLoggedin ? (
		<>
			<form action="">
			<input
				type="text"
				onChange={(e) => setName(e.target.value)}
				value={name}
				placeholder="Name"
			/>
			
			<input
				type="password"
				onChange={(e) => setPassword(e.target.value)}
				value={password}
				placeholder="Password"
			/>
			<button type="submit" onClick={login}>
				Login
			</button>
			</form>
		</>
		) : (
		<>
			<h2>logged in</h2>
			<button onClickCapture={logout}>logout</button>
		</>
		)}
	</div>
	</>
);
}

export default Log;
