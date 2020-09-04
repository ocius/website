import React, { Component } from "react";
import PropTypes from "prop-types";
import _ from "lodash";

export default class VeritcalBar extends Component {
    constructor(props) {
        super(props);
        //
        this.state = {
            listBars: [],
            data: this.props.data
        };
        this.onClick = this.onClick.bind(this);
    }

    componentDidUpdate(prevProps, prevState) {
        if (!_.isEqual(this.props, prevProps)) {
            this.setState(state => ({
                ...state,
                listBars: this.getListBarWithOtherParameters(),
                data: this.props.data
            }));
        }
    }

    componentDidMount() {
        this.setState(state => ({
            ...state,
            listBars: this.getListBarWithOtherParameters(),
            data: this.props.data
        }));
    }

    /**
     * Calculate the height of each bar
     */
    calcHeightTotal() {
        let heightTotal = 0;
        this.props.data.forEach(bar => {
            heightTotal = heightTotal + bar.value;
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
        const listBars = this.props.data.map(bar => {
            position = position + barHeight;
            barHeight =
                (bar.value * 100) / heightTotal -
                (this.props.outlineHeight * 100) / bar.value / 100;
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
                        position: "relative",
                        float: "right",
                        height: `${bar.barHeight}%`,
                        fontSize: "90%",
                    }}
                    onClick={e => this.onClick(e, bar)}
                >
                    {showTextInsteadValue && bar.name}
                    {showTextInsteadValue && bar.name && showTextWithValue ? ": " : ""}
                    {(!showTextInsteadValue || showTextWithValue) &&
                        (bar.description || bar.value || "")}
                </div>
            );
        });
        return listText;
    }

    renderBars() {
        const listBars = [];
        const { showTextWithValue, showTextIn, showValueIn } = this.props;

        listBars.push(
            this.state.listBars.map((bar, index) => {
                return (
                    <g key={index} onClick={e => this.onClick(e, bar)}>
                        <rect
                            width={this.props.width}
                            height={`${bar.barHeight + 0.1}%`}
                            style={{
                                fill: bar.color || this.randomColor(),
                                strokeWidth: `${(this.props.outlineHeight * 100) /
                                    (bar.widthTotal / this.props.data.length)}%`,
                                stroke: this.props.outlineColor
                            }}
                            y={`${bar.position}%`}
                        />
                        {(this.props.showTextIn || this.props.showValueIn) && (
                            <text
                                style={{ fill: this.props.fontColor, fontSize: "90%" }}
                                x={
                                    this.props.outlineWidth > 0
                                        ? `${bar.position +
                                        (this.props.outlineWidth * 100) /
                                        (bar.widthTotal / this.props.data.length)}%`
                                        : `${bar.position + 1}%`
                                }
                                y="50%"
                                dy="0.35em"
                            >
                                {showTextIn && bar.name}
                                {bar.name && showTextIn ? ": " : ""}
                                {(showValueIn || showTextWithValue) &&
                                    (bar.description || bar.value || "1")}
                            </text>
                        )}
                        <title>{`${bar.name || ""}${
                            bar.name ? ": " : ""
                            }${bar.description || bar.value || "1"}`}</title>
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
                    textAlign: "left",
                    display: "flex",
                    height: "100%",
                    flexDirection: "column",
                    float: "left",
                    padding: "0px 5px"
                }}
            >
                {this.getListTextBar(showTextInsteadValue)}
            </div>
        );
    }

    render() {
        return (
            <React.Fragment>
                <svg id={this.props.id} width={this.props.width} height="100%">
                    {this.renderBars()}
                </svg>
                {this.renderLabel(this.props.showTextDown)}
            </React.Fragment>
        );
    }
}

VeritcalBar.propTypes = {
    data: PropTypes.array.isRequired,
    id: PropTypes.string,
    width: PropTypes.number,
    showTextWithValue: PropTypes.bool,
    showValueIn: PropTypes.bool,
    showValueUp: PropTypes.bool,
    showValueDown: PropTypes.bool,
    fontColor: PropTypes.string,
    onClick: PropTypes.func,
    outlineHeight: PropTypes.number,
    outlineColor: PropTypes.string
};

VeritcalBar.defaultProps = {
    width: 30,
    showTextWithValue: true,
    showValueIn: false,
    showValueUp: false,
    showValueDown: false,
    outlineHeight: 0,
    outlineColor: "black",
    fontColor: "white",
    id: "vsbar"
};