import React from 'react'

const Items = () => {
    const age = 20;
    return (
        <div>
            {
                (age >= 18) ? (
                    <>
                        <h1>You Are Eligible to vote</h1>
                    </>
                ) : (
                    <>
                        <h1>You Are Not Eligible to vote</h1>
                    </>
                )
            }
        </div>
    )
}

export default Items