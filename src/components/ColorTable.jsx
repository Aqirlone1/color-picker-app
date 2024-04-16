import React from 'react';
import './ColorTable.css'

const ColorTable = ({ colors, searchedColor }) => {
  const hexToRgb = (hex) => {
    hex = hex.replace('#', '');

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  const hexToHsl = (hex) => {
    hex = hex.replace('#', '');

    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    const cMax = Math.max(normalizedR, normalizedG, normalizedB);
    const cMin = Math.min(normalizedR, normalizedG, normalizedB);
    const delta = cMax - cMin;

    let h = 0;
    let s = 0;
    let l = 0.5 * (cMax + cMin);

    if (delta !== 0) {
        if (cMax === normalizedR) {
            h = 60 * (((normalizedG - normalizedB) / delta) % 6);
        } else if (cMax === normalizedG) {
            h = 60 * (((normalizedB - normalizedR) / delta) + 2);
        } else {
            h = 60 * (((normalizedR - normalizedG) / delta) + 4);
        }

        if (h < 0) {
            h += 360;
        }

        s = Math.round(delta / (1 - Math.abs(2 * l - 1)))
    }
    h = Math.round(h)
    l = Math.round(l)
    return { h, s, l };
};

const convertToHex = (rgbArray) => {
  const rgbPattern = /^rgb\(\s*\d+\s*,\s*\d+\s*,\s*\d+\s*\)$/;
  const hexPattern = /^#(?:[0-9a-fA-F]{3}){1,2}$/
  if(hexPattern.test(rgbArray)) {
    return rgbArray
  } else if (rgbPattern.test(rgbArray)) {
    const rgbValues = rgbArray.match(/\d+/g).map(Number);
    return  rgbToHex(parseInt(rgbValues[0]), parseInt(rgbValues[1]), parseInt(rgbValues[2]))
  }
}

const rgbToHex = (r, g, b) => {
  return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
};

  return (
    <div>
      {searchedColor ? <p>Show results for {convertToHex(searchedColor)}</p> : <div style={{margin: '10px'}}> All colors </div>}
    <table className="color-table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Hex</th>
          <th>RGB</th>
          <th>HSL</th>
        </tr>
      </thead>
      <tbody>
        {colors.map(color => (
          <tr key={color.hex}>
            <td className='color-name'>
              <div className="color-box" style={{ backgroundColor: color.hex }}></div>
              {color.color}
            </td>
            <td>{color.hex}</td>
            <td>{`${hexToRgb(color.hex).r}, ${hexToRgb(color.hex).g}, ${hexToRgb(color.hex).b}`}</td>
            <td>{`${hexToHsl(color.hex).h}, ${hexToHsl(color.hex).s * 100}, ${hexToHsl(color.hex).l * 100}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
    </div>
  );
};

export default ColorTable;
