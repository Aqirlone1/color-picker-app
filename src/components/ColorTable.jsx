import React from 'react';
import './ColorTable.css'

const ColorTable = ({ colors }) => {
  const hexToRgb = (hex) => {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Parse hex value to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    return { r, g, b };
  };

  const hexToHsl = (hex) => {
    // Remove '#' if present
    hex = hex.replace('#', '');

    // Convert hex to RGB
    const bigint = parseInt(hex, 16);
    const r = (bigint >> 16) & 255;
    const g = (bigint >> 8) & 255;
    const b = bigint & 255;

    // Normalize RGB values
    const normalizedR = r / 255;
    const normalizedG = g / 255;
    const normalizedB = b / 255;

    // Find maximum and minimum values of RGB
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

        // Calculate Saturation
        s = Math.round(delta / (1 - Math.abs(2 * l - 1)))
    }
    h = Math.round(h)
    l = Math.round(l)
    return { h, s, l };
};


  return (
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
            <td>
              <div className="color-box" style={{ backgroundColor: color.hex }}></div>
              {color.hex}
            </td>
            <td>{color.color}</td>
            <td>{`${hexToRgb(color.hex).r}, ${hexToRgb(color.hex).g}, ${hexToRgb(color.hex).b}`}</td>
            <td>{`${hexToHsl(color.hex).h}, ${hexToHsl(color.hex).s * 100}, ${hexToHsl(color.hex).l * 100}`}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default ColorTable;
