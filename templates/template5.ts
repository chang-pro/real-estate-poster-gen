// Tech Startup - Glassmorphism, modern
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template5 = {
  id: 'tech-modern',
  name: 'Tech Modern',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-tech">
      <style>
        .poster-tech {
          width: 800px;
          height: 1000px;
          background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
          font-family: 'SF Pro Display', -apple-system, sans-serif;
          position: relative;
          overflow: hidden;
        }
        .poster-tech::before {
          content: '';
          position: absolute;
          width: 500px;
          height: 500px;
          background: rgba(255,255,255,0.1);
          border-radius: 50%;
          top: -100px;
          right: -100px;
        }
        .poster-tech .main-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
        }
        .poster-tech .glass-panel {
          position: absolute;
          bottom: 80px;
          left: 50px;
          right: 50px;
          background: rgba(255, 255, 255, 0.15);
          backdrop-filter: blur(20px);
          border-radius: 20px;
          border: 1px solid rgba(255, 255, 255, 0.3);
          padding: 35px;
          box-shadow: 0 8px 32px rgba(0,0,0,0.2);
        }
        .poster-tech .headline {
          font-size: 42px;
          font-weight: 700;
          color: white;
          margin-bottom: 15px;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .poster-tech .price {
          font-size: 48px;
          font-weight: 800;
          color: white;
          margin-bottom: 10px;
        }
        .poster-tech .address {
          font-size: 20px;
          color: rgba(255,255,255,0.9);
          font-weight: 500;
        }
      </style>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="glass-panel">
        <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


