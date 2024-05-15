import {Component} from "react"

import { withRouter } from "react-router-dom/cjs/react-router-dom.min"

import Cookies  from "js-cookie"

import "./index.css"

class NavBar extends Component{


    removingCookieOfUser=()=>{
        const{history} =this.props 
        Cookies.remove("jwt_token")
        history.replace("/login")

    }

    render(){


        return(

            <div className="navBarBg">
                <div>
                    <img className="navBarImage" src="https://img.freepik.com/free-vector/customer-feedback-management-flat-vector-illustration-cartoon-happy-tiny-people-voting-giving-review-company-service-crm-advices-assessment-concept_74855-9834.jpg?w=1060&t=st=1714202753~exp=1714203353~hmac=8134730fadb5bad2aaa2809c57045777d1e8cc378998f3bec96c3a588542e630"
                  alt="not-found"/>
                </div>
                <div>
                    <button className="logOutButton" onClick={this.removingCookieOfUser} type="button">Logout</button>
                </div>
            </div>
        )
    }
}

export default withRouter(NavBar)