import React, {useState} from 'react'

const FormHandling = () => {
    const [name, setname] = useState("");
    const [email, setemail] = useState("");
    const [password, setepassword] = useState("");

    // to stop the browser default reload option automaticaly
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name,email,password)
    }
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div>
                    Name :- <input onChange={(e)=>setname(e.target.value)} type="text" value={name} placeholder='Enter Your Full Name' />
                </div>
                <br />
                <div>
                    Email :- <input onChange={(e)=>setemail(e.target.value)} type="email" value={email} placeholder='Enter Your Email' />
                </div>
                <br />
                <div>
                    Password :- <input onChange={(e)=>setepassword(e.target.value)} type="password" value={password} placeholder='Enter Your Password' />
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