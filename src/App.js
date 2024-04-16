import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ColorTable from './components/ColorTable';
import './App.css';

const App = () => {
  const [colors, setColors] = useState([]);
  const [searchColor, setSearchColor] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  useEffect(() => {
    const fetchColors = async () => {
      try {
        setLoading(true)
        const response = await axios.get('https://raw.githubusercontent.com/NishantChandla/color-test-resources/main/xkcd-colors.json');
        setColors(response.data.colors);
        setLoading(false)
      } catch (error) {
        console.error('Error fetching colors:', error);
      }
    };

    fetchColors();
  }, []);

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

  const handleSearch = () => {
    let searchRgb;
    if (searchColor.match(/^#(?:[0-9a-fA-F]{3}){1,2}$/)) { 
      searchRgb = hexToRgb(searchColor);
    } else if (searchColor.startsWith('rgb(') && searchColor.endsWith(')')) { 
      const rgbArray = searchColor.substring(4, searchColor.length - 1).split(',');
      searchRgb = {
        r: parseInt(rgbArray[0]),
        g: parseInt(rgbArray[1]),
        b: parseInt(rgbArray[2])
      };
    } else {
      console.error('Invalid color input');
      setErrorMessage('Invalid color input');
      return;
    }

    const calculateSimilarity = (color1, color2) => {
      return Math.sqrt(
        Math.pow(color1.r - color2.r, 2) +
        Math.pow(color1.g - color2.g, 2) +
        Math.pow(color1.b - color2.b, 2)
      );
    };

    const filteredColors = colors.filter(color => {
      return calculateSimilarity(searchRgb, hexToRgb(color.hex)) < 50; 
    });

    if (filteredColors.length === 0) {
      setErrorMessage('No matching colors found'); 
    } else {
      setColors(filteredColors);
      setErrorMessage('');
    }
  };

  const handleColorChange = (e) => {
    setErrorMessage('')
    setSearchColor(e.target.value)
  }

  return (
    <>
    <input
        type="text"
        placeholder="Enter color"
        value={searchColor}
        onChange={handleColorChange}
        onKeyDown={e => {
          if (e.key === 'Enter') {
            handleSearch();
          }
        }}
      />
    {loading ? 
    <div> loading... </div> 
    : 
      (
      <div>
      {errorMessage && <p className="error-message">{errorMessage}</p>} {/* Render error message if present */}
      <ColorTable colors={colors} />
    </div>)}
    </>
  );
};

export default App;
