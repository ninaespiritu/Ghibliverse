export const Login = ({ props }) => {
	return (
		<div>
			<h1>Log In</h1>
			<form onSubmit={props.handleLogin}>
                <input
					onChange={(e) => props.setUsername(e.target.value)}
					placeholder="Username"
				/>
                <input
					onChange={(e) => props.setPassword(e.target.value)}
					placeholder="Password"
				/>
                <button type="submit">Log In</button>
			</form>
		</div>
	);
};
