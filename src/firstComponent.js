import React from "react";
export default class FirstComponent extends React.Component {
  //make state
  constructor(props) {
    super(props);
    this.state = {
      date: new Date(),
    };
  }
  componentDidMount() {
    // khi compoent đã được insert vào Dom
    console.log("component đã được insert vào dom");
    this.timeId = setInterval(() => this.tick(), 1000);
  }
  componentWillUnmount() {
    clearInterval(this.timeId);
  }
  tick() {
    this.setState({
      date: new Date(),
    });
  }
  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}.</h2>
        <h2>It is {this.timeId}.</h2>
      </div>
    );
  }
}
