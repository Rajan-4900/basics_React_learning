import React from 'react'

const FormHandling = () => {
  return (
    <>
    <form>
    <div>
        Name :- <input type="text" placeholder='Enter Your Full Name' />
    </div>
    <br />
    <div>
        Email :- <input type="email" placeholder='Enter Your Email' />
    </div>
    <br />
    <div>
        Password :- <input type="password" placeholder='Enter Your Password' />
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