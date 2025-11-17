// Classic Newspaper - Black & white, traditional
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template2 = {
  id: 'classic-newspaper',
  name: 'Classic Newspaper',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-newspaper">
      <style>
        .poster-newspaper {
          width: 800px;
          height: 1000px;
          background: #f5f5dc;
          font-family: 'Georgia', serif;
          position: relative;
          padding: 40px;
          border: 20px solid #333;
        }
        .poster-newspaper .header {
          text-align: center;
          border-bottom: 4px double #333;
          padding-bottom: 20px;
          margin-bottom: 30px;
        }
        .poster-newspaper .headline {
          font-size: 48px;
          font-weight: bold;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 2px;
          line-height: 1.2;
          margin-bottom: 10px;
        }
        .poster-newspaper .tagline {
          font-size: 18px;
          font-style: italic;
          color: #666;
        }
        .poster-newspaper .main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border: 8px solid #333;
          margin-bottom: 30px;
        }
        .poster-newspaper .info-section {
          background: white;
          border: 3px solid #333;
          padding: 30px;
          text-align: center;
        }
        .poster-newspaper .price {
          font-size: 56px;
          font-weight: bold;
          color: #000;
          margin-bottom: 15px;
        }
        .poster-newspaper .address {
          font-size: 24px;
          color: #333;
          border-top: 2px solid #999;
          padding-top: 15px;
          margin-top: 15px;
        }
      </style>
      <div class="header">
        <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
        <div class="tagline">Featured Property Listing</div>
      </div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="info-section">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


