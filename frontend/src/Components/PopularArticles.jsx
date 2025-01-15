import React from 'react';
import { articles } from '../assets/asset';

const PopularArticles = () => {
  

  return (
    <div className="w-[932px] max-[1024px]:w-[95%] mx-auto">
      <div className="flex flex-wrap justify-center gap-6">
        {articles.map((articles, index) => (
          <div
            key={index}
            className="flex justify-between bg-white w-[454px] p-8 rounded-[32px] shadow-md"
          >
            <div className="w-[238px]">
              <h3 className="font-semibold mb-2">{articles.title}</h3>
              <p className="font-medium">{articles.description}</p>
            </div>
            <div>
              <img
                className="w-[130px] h-[102px] object-cover"
                src={articles.imgSrc}
                alt="Article"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PopularArticles;
