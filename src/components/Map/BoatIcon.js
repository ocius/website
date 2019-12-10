import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { renderToStaticMarkup } from 'react-dom/server';

export const getColorVariation = index => {
  const colorVariations = [
    ['#35b5e5', 'red'],
    ['#35b5e5', '#ff00e7'],
    ['#ff0000', '#2f292d'],
    ['#ff8000', '#2f292d'],
    ['#35b5e5', '#fcff00'],
    ['#35b5e5', '#00f200'],
    ['#35b5e5', '#ff8600'],
    ['#35b5e5', '#ffffff']
  ];

  // Make boat number based on index
  const boatNumber = Math.round(index % 8);
  return colorVariations[boatNumber];
};

export const Boat = ({ className, height, width, viewBox, rotation, colorPallete }) => {
  return (
    <svg
      className={classNames('BoatIcon', className)}
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      width={width}
      height={height}
      viewBox={viewBox}
      preserveAspectRatio="xMidYMid meet"
    >
      <g transform={`rotate(${rotation}, 350, 350)`}>
        <path
          d="M220 691c-1-9 3-509 4-552 1-23 5-35 12-32 6 2 15-8 18-23 4-16 16-34 27-42 21-14 27-38 7-26-7 4-10 3-5-1 4-5 23-10 43-12 26-3 43 2 63 20 15 12 26 28 23 35-3 10 7 15 28 14 3 0 6 23 8 51 1 28 6 54 12 57 5 3 10 110 12 257 2 138-1 249-5 246s-14 0-22 7c-14 12-225 12-225 1z"
          fill="#100310"
        />
        <path
          d="M246 671c-17-19-17-21 5-50 21-29 27-31 87-31 57 0 68 3 88 26 28 30 29 37 8 58-11 12-36 16-93 16-64 0-81-3-95-19zm-1-286c1-208 2-223 24-273 13-29 36-62 50-73l26-21 36 41c26 29 40 57 49 98 17 80 26 443 11 443-8 0-11-45-11-149 0-144-1-151-22-165-27-19-93-21-128-3-25 12-25 15-31 167-5 141-6 135-4-65zm122-201c3-8-1-22-9-30-13-14-17-14-31 1-9 8-14 22-11 30 8 20 43 19 51-1zm-32-4c-3-5-1-10 4-10 6 0 11 5 11 10 0 6-2 10-4 10-3 0-8-4-11-10zm-65 292c0-124-1-122 80-122 64 0 72 14 68 133l-3 92-145 6V472zm2-149c8-41 128-41 136 1 3 15 0 17-20 10-12-5-34-8-48-8s-36 3-48 8c-20 7-23 5-20-11z"
          fill="#085f61"
        />
        <g fill={colorPallete[1]}>
          <use xlinkHref="#B" />
          <use xlinkHref="#C" />
          <path d="M270 472c0-124-1-122 80-122 64 0 72 14 68 133l-3 92-145 6V472z" />
        </g>
        <g fill={colorPallete[0]}>
          <use xlinkHref="#B" />
          <use xlinkHref="#C" />
        </g>
        <defs>
          <path
            id="B"
            d="M245 668c-13-19-13-25-2-33 7-5 16-18 20-27 5-15 19-18 73-18 59 0 70 3 90 26 28 30 29 37 8 58-11 12-36 16-94 16-70 0-81-2-95-22z"
          />
          <path
            id="C"
            d="M244 385l1-220 30-59c34-68 56-87 83-70 29 18 60 72 72 127 17 74 26 437 11 437-8 0-11-44-11-149 0-144-1-151-22-165-27-19-93-21-128-3-25 12-25 15-31 167-5 144-6 139-5-65zm123-201c3-8-1-22-9-30-19-19-52 3-42 29 8 21 43 22 51 1z"
          />
        </defs>
      </g>
    </svg>
  );
};

Boat.propTypes = {
  viewBox: PropTypes.string,
  rotation: PropTypes.number,
  className: PropTypes.string,
  width: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  height: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
};

Boat.defaultProps = {
  viewBox: '0 0 700 700',
  rotation: 0,
  className: '',
  width: 70,
  height: 70
};

export const inlineSvgBoatIcon = (index, rotation, colorPallete) => {
  const svgToDataURL = svgStr => {
    const encoded = encodeURIComponent(svgStr)
      .replace(/'/g, '%27')
      .replace(/"/g, '%22');

    const header = 'data:image/svg+xml,';
    return header + encoded;
  };

  const svgString = renderToStaticMarkup(
    <Boat rotation={parseFloat(rotation)} colorPallete={colorPallete} />
  );
  const encodedSvg = svgToDataURL(svgString);

  return { url: encodedSvg, scaledSize: { width: 38, height: 38 }, labelOrigin: { x: 16, y: -10 } };
};
