import React, { useState } from 'react'
// import './form.css'

const Form = ({formData, setFormData}) => {

    const change = (e) =>{
        const { name , value} = e.target
        setFormData({...formData, [name]: value})
   }

    const click = (e) =>{
        e.preventDefault()
    }

    console.log(JSON.stringify(formData))
  return (
    <div className='main'>
        <div className="container">
            <form onSubmit={click}>
            <h1>Login to be a KKR</h1>
            <div className="ui">
                <div className="field1">
                    <label>Name:</label>
                    <input type="text"
                     name='name' 
                     placeholder='Enter your name' 
                     value={formData.name}
                     onChange={change} />
                </div>
                <div className="field2">
                    <label>E-mail:</label>
                    <input type="email"
                     name='email'
                      placeholder='Enter your e-mail'
                       value={formData.email}
                       onChange={change} />
                </div>
                <div className="field3">
                    <label>Password:</label>
                    <input type="password"
                     name='password' 
                     placeholder='Enter your password'
                      value={formData.password}
                      onChange={change} />
                </div>
                <div className="button">
                    <button>
                        Submit
                    </button>
                </div>
                <h1>{setFormData}</h1>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Form