import React, { Component, createRef } from "react";

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.name = createRef();
    this.email = createRef();
  }

  handleSubmit = () => {
    alert(this.name.current.value);
  };
  componentDidMount() {
    // setState()
  }

  shouldComponentUpdate() {
    //condition
  }

  //   getSnapshotBeforeUpdate(){
  //   }

  componentDidUpdate() {
    //api
  }

  //Unmounting
  componentWillUnmount() {
    //
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>Name</label>
        <input type="text" ref={this.name} />
        <br />
        <label>Email</label>
        <input type="email" ref={this.email} />
        <br />
        <input type="submit" />
      </form>
    );
  }
}

export default SignUp;

//import React, { useRef } from "react"; //Uncontrolled Component

// const SignUp = () => {
//   const name = useRef("");
//   const email = useRef("");
//   const phone = useRef("");
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log(
//       "Handle Submit Called",
//       name.current.value,
//       email.current.value,
//       phone.current.value
//     );
//   };
//   return (
//     <form onSubmit={handleSubmit}>
//       <label>Name</label>
//       <input type="text" ref={name} />
//       <br />
//       <label>Email</label>
//       <input type="email" ref={email} />
//       <br />
//       <label>Phone</label>
//       <input type="number" ref={phone} />
//       <br />
//       <input type="submit" />
//     </form>
//   );
// };

// export default SignUp;
