import './App.scss';
import graphic from './images/blue-and-white-image.png';



function App() {
    return (
        <div className="App">
            <header>
                <img src={graphic} alt="blue and white graphic" />
                <h1>Welcome</h1>
            </header>
            <main>
                <form action="">
                    <div className="input-label-group">
                        <label for="username">
                            <i className="fa-solid fa-user"></i>
                        </label>
                        <input 
                            type="text"
                            id="username"
                            placeholder="Username" 
                        />
                    </div>
                    <div className="input-label-group">
                        <label for="email">
                            <i className="fa-solid fa-envelope"></i>
                        </label>
                        <input 
                            type="text"
                            id="email"
                            placeholder="Email" 
                        />
                    </div>
                    <div className="input-label-group">
                        <label for="password">
                            <i className="fa-solid fa-lock"></i>
                        </label>
                        <input 
                            type="text" 
                            id="password"
                            placeholder="Password" 
                        />
                    </div>
                    <input 
                        className="submit"
                        type="Submit"
                        value="Log in" 
                    />
                </form>
                <button>Forgot Password</button>
                <button className="create-account">Don't Have an Account?</button>
            </main>
            <footer>
                <p>© 2024 Nonna Volodina | Design by Canva Creative Studio</p>
            </footer>
        </div>
    );
}


export default App;

