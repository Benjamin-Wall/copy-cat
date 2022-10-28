import React from 'react';
import { CopyCat } from '../../Components/CopyCat/CopyCat';

export class CopyCatContainer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      copying: true,
      input: '',
      name: '',
    };

    this.toggleTape = this.toggleTape.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  toggleTape() {
    this.setState({ copying: !this.state.copying });
  }

  handleChange(e) {
    this.setState({ input: e.target.value });
  }

  render() {
    return (
      <div>
        <CopyCat
          copying={this.state.copying}
          toggleTape={this.toggleTape}
          input={this.state.input}
          handleChange={this.handleChange}
          name={this.state.name}
        />
      </div>
    );
  }
}
