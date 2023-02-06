import './login.css';
import './form';
import Background from '../landingpage/background/background';

function Login () {
    return (
        <main>
          <div className="main">
            <Background />
            <div className="main-container">
              <div className="form">
                <ul className="tab-group">
                  <li className="tab active"><a href="#signup" id='signup'>Sign Up</a></li>
                  <li className="tab"><a href="#login" id='login'>Log In</a></li>
                </ul>
                
                <div className="tab-content">
                  <div id="signup">   
                    <h1>Sign Up for Free</h1>
                    
                    <form action="/" method="post">
                    
                    <div className="top-row">
                      <div className="field-wrap">
                        <label>
                          First Name<span className="req">*</span>
                        </label>
                        <input type="text" required autoComplete='off' />
                      </div>
                  
                      <div className="field-wrap">
                        <label>
                          Last Name<span className="req">*</span>
                        </label>
                        <input type="text"required autoComplete="off"/>
                      </div>
                    </div>

                    <div className="field-wrap">
                      <label>
                        Email Address<span className="req">*</span>
                      </label>
                      <input type="email"required autoComplete="off"/>
                    </div>
                    
                    <div className="field-wrap">
                      <label>
                        Password<span className="req">*</span>
                      </label>
                      <input type="password"required autoComplete="off"/>
                    </div>
                    
                    <button type="submit" className="buttona button-block">Sign Up</button>
                    
                    </form>
                  </div>
                  
                  <div id="login">   
                    <h1>Welcome Back!</h1>
                    
                    <form action="/" method="post">
                    
                      <div className="field-wrap">
                        <label>
                          Email Address<span className="req">*</span>
                        </label>
                        <input type="email"required autoComplete="off"/>
                      </div>
                    
                      <div className="field-wrap">
                        <label>
                          Password<span className="req">*</span>
                        </label>
                        <input type="password"required autoComplete="off"/>
                      </div>
                    
                      <p className="forgot"><a href="#">Forgot Password?</a></p>
                    
                      <button className="buttona button-block">Log In</button>
                    
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
);}

export default Login;