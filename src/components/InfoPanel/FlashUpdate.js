import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.span`
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0);
  transition: background 1s;
  &.highlight {
    background: #9deeb2;
    transition: background 0.25s;
  }
`;

// Changes the background to green for a short amount of time when this 
// class is updated by a parent class. 
class FlashUpdate extends React.Component {
  constructor(props) {
    super(props);
    this.state = { upToDate: true, lastUpdated: props.lastUpdated };
    this.timer = null;
  }

  // Always update after pulling from the drone collection url
  // regardless of whether props have changed or not
  static shouldComponentUpdate() {
    return true;
  }

  // Removes the background 1s after being updated by the parent
  componentDidUpdate() {
    // start timer only if prop data was updated
    if (this.upToDate) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ upToDate: false });
    }, 1000);
  }


  // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
  // state is completely controlled data, upToDate and lastUpdated is derived from props
  static getDerivedStateFromProps(props, state) {
    // this class is "upToDate" only when props are changed by the parent
    return {
      upToDate: state.lastUpdated !== props.lastUpdated,
      lastUpdated: props.lastUpdated,
    };
  }

  render() {
    return this.state.upToDate ? (
      <Wrapper className="highlight">{this.props.children}</Wrapper>
    ) : (
      <Wrapper>{this.props.children}</Wrapper>
    );
  }
}

export default FlashUpdate;
