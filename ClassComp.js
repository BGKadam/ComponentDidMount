import { React, Component } from 'react';
//import SubClass from './SubClass';

class ClassComp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            login: false
        }
    }

    render() {
        console.log('ClassComp');
        if (this.state.login) {
            return <p>Welcome</p>
        }
        else {
            
            return <p>please Login</p>
        }

    }
}

export default ClassComp



//class ClassComp extends Component {
//  constructor() {
//    super();
//  this.state = {
//    planet: "Earth",
//  count: 0
//};
// }

//handleClick = () => {   //ise  as a constructor bhi bol sakte hai jo ki class comp me bhi use kr sakte hai
//  console.log("click")
//  this.setState({ count: this.state.count + 1 })
// }


//     stylepro = {
//         color: "red",
//         fontsize: "30px"
//     }

//     render() {
//         return (
//             <>
//                 <h1 style={this.stylepro}>{this.state.planet}</h1>
//                 <p style={this.stylepro}>count:{this.state.count}</p>
//                 <button onClick={() => this.setState({ count: this.state.count + 1 })}>click</button>
//             </>
//         )
//     }
// }

// export default ClassComp;
