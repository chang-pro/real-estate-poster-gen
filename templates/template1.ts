// Modern Gradient - Bold colors with overlays
export interface TemplateData {
  headline: string;
  address: string;
  price: string;
  photo1: string;
  photo2?: string;
  photo3?: string;
}

// Photo placeholder SVG
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template1 = {
  id: 'modern-gradient',
  name: 'Modern Gradient',
  photoCount: 1,
  generate: (data: TemplateData) => `
    <div class="poster-modern">
      <style>
        .poster-modern {
          width: 800px;
          height: 1000px;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          font-family: 'Arial', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .poster-modern .main-image {
          width: 100%;
          height: 550px;
          object-fit: cover;
          filter: brightness(0.9);
        }
        .poster-modern .headline {
          position: absolute;
          top: 60px;
          left: 50px;
          right: 50px;
          color: white;
          font-size: 56px;
          font-weight: 900;
          text-transform: uppercase;
          text-shadow: 3px 3px 8px rgba(0,0,0,0.7);
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .poster-modern .price-box {
          position: absolute;
          bottom: 150px;
          right: 50px;
          background: white;
          color: #333;
          padding: 25px 45px;
          font-size: 42px;
          font-weight: 900;
          box-shadow: 0 10px 30px rgba(0,0,0,0.3);
          border-radius: 8px;
        }
        .poster-modern .price-label {
          font-size: 16px;
          color: #764ba2;
          font-weight: 600;
          margin-bottom: 5px;
        }
        .poster-modern .address {
          position: absolute;
          bottom: 50px;
          left: 50px;
          right: 50px;
          color: white;
          font-size: 26px;
          font-weight: 600;
          text-shadow: 2px 2px 4px rgba(0,0,0,0.6);
        }
      </style>
      <div class="headline">${data.headline || '<span style="opacity: 0.3; font-style: italic;">Enter Headline</span>'}</div>
      <img src="${data.photo1 || photoPlaceholder}" alt="Property" class="main-image" />
      <div class="price-box">
        <div class="price-label">PRICE</div>
        ${data.price ? '$' + data.price : '<span style="opacity: 0.3; font-style: italic;">Enter Price</span>'}
      </div>
      <div class="address">${data.address || '<span style="opacity: 0.3; font-style: italic;">Enter Address</span>'}</div>
    </div>
  `
};


