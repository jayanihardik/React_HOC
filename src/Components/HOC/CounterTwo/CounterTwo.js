import React from 'react'
import Button from '@material-ui/core/Button';
import Hoc from '../../HOC';

const CounterTwo = (props) => {
    return (
        <div>
            <h1>Counter Two</h1>
            <div className="m-1">
                Counter : {props.counter}
            </div>
            <div className="mt-2">
                <div className="mt-2">
                    <Button variant="contained" className="counter-btn m-1" color="primary" onClick={props.handelIncrement} >
                        Increment
                    </Button>
                    <Button variant="contained" className="counter-btn m-1" color="secondary" onClick={props.handelDecrement} >
                        Decrement
                   </Button>
                </div>
            </div>
        </div>
    )
}

export default Hoc(CounterTwo);
