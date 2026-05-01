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
    }); // object created

    // onChange firing pr triggering to type in displayed input when project is running
    const changeHandler = (e) => {
        const {name, value} = e.target;

        // calling function ... -> spread operator
        setformData({...formData,[name]:value})
    }

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
                {/* Name :- <input,  calling the func,       identifying,types of i/p,value useState,      placehoder*/}
                <div>
                    Name :- <input onChange={changeHandler} name='name' type="text" value={formData.name} placeholder='Enter Your Full Name' />
                </div>
                <br />
                {/* <div>
                    Email :- <input onChange={(e)=>setemail(e.target.value)} type="email" value={email} placeholder='Enter Your Email' />
                </div>
                <br /> */}
                <div>
                    Email :- <input onChange={changeHandler} name='email' type="email" value={formData.email} placeholder='Enter Your Email' />
                </div>
                <br />
                {/* <div>
                    Password :- <input onChange={(e)=>setepassword(e.target.value)} type="password" value={password} placeholder='Enter Your Password' />
                </div> */}
                <div>
                    Password :- <input onChange={changeHandler} name='password' type="password" value={formData.password} placeholder='Enter Your Password' />
                </div>
                <br />
                <div>
                    Phone :- <input onChange={changeHandler} name='phone' type="phone" value={formData.phone} placeholder='Enter Your Phone number' />
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