import React, {useState} from 'react';


function LoginForm() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

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
                value="Log in" 
            />
        </form>
    );
}

export default LoginForm;