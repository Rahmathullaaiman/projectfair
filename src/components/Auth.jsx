import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import {  Form } from 'react-bootstrap'
import { LoginAPI, registerAPI } from '../services/allAPI'

function Auth({ Register }) {
    const[userdata,Setuserdata] = useState({
        username:"",
        email:"",
        password:""
    })
    const navigate = useNavigate()

    const regform = Register ? true : false
    console.log(userdata);
    const handleregister = async(e)=>{
        e.preventDefault()
        const{username,email,password}=userdata
        if(!username|| !email|| !password){
            alert("please fill the form completely ")
        }
        else{
            const result = await registerAPI(userdata)
            console.log(result.data); 
            if(result.status===200){
                alert(`${result.data.username} is successfully registered`)
                Setuserdata({

                    username:"",
                    email:"",
                    password:""

                })
                navigate('/login')
            }
            else{
                alert(result.response.data)
            }
        }
    }

    //function to login
    const handlelogin = async (e)=>{
        e.preventDefault()
        const{email,password}=userdata
        if( !email || !password){
            alert('please fill the form completely')
        }
        else{
            //api call
            const result = await LoginAPI(userdata)
            console.log(result); 
            if(result.status===200){
                //alert
                alert('login successfull')
                //store data
                sessionStorage.setItem('existuser',JSON.stringify(result.data. existuser))
                sessionStorage.setItem('token',result.data.token)


                 //field blank
                 Setuserdata({
                    
                    email:"",
                    password:""

                 })
                
                //navigate
                navigate('/')
               
            }
            else{
                alert(result.response.data)
            }

           
        }
    }



    return (
        <div style={{ width: "100%", height: "100vh" }} className='d-flex justify-content-center align-items-center'>
            <div className='w-75 container'>
                <Link className='fs-2' style={{ color: "blue" }} to={'/'}><i class="fa-solid fa-arrow-left ms-2"></i>
                    Back to home

                </Link>
                <div className='card bg-success p-5 rounded'>
                    <div className='row align-items-center'>
                        <div className='col-lg-6'>
                            <img className='rounded' src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" alt="" width={'100%'} />

                        </div>
                        <div className='col-lg-6 p-5'>
                            <div className='d-flex align-items-center justify-content-center flex-column'>
                                <h1 style={{ color: "white" }}><i class="fa-brands fa-stack-overflow fa-2x"></i>Project Fair</h1>
                                <h5 className='text-light ms-5 mt-4'>
                                    {
                                        regform ? "Sign up to your account" : "Sign in to your Account"
                                    }
                                </h5>
                                <Form className='mt-5 w-100'>
                                    {regform &&
                                        <Form.Group className="mb-3" controlId="formBasicEmail">
                                            <Form.Control type="text" placeholder="Enter username" value={userdata.username}onChange={(e)=>Setuserdata({...userdata,username:e.target.value})} />

                                        </Form.Group>
                                    }
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="Enter email" value={userdata.email}onChange={(e)=>Setuserdata({...userdata,email:e.target.value})} />

                                    </Form.Group>
                                    <Form.Group className="mb-3" controlId="formBasicEmail">
                                        <Form.Control type="password" placeholder="Enter Password" value={userdata.password}onChange={(e)=>Setuserdata({...userdata,password:e.target.value})} />

                                    </Form.Group>
                                    {regform ?
                                        <div className='mt-5'>
                                            <button onClick={handleregister} className='btn btn-warning'>Register</button>
                                            <p>Already a user?Click here to <Link to={'/Login'}>Login</Link>login</p>

                                        </div> :
                                        <div className=''>
                                            <button onClick={handlelogin} className='btn btn-warning'>Login</button>
                                            <p>New User a user?Click here to <Link to={'/Register'}>Register</Link>login</p>

                                        </div>
                                    }



                                </Form>

                            </div>
                        </div>

                    </div>
                </div>

            </div>

        </div>
    )
}

export default Auth