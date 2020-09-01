// import React, { Component } from "react";

// //cc
// //pretier expression
// class Counter extends Component {
//   render() {
//     return (
//       //Ctrl + D
//       <React.Fragment>
//         <h1>Hello bro</h1>
//         <button>Increment</button>
//       </React.Fragment>
//     );
//   }
// }

// export default Counter;

// //CTR+P   index.js

//embading expression

// import React, { Component } from "react";

// //cc
// //pretier expression
// class Counter extends Component {
//   state = {
//     count: 2,
//   };
//   render() {
//     return (
//       //Ctrl + D
//       <div>
//         <span>{this.formatCount()}</span>
//         {/* curly bracket doing dynamicly and put valid JS expression   */}
//         <button>Increment</button>
//       </div>
//     );
//   }

//   //   formatCount() {
//   //     return this.state.count === 0 ? "Zero bro " : this.state.count;
//   //   }

//   //will do object destructuring
//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero bro " : count;
//   }
// }

// export default Counter;

//27 setting atributes

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//     // imageUrl: "https://picsum.photos/200",
//   };

//   // style = {
//   //   fontSize: 10,
//   //   fontWeight: "bold",
//   // };

//   render() {
//     return (
//       <div>
//         {/* <img src={this.state.imageUrl} alt="" /> */}
//         {/* <span style={this.style} className="badge badge-primary m-2"> */}
//         <span style={{ fontSize: 30 }} className="badge badge-primary m-2">
//           {this.formatCount()}
//         </span>
//         {/* set attributes on span element  dynamicaly  */}
//         <button className="btn btn-secondary btn-sm">Increment</button>
//       </div>
//     );
//   }
//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero bro " : count;
//   }
// }

// export default Counter;

// // 28 Rendering classes dynymicly

// import React, { Component } from "react";

// class Counter extends Component {
//   state = {
//     count: 0,
//   };

//   render() {
//     // let classes = "badge m-2";
//     // classes +=(this.state.count ===0 ) ? "badge-warning":"badge-primary";

//     //  refactoring  ctrl+shift+R  two line and put name
//     // let classes = "badge m-2 badge-";
//     // classes += this.state.count === 0 ? "warning" : "primary";

//     let classes = this.getBadgeClasses();

//     return (
//       <div>
//         <span className={classes}>{this.formatCount()}</span>
//         <button className="btn btn-secondary btn-sm">Increment</button>
//       </div>
//     );
//   }
//   getBadgeClasses() {
//     let classes = "badge m-2 badge-";
//     classes += this.state.count === 0 ? "warning" : "primary";
//     return classes;
//   }

//   formatCount() {
//     const { count } = this.state;
//     return count === 0 ? "Zero bro " : count;
//   }
// }

// export default Counter;

// 28 Rendering Lists

import React, { Component } from "react";

class Counter extends Component {
  state = {
    count: 0,
    //map each element to react elememt
    tags: ["tag1", "tag22", "tag3 "],
  };

  render() {
    let classes = this.getBadgeClasses();

    return (
      <div>
        <span className={classes}>{this.formatCount()}</span>
        <button className="btn btn-secondary btn-sm">Increment</button>
        <ul>
          {/* dynamically  taking a string mapping a plain js object */}
          {this.state.tags.map((tag) => (
            <li key={tag}>{tag} </li>
          ))}
        </ul>
      </div>
    );
  }
  getBadgeClasses() {
    let classes = "badge m-2 badge-";
    classes += this.state.count === 0 ? "warning" : "primary";
    return classes;
  }

  formatCount() {
    const { count } = this.state;
    return count === 0 ? "Zero bro " : count;
  }
}

export default Counter;
