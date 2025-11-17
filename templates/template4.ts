// Luxury Gold - Gold accents, elegant design
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template4 = {
  id: 'luxury-gold',
  name: 'Luxury Gold',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-luxury">
      <style>
        .poster-luxury {
          width: 800px;
          height: 1000px;
          background: linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%);
          font-family: 'Palatino', serif;
          position: relative;
          padding: 50px;
        }
        .poster-luxury .gold-border {
          position: absolute;
          top: 20px;
          left: 20px;
          right: 20px;
          bottom: 20px;
          border: 3px solid #d4af37;
          pointer-events: none;
        }
        .poster-luxury .headline {
          font-size: 48px;
          font-weight: bold;
          color: #d4af37;
          text-align: center;
          text-transform: uppercase;
          letter-spacing: 4px;
          margin-bottom: 30px;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .poster-luxury .main-image {
          width: 100%;
          height: 500px;
          object-fit: cover;
          border: 5px solid #d4af37;
          margin-bottom: 30px;
        }
        .poster-luxury .info-container {
          background: rgba(212, 175, 55, 0.1);
          border: 2px solid #d4af37;
          padding: 30px;
          text-align: center;
        }
        .poster-luxury .price-label {
          font-size: 20px;
          color: #d4af37;
          margin-bottom: 10px;
          letter-spacing: 3px;
        }
        .poster-luxury .price {
          font-size: 52px;
          font-weight: bold;
          color: #ffffff;
          margin-bottom: 20px;
        }
        .poster-luxury .address {
          font-size: 22px;
          color: #d4af37;
          font-style: italic;
        }
      </style>
      <div class="gold-border"></div>
      <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="info-container">
        <div class="price-label">LISTED AT</div>
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


