import React, { useState } from 'react';
import { sizesCM } from '../data/sizeData.js';

function convertToInches(cm) {
  return (cm / 2.54).toFixed(1);
}

const headers = ['SIZE', 'BUST', 'WAIST', 'HIP SIZE', 'SLEEVES', 'LENGTH'];

const SizeChart = () => {
  const [unit, setUnit] = useState('cm');

  const sizes = sizesCM.map(item => unit === 'cm'
    ? item
    : {
        ...item,
        bust: convertToInches(item.bust),
        waist: convertToInches(item.waist),
        hip: convertToInches(item.hip),
        sleeves: convertToInches(item.sleeves),
        length: convertToInches(item.length),
      }
  );

  return (
    <div className="grid-of-size">
      <div className="title-of-size">ТАБЛИЦА РАЗМЕРОВ</div>
      <div className="cm-in">
        <button
          className={`cm${unit === 'cm' ? ' active' : ''}`}
          onClick={() => setUnit('cm')}
        >
          CM
        </button>
        <button
          className={`in${unit === 'in' ? ' active' : ''}`}
          onClick={() => setUnit('in')}
        >
          IN
        </button>
      </div>
      <table className="size-chart">
        <thead>
          <tr>
            {headers.map((header, idx) => (
              <th className="header-of-size" key={idx}>{header}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {sizes.map((item, index) => (
            <tr key={index}>
              <td className="cell">{item.size}</td>
              <td className="cell">{item.bust}</td>
              <td className="cell">{item.waist}</td>
              <td className="cell">{item.hip}</td>
              <td className="cell">{item.sleeves}</td>
              <td className="cell">{item.length}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default SizeChart;
