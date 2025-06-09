import React from 'react';
import userRatings from '../data/ratingData';

// Компонент звезды (как раньше)
const Star = ({ filled }) => {
  // filled: 1 — полностью залита, 0.5 — наполовину, 0 — пустая
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      style={{ marginRight: 2, display: 'inline-block', verticalAlign: 'middle' }}
    >
      <defs>
        {/* Градиент для половины звезды */}
        <linearGradient id="half-gradient">
          <stop offset="50%" stopColor="#FFD600" />
          <stop offset="50%" stopColor="#E0E0E0" />
        </linearGradient>
      </defs>
      <polygon
        points="12,2 15,9 22,9.3 17,14.2 18.5,21 12,17.5 5.5,21 7,14.2 2,9.3 9,9"
        fill={
          filled === 1
            ? "#FFD600"
            : filled === 0.5
              ? "url(#half-gradient)"
              : "#E0E0E0"
        }
        stroke="#FFD600"
        strokeWidth="1"
      />
    </svg>
  );
};


const Rating = () => {
  // Вычисляем средний рейтинг
  const sum = userRatings.reduce((acc, val) => acc + val, 0);
  const avg = userRatings.length > 0 ? sum / userRatings.length : 0;
  const rating = Math.round(avg * 10) / 10; // округляем до 1 знака

  // Массив для отображения звёзд
  const stars = Array.from({ length: 5 }, (_, i) => {
    if (rating >= i + 1) return 1;
    if (rating > i && rating < i + 1) return 0.5;
    return 0;
  });

  return (
    <div className="rating">
      <p>RATING & REVIEWS</p>
      <div className="score-stars">
        <div className="score-of-rating">{rating}/5</div>
        <div className="stars-of-rating">
          {stars.map((filled, idx) => (
            <Star key={idx} filled={filled} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Rating;
