import { useState } from "react"

const RegisterUser = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName]= useState("")
  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const [userToken, setUserToken] = useState("")
  const handleSubmit = async (event) => {
    event.preventDefault();
    const response = await fetch('https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register', {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        firstname: firstName ,
        lastname: lastName,
        email: userEmail,
        password: userPassword,
      })
    })
    const result = await response.json()
    setUserToken(result.token)
    console.log(userToken)
    }
  return (

    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={firstName}
        onChange={(event)=>{setFirstName(event.target.value)}}
        placeholder="First Name" />
      <input
        type="text"
        value={lastName}
        onChange={(event)=>{setLastName(event.target.value)}}
        placeholder="Last Name"/>
      <input
        type="email"
        value={userEmail}
        onChange={(event)=>{setUserEmail(event.target.value)}}
        placeholder="Register Your Email!" />
      <input
        type="text"
        value={userPassword}
        onChange={(event)=>{setUserPassword(event.target.value)}}
        placeholder="Register Password!" />
      <button>Submit!</button>
    </form>
  )
}
export default RegisterUser