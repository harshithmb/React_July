import React, { Component } from "react";
//Module css
import styles from "./Banner.module.css";

class Banner extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "USER",
    };
    //console.log("First Call - Constructor");
  }

  updateUser = () => {
    this.setState({ name: "NEW" }); // 30ms
  };

  componentDidMount() {
    // console.log("Third Call componentDidMount");
  }

  render() {
    //console.log("Second Call - Render");
    return (
      <div className="jumbotron p-4">
        <h1 className={`display-4 ${styles.lead}`}>
          Hello, world! {this.state.name}
        </h1>
        <p className="lead">
          This is a simple hero unit, a simple jumbotron-style component for
          calling extra attention to featured con
        </p>
        <hr className="my-4" />
        <p>
          It uses utility classes for typography and spacing to space content
          out within the larger container.
        </p>
        <p className="lead">
          <a
            onClick={this.updateUser}
            className="btn btn-primary btn-lg"
            href="#"
            role="button"
          >
            Change User
          </a>
        </p>
      </div>
    );
  }
}
// const Banner = () => {
//   return (
//     <div className="jumbotron p-4">
//       <h1 className={`display-4 ${styles.lead}`}>Hello, world!</h1>
//       <p className="lead">
//         This is a simple hero unit, a simple jumbotron-style component for
//         calling extra attention to featured con
//       </p>
//       <hr className="my-4" />
//       <p>
//         It uses utility classes for typography and spacing to space content out
//         within the larger container.
//       </p>
//       <p className="lead">
//         <a className="btn btn-primary btn-lg" href="#" role="button">
//           Learn more
//         </a>
//       </p>
//     </div>
//   );
// };

export default Banner;
