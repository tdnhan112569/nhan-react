import React, { useEffect, useState } from 'react'
import { Route, Redirect } from 'react-router-dom'
import {connect} from 'react-redux'
import firebase from 'firebase'

function PrivateRouter({component: Component, render, ...rest}) {
    // const [user, setUser] = useState()
    // useEffect(() => {
    //   firebase.auth().onAuthStateChanged((result) => {
    //     console.log(result, "result")
    //     setUser(result)
    //   });
    // }, [setUser])

    console.log(rest, "rest ne")
    const {user} = rest

    if (user === undefined) {
        return <p>'Loading....'</p>
    }

    const renderComponent = (props) => {
        if(user) {

            if(Component) {
                return <Component {...props} />
            }

            return render(props)
        }
        console.log("Truoc khi Redirect")
        return (
            <Redirect
                to={{
                pathname: "/login",
                state: { from: props.location }
                }}
            />)
  }
  return (
    <Route
      {...rest}
      render={renderComponent}
    />
  );

}

const mapStateToProps = (props) => {
    const {headerRed} = props
    const {user} = headerRed
    return {
        user :user
    }
}

export default  connect(mapStateToProps, undefined)(PrivateRouter)