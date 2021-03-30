import React from 'react'

const Hoc = (Component) => {
    return class extends React.Component {
        constructor() {
            super()
            this.state = {
                counter: 0
            }
        }

        handelIncrement = () => {
            this.setState({
                counter: this.state.counter + 1
            })
        }

        handelDecrement = () => {
            if (this.state.counter > 0) {
                this.setState({
                    counter: this.state.counter - 1
                })
            }
        }

        render() {
            return <div className="d-flex">
                <Component counter={this.state.counter} handelIncrement={this.handelIncrement} handelDecrement={this.handelDecrement} />
            </div>
        }
    }
}
export default Hoc;


