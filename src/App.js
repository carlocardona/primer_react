import React, { Component } from "react";

const count = 4;

function isEven() {
  return count % 2 === 0 ? "Even" : "Odd";
}

export default class App extends Component {
  render = () =>
    <h4 className="bg-primary text-white text-center p-2 m-1"> Number of Things: {isEven()}</h4>
}