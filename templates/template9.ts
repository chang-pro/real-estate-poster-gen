// Magazine Style - Editorial layout
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template9 = {
  id: 'magazine',
  name: 'Magazine',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-magazine">
      <style>
        .poster-magazine {
          width: 800px;
          height: 1000px;
          background: white;
          font-family: 'Playfair Display', serif;
          position: relative;
        }
        .poster-magazine .top-bar {
          background: #000;
          height: 80px;
          display: flex;
          align-items: center;
          justify-content: center;
          color: white;
          font-size: 28px;
          letter-spacing: 8px;
          font-weight: 300;
        }
        .poster-magazine .main-image {
          width: 100%;
          height: 600px;
          object-fit: cover;
        }
        .poster-magazine .content-area {
          padding: 40px 50px;
        }
        .poster-magazine .headline {
          font-size: 52px;
          font-weight: 700;
          color: #000;
          margin-bottom: 20px;
          font-style: italic;
          line-height: 1.1;
        }
        .poster-magazine .divider {
          width: 100px;
          height: 3px;
          background: #000;
          margin: 20px 0;
        }
        .poster-magazine .price {
          font-size: 46px;
          font-weight: 700;
          color: #c9a961;
          margin-bottom: 15px;
        }
        .poster-magazine .address {
          font-size: 22px;
          color: #666;
          font-family: 'Helvetica', sans-serif;
          font-weight: 400;
          line-height: 1.5;
        }
      </style>
      <div class="top-bar">FEATURED ESTATE</div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="content-area">
        <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
        <div class="divider"></div>
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


