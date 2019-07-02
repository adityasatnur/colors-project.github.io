import React, { Component } from "react";
import "./ColorBox.css";
class ColorBox extends Component {
  state = {};
  render() {
    const { name, background } = this.props;
    return (
      <div className="ColorBox" style={{ background }}>
        <div className="copy-container">
          <div className="box-content">
            <span>{name}</span>
          </div>
          <button className="copy-button">Copy</button>
        </div>
        <span className="see-more">MORE</span>
      </div>
    );
  }
}

export default ColorBox;