import React, { useState } from 'react';
import reviewsData from '../data/reviewsData'; // путь к файлу с отзывами
import Pagination from './Pagination'; // путь к компоненту пагинации

const REVIEWS_PER_PAGE = 4;

const Reviews = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(reviewsData.length / REVIEWS_PER_PAGE);
  const paginatedReviews = reviewsData.slice(
    (currentPage - 1) * REVIEWS_PER_PAGE,
    currentPage * REVIEWS_PER_PAGE
  );

  return (
    <div>
      <div className="grid-of-reviews">
        {paginatedReviews.map((review, index) => (
          <div className="review" key={index}>
            <div className="review-header">
              <div className="avatar">
                <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="50" cy="50" r="50" fill="#ccc" />
                  <circle cx="50" cy="35" r="15" fill="#fff" />
                  <rect x="30" y="55" width="40" height="30" rx="15" fill="#fff" />
                </svg>
              </div>
              <div className="nick-and-date">
                {review.name} - {review.date}
              </div>
            </div>
            <div className="comment">{review.comment}</div>
          </div>
        ))}
      </div>
      <Pagination
        totalPages={totalPages}
        currentPage={currentPage}
        onPageChange={setCurrentPage}
      />
    </div>
  );
};

export default Reviews;
