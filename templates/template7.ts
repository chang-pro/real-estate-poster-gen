// Bold Typography - Huge text, minimal images
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template7 = {
  id: 'bold-typography',
  name: 'Bold Typography',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-bold">
      <style>
        .poster-bold {
          width: 800px;
          height: 1000px;
          background: #000;
          font-family: 'Impact', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .poster-bold .headline {
          position: absolute;
          top: 50px;
          left: 50px;
          right: 50px;
          font-size: 72px;
          font-weight: 900;
          color: #fff;
          text-transform: uppercase;
          line-height: 0.95;
          letter-spacing: -2px;
          z-index: 2;
        }
        .poster-bold .main-image {
          position: absolute;
          bottom: 0;
          left: 0;
          width: 100%;
          height: 450px;
          object-fit: cover;
          opacity: 0.4;
        }
        .poster-bold .price-section {
          position: absolute;
          top: 350px;
          left: 50px;
          right: 50px;
          z-index: 2;
        }
        .poster-bold .price {
          font-size: 96px;
          font-weight: 900;
          color: #ff0;
          line-height: 1;
          text-shadow: 4px 4px 0 rgba(255,0,0,0.3);
        }
        .poster-bold .address {
          position: absolute;
          bottom: 50px;
          left: 50px;
          right: 50px;
          font-size: 28px;
          font-weight: bold;
          color: #fff;
          background: rgba(255,255,0,0.9);
          color: #000;
          padding: 20px;
          z-index: 2;
        }
      </style>
      <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      <div class="price-section">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
      </div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
    </div>
  `
};


