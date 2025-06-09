// src/sizeData.js
export const sizesCM = [
  { size: 'S', bust: 87, waist: 77, hip: 113.5, sleeves: 125.5, length: 125.5 },
  { size: 'M', bust: 91, waist: 81, hip: 117.5, sleeves: 127.5, length: 125.5 }
];

// Если нужны дюймы, можно сразу подготовить данные:
export const sizesIN = [
  { size: 'S', bust: (87/2.54).toFixed(1), waist: (77/2.54).toFixed(1), hip: (113.5/2.54).toFixed(1), sleeves: (125.5/2.54).toFixed(1), length: (125.5/2.54).toFixed(1) },
  { size: 'M', bust: (91/2.54).toFixed(1), waist: (81/2.54).toFixed(1), hip: (117.5/2.54).toFixed(1), sleeves: (127.5/2.54).toFixed(1), length: (125.5/2.54).toFixed(1) }
];
