import React from "react";
import "./App.css";
import pic from "./profile.png";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Person: {
        fullName: "maher lahdiri ",
        bio: " that's me",
        imgSrc: pic,
        profession: "Full-Stack js Dev ",
        date: new Date(),
      },
      show: true,
      counter: 0,
    };
  }
  componentDidMount() {
    this.setState({
      intervall: setInterval(() => {
        this.setState({ counter: this.state.counter + 1 });
      }, 1000),
    });
  }
  handleShowPerson = () => {
    this.setState({
      ...this.state,
      show: !this.state.show,
    });
  };

  componentWillUnmount() {}

  render() {
    return (
      <div className="profile-card">
        {this.state.show && (
          <>
            <div>
              <h1>{this.state.Person.fullName}</h1>
            </div>

            <div>
              <h1>{this.state.Person.bio}</h1>
            </div>
            <div>
              <h1>{this.state.Person.profession}</h1>
            </div>
            <img
              src={this.state.Person.imgSrc}
              style={{ borderRadius: "100%", width: "300px", height: "300px" }}
              alt="profile"
            ></img>
            <br></br>
          </>
        )}

        <button onClick={this.handleShowPerson}>click me</button>
        {this.state.counter}
      </div>
    );
  }
}

export default App;
