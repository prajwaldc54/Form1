import React, { useState } from 'react'
import Basic from '../display/basic'
import Form from '../display/form'
import './index.css'


const Home = () => {
    const [kun, setKun] = useState(false)
       
    const initial = {name: "", email: "", password: "" }
    const [form, setForm] = useState(initial)
  return (
    <div>
        <button onClick={() => setKun(!kun)}>Add</button>
        {
            kun ? <Form formData= {form} setFormData = {setForm} /> : <Basic/>
        }
    </div>
  )
}

export default Home