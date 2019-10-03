import React, {useState, useEffect} from 'react'
import firebaseApp from '../../firebase'
import {Redirect} from 'react-router-dom'
import {Link} from 'react-router-dom'

export default function Login(props) {

    const [formData, setFormData] = useState({ email : '', password : ''})
    const {_onSignInWithFirebase, _errorMess, _loading, _user, history} = props
    const [isShowedError, setIsShowedError] = useState(true)
    const handleSubmit = (event) => {
        event.preventDefault()
        const {email, password} = formData
        _onSignInWithFirebase(email, password)
        setIsShowedError(true)
    }

    // const onEmailOnChange = (event) => {
    //     setFormData({...formData, email : event.target.value})
    // }

    // const onPasswordChange = (event) => {
    //     setFormData({...formData, password : event.target.value})
    // }

    // useEffect(()=>{
    //   if(_user) {
    //      const {location} = history 
    //      const {state} = location
    //      const {from} = state
    //      const {pathname} = from
    //      console.log(props)
    //      history.push(pathname)
    //   }
    // }, [_user])
  
    

    if(!_loading) {
      if(_errorMess.length !== 0 && isShowedError) {
        alert(_errorMess)
        setIsShowedError(false)
      }
    }
   
    const onChange = (event) => {
        const id = event.target.id
        setFormData({...formData, [id] : event.target.value})
    }

    // if(_user !== {} && _user !== undefined) {
    //   return (
    //     <Redirect to={{
    //       pathname : '/'
    //     }}/>
    //   )
    // } 

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
                      <li> <Link to='/'>
                            <a>Home</a>
                          </Link></li>
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