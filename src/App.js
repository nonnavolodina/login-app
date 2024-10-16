import React, {useState} from 'react';
import './App.scss';
import graphic from './images/blue-and-white-image.png';
import LoginForm from './components/LoginForm';
import SignUpForm from './components/SignUpForm';


function App() {

    const [showSignUpForm, setShowSignUpForm] = useState('Login');
    return (
        <div className="App">
            <header>
                <img src={graphic} alt="blue and white graphic" />
                <h1>Welcome</h1>
            </header>
            <main>
                <div className={showSignUpForm==="Login" ? "show" : "hide"}>
                    <LoginForm />
                </div>
                <div className={showSignUpForm==="Sign up" ? "show" : "hide"}>
                    <SignUpForm />
                </div>
                <button className={showSignUpForm==="Login" ? "show" : "hidden"}>Forgot Password</button>
                <button 
                    className="create-account"
                    onClick={() => {
                        setShowSignUpForm(showSignUpForm === 'Login' ? 'Sign up' : 'Login');
                    }}
                >
                    {showSignUpForm === 'Login' ? "Don't have an account" : "Back to Login"}
                </button>
            </main>
            <footer>
                <p>© 2024 Nonna Volodina | Design by Canva Creative Studio</p>
            </footer>
        </div>
    );
}


export default App;

