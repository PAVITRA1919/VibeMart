
import React from 'react'
import './login.css'
export default function Login() {
    const wrapper = document.querySelector('.wrapper');
const signUpLink = document.querySelector('.signUp-link');
const signInLink = document.querySelector('.signIn-link');

signUpLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signIn');
    wrapper.classList.remove('animate-signUp');
});

signInLink.addEventListener('click', () => {
    wrapper.classList.add('animate-signUp');
    wrapper.classList.remove('animate-signIn');
});

  return (
        <div className="wrapper">
        <div className="form-wrapper sign-up">
            <form action="">
                <h2>Sign Up</h2>
                <div className="input-group">
                    <input type="text" required></input>
                    <label for="">Username</label>
                </div>
                <div className="input-group">
                    <input type="email" required></input>
                    <label for="">Email</label>
                </div>
                <div className="input-group">
                    <input type="password" required></input>
                    <label for="">Password</label>
                </div>
                <button type="submit" className="btn">Sign Up</button>
                <div className="sign-link">
                    <p>Already have an account? <a href="#" className="signIn-link">Sign In</a></p>
                </div>
            </form>
        </div>

        <div className="form-wrapper sign-in">
            <form action="">
                <h2>Login</h2>
                <div className="input-group">
                    <input type="text" required></input>
                    <label for="">Username</label>
                </div>
                <div className="input-group">
                    <input type="password" required></input>
                    <label for="">Password</label>
                </div>
                <div className="forgot-pass">
                    <a href="#">Forgot Password?</a>
                </div>
                <button type="submit" className="btn">Login</button>
                <div className="sign-link">
                    <p>Don't have an account? <a href="#" className="signUp-link">Sign Up</a></p>
                </div>
            </form>
        </div>
    </div>

    
  )
}
