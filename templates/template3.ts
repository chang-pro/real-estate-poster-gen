// Minimalist - Lots of whitespace, clean design
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template3 = {
  id: 'minimalist',
  name: 'Minimalist',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-minimal">
      <style>
        .poster-minimal {
          width: 800px;
          height: 1000px;
          background: #ffffff;
          font-family: 'Helvetica Neue', sans-serif;
          position: relative;
          padding: 60px;
        }
        .poster-minimal .headline {
          font-size: 36px;
          font-weight: 300;
          color: #000;
          text-transform: uppercase;
          letter-spacing: 8px;
          margin-bottom: 40px;
          border-bottom: 1px solid #000;
          padding-bottom: 20px;
        }
        .poster-minimal .main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          margin-bottom: 40px;
        }
        .poster-minimal .details {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding-top: 30px;
          border-top: 1px solid #ddd;
        }
        .poster-minimal .price {
          font-size: 48px;
          font-weight: 200;
          color: #000;
          letter-spacing: 2px;
        }
        .poster-minimal .address {
          font-size: 20px;
          color: #666;
          font-weight: 300;
          text-align: right;
          max-width: 400px;
          line-height: 1.6;
        }
      </style>
      <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="details">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


