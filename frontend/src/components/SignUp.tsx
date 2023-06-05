import { useState } from "react"

const SignUpPage = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    password2: ''
  })

  const { firstName, lastName, email, password, password2 } = formData

  const onChange = (e: { target: { name: any; value: any } }) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {

    console.log(firstName)
  }

  return (
    <form onSubmit={handleSubmit} className="signupForm">

      <input
        type='text'
        name='firstName'
        className="firstName"
        value={firstName}
        placeholder='First Name'
        onChange={onChange}
      />

      <input
        type='text'
        name='lastName'
        className="lastName"
        value={lastName}
        placeholder='Last Name'
        onChange={onChange}
      />

      <input
        type='email'
        name='email'
        className='email'
        value={email}
        placeholder='Email'
        onChange={onChange}
      />

      <input
        type='password'
        name='password'
        value={password}
        placeholder='Enter password'
        onChange={onChange}
      />


      <input
        type='password'
        name='password2'
        value={password2}
        placeholder='Confirm password'
        onChange={onChange}
      />

      <button type='submit'>
        Submit
      </button>

    </form>
  )
}

export default SignUpPage