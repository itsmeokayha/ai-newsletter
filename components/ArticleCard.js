
import React from 'react';

function ArticleCard({ title, summary, imageUrl, altText }) {
    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg m-2 
                       sm:max-w-md md:max-w-lg lg:max-w-xl
                       transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-105">
            <img className="w-full" src={imageUrl} alt={altText ? altText : title} />
            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">{title}</div>
                <p className="text-gray-700 text-base">
                    {summary}
                </p>
            </div>
        </div>
    );
}

export default ArticleCard;
