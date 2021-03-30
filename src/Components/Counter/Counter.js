import React from 'react'

import CounterOne from '../HOC/CounterOne'
import CounterTwo from '../HOC/CounterTwo'
import CounterThree from '../HOC/CounterThree'

const Counter = () => {
    return (
        <>
            <div>
                <h1>Higher order component</h1>
            </div>
            <div className="d-flex">
                <div className="margin-10 pl-5">
                    <CounterOne />
                </div>
                <div className="margin-10 pl-5">
                    <CounterTwo />
                </div>
                <div className="margin-10 pl-5">
                    <CounterThree />
                </div>
            </div>
        </>
    )
}
export default Counter