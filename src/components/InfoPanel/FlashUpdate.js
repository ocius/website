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

// Changes the background of the contained component when
// a different string is passed to lastUpdated (Date.now()
// makes the most sense with time dependent data)
class FlashUpdate extends React.Component {
  constructor(props) {
    super(props);
    // https://reactjs.org/blog/2018/06/07/you-probably-dont-need-derived-state.html
    // state is completely controlled data, upToDate is derived from props
    this.state = { upToDate: true, lastUpdated: props.lastUpdated };
    this.timer = null;
  }

  // Always update after pulling from the drone collection url
  // regardless if prop data is new or not
  static shouldComponentUpdate() {
    return true;
  }

  // 2s after every update, disable the highlight
  componentDidUpdate() {
    // start timer only if data was updated
    if (this.upToDate) return;
    clearTimeout(this.timer);
    this.timer = setTimeout(() => {
      this.setState({ upToDate: false });
    }, 1000);
  }

  // if the timestamp of the data has not changed, then the update
  // was triggered by removing the highlight
  static getDerivedStateFromProps(props, state) {
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
