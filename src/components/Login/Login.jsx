import React, {useState} from 'react'

export default function Login() {

    const [formData, setFormData] = useState({ email : '', password : ''})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    // const onEmailOnChange = (event) => {
    //     setFormData({...formData, email : event.target.value})
    // }

    // const onPasswordChange = (event) => {
    //     setFormData({...formData, password : event.target.value})
    // }

    const onChange = (event) => {
        const id = event.target.id
        setFormData({...formData, [id] : event.target.value})
    }

   // console.log(formData)

    return (
        <main>
          {/* breadcrumb-area-start */}
          <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="breadcrumb-text text-center">
                    <h1>Login</h1>
                    <ul className="breadcrumb-menu">
                      <li><a href="index.html">home</a></li>
                      <li><span>Login</span></li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* breadcrumb-area-end */}
          {/* login Area Strat*/}
          <section className="login-area pt-100 pb-100">
            <div className="container">
              <div className="row">
                <div className="col-lg-8 offset-lg-2">
                  <div className="basic-login">
                    <h3 className="text-center mb-60">Login From Here</h3>
                    <form onSubmit={handleSubmit}>
                      <label htmlFor="name">Email Address <span>**</span></label>
                      <input id="email" type="text" placeholder="Enter Username or Email address..." onChange={onChange} />
                      <label htmlFor="pass">Password <span>**</span></label>
                      <input id="password" type="password" placeholder="Enter password..." onChange={onChange}/>
                      <div className="login-action mb-20 fix">
                        <span className="log-rem f-left">
                          <input id="remember" type="checkbox" />
                          <label htmlFor="remember">Remember me!</label>
                        </span>
                        <span className="forgot-login f-right">
                          <a href="#">Lost your password?</a>
                        </span>
                      </div>
                      <button type="submit" className="btn theme-btn-2 w-100" >Login Now</button>
                      <div className="or-divide"><span>or</span></div>
                      <button className="btn theme-btn w-100">Register Now</button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* login Area End*/}
        </main>
      );
}