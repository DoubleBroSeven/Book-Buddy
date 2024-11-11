import { useState } from "react";

const SignIn = () => {
  
  const [signinEmail, setSignInEmail] = useState("")
  const [signinPassword, setSignInPassword]= useState("")
  
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login', {
      method: "POST",
      headers: {
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        email: signinEmail ,
        password: signinPassword
      })
    })
    const result = await response.json()
    console.log(result)
  }
  
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        value={signinEmail}
        onChange={(event)=>{setSignInEmail(event.target.value)}}
        placeholder="Log In Email" />
      <input type="text"
        value={signinPassword}
        onChange={(event)=>{setSignInPassword(event.target.value)}}
        placeholder="Password" />
      <button>Log In!</button>
    </form>
  )
}

export default SignIn