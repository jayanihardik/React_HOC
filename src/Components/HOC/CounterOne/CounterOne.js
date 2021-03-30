import React from 'react'
import Button from '@material-ui/core/Button';
import Hoc from '../../HOC'

const CounterOne = (props) => {
    return (
        <div>
            <h1>Counter One</h1>
            <div className="m-1">
                Counter : {props.counter}
            </div>
            <div className="mt-2">
                <Button variant="contained" className="counter-btn m-1" color="primary" onClick={props.handelIncrement} >
                    Increment
               </Button>
                <Button variant="contained" className="counter-btn m-1" color="secondary" onClick={props.handelDecrement} >
                    Decrement
               </Button>
            </div>
        </div>
    )
}

export default Hoc(CounterOne)
