// Vintage - Retro colors, old-school fonts
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template6 = {
  id: 'vintage',
  name: 'Vintage',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-vintage">
      <style>
        .poster-vintage {
          width: 800px;
          height: 1000px;
          background: #e8d5b7;
          font-family: 'Courier New', monospace;
          position: relative;
          padding: 40px;
          border: 15px solid #8b4513;
          box-shadow: inset 0 0 50px rgba(0,0,0,0.1);
        }
        .poster-vintage::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: repeating-linear-gradient(
            0deg,
            transparent,
            transparent 2px,
            rgba(139, 69, 19, 0.03) 2px,
            rgba(139, 69, 19, 0.03) 4px
          );
          pointer-events: none;
        }
        .poster-vintage .header-banner {
          background: #8b4513;
          color: #e8d5b7;
          padding: 20px;
          text-align: center;
          margin-bottom: 30px;
          border: 3px solid #654321;
        }
        .poster-vintage .headline {
          font-size: 40px;
          font-weight: bold;
          text-transform: uppercase;
          letter-spacing: 3px;
        }
        .poster-vintage .main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border: 10px solid #8b4513;
          margin-bottom: 30px;
          filter: sepia(0.3) contrast(1.1);
        }
        .poster-vintage .footer-info {
          background: #d4a373;
          border: 5px double #8b4513;
          padding: 25px;
          text-align: center;
        }
        .poster-vintage .price {
          font-size: 48px;
          font-weight: bold;
          color: #8b4513;
          margin-bottom: 10px;
        }
        .poster-vintage .address {
          font-size: 20px;
          color: #654321;
          font-weight: bold;
        }
      </style>
      <div class="header-banner">
        <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      </div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="footer-info">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


