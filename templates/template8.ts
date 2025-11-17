// Photo Collage - Multiple photo layouts
import { TemplateData } from './template1';

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template8 = {
  id: 'photo-collage',
  name: 'Photo Collage',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-collage">
      <style>
        .poster-collage {
          width: 800px;
          height: 1000px;
          background: #2c3e50;
          font-family: 'Montserrat', sans-serif;
          position: relative;
          padding: 30px;
        }
        .poster-collage .headline-strip {
          background: #e74c3c;
          color: white;
          padding: 25px 30px;
          margin-bottom: 20px;
        }
        .poster-collage .headline {
          font-size: 44px;
          font-weight: 800;
          text-transform: uppercase;
          letter-spacing: 1px;
        }
        .poster-collage .image-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-template-rows: 300px 300px;
          gap: 15px;
          margin-bottom: 20px;
        }
        .poster-collage .main-image {
          grid-column: 1 / 3;
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        .poster-collage .info-panel {
          background: white;
          padding: 30px;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }
        .poster-collage .price {
          font-size: 52px;
          font-weight: 900;
          color: #e74c3c;
        }
        .poster-collage .address {
          font-size: 22px;
          color: #2c3e50;
          font-weight: 600;
          max-width: 400px;
          text-align: right;
        }
      </style>
      <div class="headline-strip">
        <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      </div>
      <div class="image-grid">
        <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      </div>
      <div class="info-panel">
        <div class="price">${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}</div>
        <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
      </div>
    </div>
  `
};


