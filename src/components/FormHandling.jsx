import React from 'react'

const FormHandling = () => {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const [password, setepassword] = useState("")
    return (
        <>
            <form>
                <div>
                    Name :- <input onChange={(name)=>setname(name.target.value)} type="text" value={name} placeholder='Enter Your Full Name' />
                </div>
                <br />
                <div>
                    Email :- <input onChange={(email)=>setemail(email.target.value)} type="email" value={email} placeholder='Enter Your Email' />
                </div>
                <br />
                <div>
                    Password :- <input onChange={(pass)=>setepassword(pass.target.value)} type="password" value={password} placeholder='Enter Your Password' />
                </div>
                <br />
                <div>
                    <input type="submit" value="submit" />
                </div>
            </form>
        </>
    )
}

export default FormHandling