import React, {useState} from 'react';

function SignUpForm() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        const updatedUsername = e.target.value;
        setUsername(updatedUsername);
    }

    const handleEmailChange = (e) => {
        const updatedEmail = e.target.value;
        setEmail(updatedEmail);
    }

    const handlePasswordChange = (e) => {
        const updatedPassword = e.target.value;
        setPassword(updatedPassword);
    }

    return (
        <form action="">
            <div className="input-label-group">
                <label for="username">
                    <i className="fa-solid fa-user"></i>
                </label>
                <input 
                    type="text"
                    id="username"
                    placeholder="Username"
                    value={username}
                    onChange={handleUsernameChange} 
                />
            </div>
            <div className="input-label-group">
                <label for="email">
                    <i className="fa-solid fa-envelope"></i>
                </label>
                <input 
                    type="email"
                    id="email"
                    placeholder="Email" 
                    value={email}
                    onChange={handleEmailChange} 
                />
            </div>
            <div className="input-label-group">
                <label for="password">
                    <i className="fa-solid fa-lock"></i>
                </label>
                <input 
                    type="password" 
                    id="password"
                    placeholder="Password" 
                    value={password}
                    onChange={handlePasswordChange}
                />
            </div>
            <input 
                className="submit"
                type="Submit"
                value="Sign Up" 
            />
        </form>
    );
}

export default SignUpForm;