// Neon Glow - Futuristic cyberpunk style
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template10 = {
  id: 'neon-glow',
  name: 'Neon Glow',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-neon">
      <style>
        .poster-neon {
          width: 800px;
          height: 1000px;
          background: #0a0a0a;
          font-family: 'Orbitron', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .poster-neon::before {
          content: '';
          position: absolute;
          width: 100%;
          height: 100%;
          background: 
            repeating-linear-gradient(
              0deg,
              transparent,
              transparent 2px,
              rgba(255, 0, 255, 0.05) 2px,
              rgba(255, 0, 255, 0.05) 4px
            );
          pointer-events: none;
          z-index: 1;
        }
        .poster-neon .main-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
          filter: contrast(1.2) saturate(1.3);
          border-bottom: 3px solid #ff00ff;
        }
        .poster-neon .headline {
          position: absolute;
          top: 70px;
          left: 50px;
          right: 50px;
          font-size: 48px;
          font-weight: 900;
          color: #00ffff;
          text-transform: uppercase;
          text-shadow: 
            0 0 10px #00ffff,
            0 0 20px #00ffff,
            0 0 30px #00ffff,
            0 0 40px #0099ff;
          letter-spacing: 3px;
          z-index: 2;
        }
        .poster-neon .info-box {
          position: absolute;
          bottom: 100px;
          left: 50px;
          right: 50px;
          background: rgba(10, 10, 10, 0.9);
          border: 2px solid #ff00ff;
          padding: 30px;
          box-shadow: 
            0 0 20px rgba(255, 0, 255, 0.5),
            inset 0 0 20px rgba(255, 0, 255, 0.1);
        }
        .poster-neon .price {
          font-size: 56px;
          font-weight: 900;
          color: #ff00ff;
          text-shadow: 
            0 0 10px #ff00ff,
            0 0 20px #ff00ff;
          margin-bottom: 15px;
        }
        .poster-neon .address {
          font-size: 20px;
          color: #00ffff;
          text-shadow: 0 0 5px #00ffff;
          letter-spacing: 1px;
        }
      </style>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      <div class="info-box">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


