import React, { Component } from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';

export default class VeritcalBar extends Component {
  constructor(props) {
    super(props);
    //
    this.state = {
      listBars: [],
      data: this.props.data,
    };
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.setState((state) => ({
      ...state,
      listBars: this.getListBarWithOtherParameters(),
      data: this.props.data,
    }));
  }

  componentDidUpdate(prevProps, prevState) {
    if (!_.isEqual(this.props, prevProps)) {
      this.setState((state) => ({
        ...state,
        listBars: this.getListBarWithOtherParameters(),
        data: this.props.data,
      }));
    }
  }


  /**
   * Calculate the height of each bar
   */
  calcHeightTotal() {
    let heightTotal = 0;
    this.props.data.forEach((bar) => {
      heightTotal += bar.value;
    });
    return heightTotal;
  }

  /**
   * Returns the same list of bars with position and barHeight
   */
  getListBarWithOtherParameters() {
    const heightTotal = this.calcHeightTotal();
    let position = (this.props.outlineHeight * 2) / 100;
    let barHeight = 0;
    const listBars = this.props.data.map((bar) => {
      position += barHeight;
      barHeight =
        (bar.value * 100) / heightTotal - (this.props.outlineHeight * 100) / bar.value / 100;
      bar = Object.assign(
        { position: position, barHeight: barHeight, heightTotal: heightTotal },
        bar
      );
      return bar;
    });
    return listBars;
  }

  /**
   * OnClick Event
   */
  onClick(evt, bar) {
    Object.assign(evt, { bar: bar });
    if (this.props.onClick) {
      this.props.onClick(evt);
    }
  }

  /**
   * Returns a new calculated rgb color
   */
  randomColor() {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);

    return `rgb(${r}, ${g}, ${b})`;
  }

  /**
   * Returns a list of texts of the bars into a div component
   */
  getListTextBar(showTextInsteadValue) {
    const { showTextWithValue } = this.props;
    const listText = this.state.listBars.map((bar, index) => {
      return (
        <div
          key={index}
          style={{
            position: 'relative',
            height: `${bar.barHeight}%`,
            fontSize: '90%',
          }}
          onClick={(e) => this.onClick(e, bar)}
        >
          {showTextInsteadValue && bar.name}
          {showTextInsteadValue && bar.name && showTextWithValue ? ': ' : ''}
          {(!showTextInsteadValue || showTextWithValue) && (bar.description || bar.value || '')}
        </div>
      );
    });
    return listText;
  }

  renderBars() {
    const listBars = [];

    listBars.push(
      this.state.listBars.map((bar, index) => {
        return (
          <g key={index} onClick={(e) => this.onClick(e, bar)}>
            <rect
              width={this.props.width}
              height={`${bar.barHeight + 0.1}%`}
              style={{
                fill: bar.color || this.randomColor(),
                strokeWidth: `${
                  (this.props.outlineHeight * 100) / (bar.widthTotal / this.props.data.length)
                }%`,
                stroke: this.props.outlineColor,
              }}
              y={`${bar.position}%`}
            />
          </g>
        );
      })
    );
    return listBars;
  }

  /**
   * Always renders label on the left of the bar
   */
  renderLabel(showTextInsteadValue) {
    return (
      <div
        id={`${this.props.id}_text`}
        style={{
          textAlign: 'left',
          display: 'flex',
          height: '100%',
          flexDirection: 'column',
          float: 'left',
          padding: '0px 5px',
        }}
      >
        {this.getListTextBar(showTextInsteadValue)}
      </div>
    );
  }

  render() {
    return (
      <>
        <svg id={this.props.id} width={this.props.width} height="100%">
          {this.renderBars()}
        </svg>
        {this.renderLabel(this.props.showTextDown)}
      </>
    );
  }
}

VeritcalBar.propTypes = {
  data: PropTypes.array.isRequired,
  width: PropTypes.number,
  showTextWithValue: true,
  fontColor: PropTypes.string,
  onClick: PropTypes.func,
  outlineHeight: PropTypes.number,
  outlineColor: PropTypes.string,
  id: PropTypes.string,
};

VeritcalBar.defaultProps = {
  width: 30,
  showTextWithValue: true,
  outlineHeight: 0,
  outlineColor: 'black',
  fontColor: 'white',
  id: 'vsbar',
};
