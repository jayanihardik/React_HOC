import React from 'react'

const Hoc = (Component) => {

    const NewComponent = () => {
        const [counter, setCount] = useState(0)

        const handelIncrement = () => {
            setCount(counter + 1)
        }

        const handelDecrement = () => {
            if (counter > 0) {
                setCount(counter - 1)
            }
        }

        return <Component counter={counter} handelIncrement={handelIncrement} handelDecrement={handelDecrement} />

    }
    return NewComponent;
}

export default Hoc;


// const Hoc = (Component) => {
//     return class extends React.Component {
//         constructor() {
//             super()
//             this.state = {
//                 counter: 0
//             }
//         }

//         handelIncrement = () => {
//             this.setState({
//                 counter: this.state.counter + 1
//             })
//         }

//         handelDecrement = () => {
//             if (this.state.counter > 0) {
//                 this.setState({
//                     counter: this.state.counter - 1
//                 })
//             }
//         }

//         render() {
//             return <div className="d-flex">
//                 <Component counter={this.state.counter} handelIncrement={this.handelIncrement} handelDecrement={this.handelDecrement} />
//             </div>
//         }
//     }
// }
// export default Hoc;