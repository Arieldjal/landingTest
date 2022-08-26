import React from "react";
import Background from "./bg.jpg";

class LandingPage extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      //ListHere
      label: this.props.miPrimerProps,
    };
  }

  render() {
    return <img src={Background} alt="Background" />;
  }
}

export default LandingPage;
