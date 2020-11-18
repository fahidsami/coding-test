import React, { Component } from 'react';

/**
 * Component that alerts if you click outside of it
 */
class OutsideAlerter extends Component {
  constructor(props) {
    super(props);

    this.setWrapperRef = this.setWrapperRef.bind(this);
    this.handleClickOutside = this.handleClickOutside.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClickOutside);
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClickOutside);
  }

  /**
   * Set the wrapper ref
   */
  setWrapperRef(node) {
    this.wrapperRef = node;
  }

  /**
   * Alert if clicked on outside of element
   */
  handleClickOutside(event) {
    if(!this.node.contains(event.target) && event.target.id !== this.props.excludeDivId)
        this.props.outsideClickEvent()
  }

  render() {
    return <div ref={node => this.node = node}>{this.props.children}</div>;
  }
}

export default OutsideAlerter;
