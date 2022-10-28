import React from 'react';
import './CopyCat.css';
import { Styles } from '../../Styles/Styles';
import PropTypes from 'prop-types';

const images = {
  copycat: 'https://content.codecademy.com/courses/React/react_photo_copycat.png',
  quietcat: 'https://content.codecademy.com/courses/React/react_photo_quietcat.png',
};

export class CopyCat extends React.Component {
  render() {
    return (
      <div style={Styles.divStyles}>
        <h1 style={{ marginBottom: 80 }}>
          Copy Cat {this.props.name || 'Tom'} {this.props.name ? this.props.name : null}
        </h1>
        <input
          type="text"
          value={this.props.input}
          onChange={this.props.handleChange}
        />
        <img
          alt="cat"
          src={this.props.copying ? images.copycat : images.quietcat}
          onClick={this.props.toggleTape}
          style={Styles.imgStyles}
        />
        <p>{this.props.copying && this.props.input}</p>
      </div>
    );
  }
}

CopyCat.propTypes = {
  input: PropTypes.string.isRequired,
  handleChange: PropTypes.func.isRequired,
  copying: PropTypes.bool.isRequired,
  toggleTape: PropTypes.func.isRequired,
  name: PropTypes.string,
};
