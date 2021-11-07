import {React, useEffect, useState} from 'react'

export function Counter({msg, count, setCount, setMsg}) {

    const message = "Atlas is eating "
    const plural = " apples"
    const singular = " apple"
    let initialState = ""

    useEffect(() => {
        setMsg(message)
    }, [msg])

    function handleClick() {
        if (count === 1) setMsg(message + count + singular)
        else setMsg(message + count + plural)
    }


    return (
        <span>
            <h1>{msg}</h1>
            <div>
                <h1>How many apples?</h1>
                <input onChange={e => {setCount(e.target.value); console.log(typeof count)}}
                       type="number" value={count}/>
                {/*<button onClick={handleClick}>submit</button>*/}
                <p>{msg}{count} apple{+count === 1 ? "" : "s"}</p>
            </div>
        </span>
    )
}

