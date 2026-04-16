import React from 'react'

const Items = () => {
    const age = 20;
    const adhar = false;
    const gmail = true;
    return (
        <>
            <div>
                {/* {age >= 18 ? (
                    <>
                    <h1>You Are Eligible to vote</h1>
                    </>
                    ) : (
                        <>
                        <h1>You Are Not Eligible to vote</h1>
                        </>
                        )
                        } */}
            </div>

            {adhar && <h1>You can Open Bank Account</h1>}
            {gmail && <h1>You can make YouTube Channel</h1>}
        </>
    )
}

export default Items