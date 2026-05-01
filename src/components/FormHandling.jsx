import React, {useState} from 'react'

const FormHandling = () => {
    // this useState is used for few inut state, if we have large number of inout we can't use this type 
    // const [name, setname] = useState("");
    // const [email, setemail] = useState("");
    // const [password, setepassword] = useState("");

    // we can use this useState for large and n number of Input states
    const [formData, setformData] = useState({
        name: '',
        email: '',
        password: '',
        phone: ''
    }) // object created

    // to stop the browser default reload option automaticaly
    const onSubmitHandler = (e) => {
        e.preventDefault();
        // console.log(name,email,password)
    }
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                {/* this is for use only for few states */}
                {/* <div>
                    Name :- <input onChange={(e)=>setname(e.target.value)} type="text" value={name} placeholder='Enter Your Full Name' />
                </div> */}

                {/* this is for using n number of states */}
                <div>
                    Name :- <input name='name' type="text" value={formData.name} placeholder='Enter Your Full Name' />
                </div>
                <br />
                {/* <div>
                    Email :- <input onChange={(e)=>setemail(e.target.value)} type="email" value={email} placeholder='Enter Your Email' />
                </div>
                <br /> */}
                <div>
                    Email :- <input name='email' type="email" value={formData.email} placeholder='Enter Your Email' />
                </div>
                <br />
                {/* <div>
                    Password :- <input onChange={(e)=>setepassword(e.target.value)} type="password" value={password} placeholder='Enter Your Password' />
                </div> */}
                <div>
                    Password :- <input name='password' type="password" value={formData.password} placeholder='Enter Your Password' />
                </div>
                <br />
                <div>
                    Phone :- <input name='phone' type="phone" value={formData.phone} placeholder='Enter Your Phone number' />
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