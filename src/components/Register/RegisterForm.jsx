import React, {useState} from 'react'
import './RegisterForm.css'

export default function RegisterForm() {

    const [formData, setFormData] = useState({ username : '', email : '' ,password : ''})

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(formData)
    }

    const onChange = (event) => {
        const id = event.target.id
        setFormData({...formData, [id] : event.target.value})
    }

    //console.log(formData)

    return (
        <main>
          {/* breadcrumb-area-start */}
          <section className="breadcrumb-area" style={{backgroundImage: 'url("./assets/page-title.png")'}}>
            <div className="container">
              <div className="row">
                <div className="col-xl-12">
                  <div className="breadcrumb-text text-center">
                    <h1>Register</h1>
                    <ul className="breadcrumb-menu">
                      <li><a href="index.html">home</a></li>                      
                      <li><span>Register</span></li>
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
                    <h3 className="text-center mb-60">Signup From Here</h3>
                    <form action="#" onSubmit={handleSubmit}>
                      <label htmlFor="name">Username <span>**</span></label>
                      <input id="username" type="text" placeholder="Enter Username..." onChange={onChange}/>
                      <label htmlFor="email-id">Email Address <span>**</span></label>
                      <input id="email" type="text" placeholder="Enter Email address..." onChange={onChange}/>
                      <label htmlFor="pass">Password <span>**</span></label>
                      <input id="password" type="password" placeholder="Enter password..." onChange={onChange}/>
                      <div className="mt-10" />
                      <button type='submit' className="btn theme-btn-2 w-100">Register Now</button>
                      <div className="or-divide"><span>or</span></div>
                      <button className="btn theme-btn w-100">login Now</button>
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