
import {Component} from "react"




import {v4 as uuidv4} from "uuid"

import NavBar from "../NavBar"

import "./index.css"

import axios from "axios"


class Home extends Component{

    state={stars:0,name:"",email:"",userText:"",employType:"",listData:[]}

  






    userStar=(event)=>{
        this.setState({stars:event.target.value})
    }

    userName=(event)=>{
        this.setState({name:event.target.value})
    }

    userEmail=(event)=>{
        this.setState({email:event.target.value})
    }

    userText=(event)=>{
        this.setState({userText:event.target.value})
    }

    addUserData=async(event)=>{

        event.preventDefault()

        const{stars,name,email,userText,employType}=this.state
        const details={
            id:uuidv4(),
            name:name,
            email:email,
            userText:userText,
            stars:stars,
            employType:employType
        }

        this.setState(prevState=>({listData:[...prevState.listData,details]}))
        this.setState({name:"",email:"",userText:"",stars:""})


        try{
            await axios.post("http://localhost:8000",{
                details
            })
        }
        catch(e){
            console.log(e)
        }
    
    }

    addEmployeeType=(event)=>{
        console.log(event.target.value)
        this.setState({employType:event.target.value})
    }

    render(){
        const{name,email,listData,userText}=this.state
        console.log(listData)

        
        return(

            <div className="bgHome">
                <NavBar/>
                <div className="stars">
                <div>
                    <h1>Rate below from 1-5</h1>
                    <button  className="buttonStar" onClick={this.userStar} value="1" type="button">1</button>&nbsp;
                    <button  className="buttonStar" onClick={this.userStar} value="2" type="button">2</button>&nbsp;
                    <button  className="buttonStar" onClick={this.userStar} value="3" type="button">3</button>&nbsp;
                    <button  className="buttonStar" onClick={this.userStar} value="4" type="button">4</button>&nbsp;
                    <button  className="buttonStar" onClick={this.userStar} value="5" type="button">5</button>
                </div>
                </div>
                <div className="userDetails">


                    <form action="POST" onSubmit={this.addUserData}>
                    <input className="userInputName" value={name} onChange={this.userName} type="text" placeholder="Enter Your Name"/>
                    <br/>
                    <input className="userInputEmail" value={email} onChange={this.userEmail} type="email" placeholder="Enter Your Email"/>
                    <br/> 
                    <select onChange={this.addEmployeeType} className="options">
                        <option value="Student" >Student</option>
                        <option value="Graduate">Graduate</option>
                        <option value="Employee">Employee</option>
                        <option value="non-working">Non-working</option>
                    </select>
                    <br/>
                    <textarea className="userInputText" value={userText} onChange={this.userText} type="textarea" placeholder="Anything Do You Want Convey"/>
                    <br/>
                    <button type="submit" className="submit">Submit</button>
                </form>




                </div>
                <div className="styleForUserData">
                    {listData.map((each)=>(
                        <div className="userInputs" key={each.id}>
                            <h1 className="userName">name: {each.name}</h1>
                            <h1 className="userStars">stars: {each.stars}</h1>
                            <p className="userEmail">email: {each.email}</p>
                            <p className="employeeType">Employ type: {each.employType}</p>
                            <p className="userText">user text: {each.userText}</p>
                        </div>
                    ))}
                </div>
                
            </div>
        )
    }
}

export default Home