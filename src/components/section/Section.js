import { Component } from 'react';
import PropTypes from 'prop-types';

class Section extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <>
        <div className='title'>{this.props.title}</div>
        {this.props.children}
      </>
    );
  }
}

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};