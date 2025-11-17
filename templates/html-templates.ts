// Complete HTML Templates with Tailwind CDN

export interface HTMLTemplate {
  id: string;
  name: string;
  html: string;
}

export const htmlTemplates: HTMLTemplate[] = [
  // Template 1: Luxury Gold Frame
  {
    id: 'luxury-gold',
    name: 'Luxury Gold Frame',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Luxury Property</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 800px;
            height: 1000px;
            background: linear-gradient(to bottom, #1a1a1a 0%, #2d2d2d 100%);
            font-family: 'Palatino', 'Georgia', serif;
            position: relative;
        }
        .gold-border {
            position: absolute;
            top: 20px;
            left: 20px;
            right: 20px;
            bottom: 20px;
            border: 3px solid #d4af37;
            pointer-events: none;
        }
        .headline {
            font-size: 48px;
            font-weight: bold;
            color: #d4af37;
            text-align: center;
            text-transform: uppercase;
            letter-spacing: 4px;
            padding: 50px 50px 30px;
            text-shadow: 2px 2px 4px rgba(0,0,0,0.5);
        }
        .main-image {
            width: calc(100% - 100px);
            height: 500px;
            object-fit: cover;
            border: 5px solid #d4af37;
            margin: 0 50px 30px;
            display: block;
        }
        .info-container {
            background: rgba(212, 175, 55, 0.1);
            border: 2px solid #d4af37;
            padding: 30px;
            margin: 0 50px;
            text-align: center;
        }
        .price-label {
            font-size: 20px;
            color: #d4af37;
            margin-bottom: 10px;
            letter-spacing: 3px;
        }
        .price {
            font-size: 52px;
            font-weight: bold;
            color: #ffffff;
            margin-bottom: 20px;
        }
        .address {
            font-size: 22px;
            color: #d4af37;
            font-style: italic;
        }
    </style>
</head>
<body>
    <div class="gold-border"></div>
    <div class="headline">{{HEADLINE}}</div>
    <img src="{{PHOTO_1}}" alt="Property" class="main-image">
    <div class="info-container">
        <div class="price-label">LISTED AT</div>
        <div class="price">\${{PRICE}}</div>
        <div class="address">{{ADDRESS}}</div>
    </div>
</body>
</html>`
  },

  // Template 2: Modern Gradient
  {
    id: 'modern-gradient',
    name: 'Modern Gradient',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Modern Property</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 800px;
            height: 1000px;
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            font-family: 'Arial', sans-serif;
            position: relative;
            overflow: hidden;
        }
        .main-image {
            width: 100%;
            height: 550px;
            object-fit: cover;
            filter: brightness(0.9);
        }
        .headline {
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
        .price-box {
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
        .price-label {
            font-size: 16px;
            color: #764ba2;
            font-weight: 600;
            margin-bottom: 5px;
        }
        .address {
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
</head>
<body>
    <div class="headline">{{HEADLINE}}</div>
    <img src="{{PHOTO_1}}" alt="Property" class="main-image">
    <div class="price-box">
        <div class="price-label">PRICE</div>
        \${{PRICE}}
    </div>
    <div class="address">{{ADDRESS}}</div>
</body>
</html>`
  },

  // Template 3: Classic Newspaper
  {
    id: 'classic-newspaper',
    name: 'Classic Newspaper',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Property Listing</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 800px;
            height: 1000px;
            background: #f5f5dc;
            font-family: 'Georgia', serif;
            padding: 40px;
            border: 20px solid #333;
            box-sizing: border-box;
        }
        .header {
            text-align: center;
            border-bottom: 4px double #333;
            padding-bottom: 20px;
            margin-bottom: 30px;
        }
        .headline {
            font-size: 48px;
            font-weight: bold;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 2px;
            line-height: 1.2;
            margin-bottom: 10px;
        }
        .tagline {
            font-size: 18px;
            font-style: italic;
            color: #666;
        }
        .main-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border: 8px solid #333;
            margin-bottom: 30px;
        }
        .info-section {
            background: white;
            border: 3px solid #333;
            padding: 30px;
            text-align: center;
        }
        .price {
            font-size: 56px;
            font-weight: bold;
            color: #000;
            margin-bottom: 15px;
        }
        .address {
            font-size: 24px;
            color: #333;
            border-top: 2px solid #999;
            padding-top: 15px;
            margin-top: 15px;
        }
    </style>
</head>
<body>
    <div class="header">
        <div class="headline">{{HEADLINE}}</div>
        <div class="tagline">Featured Property Listing</div>
    </div>
    <img src="{{PHOTO_1}}" alt="Property" class="main-image">
    <div class="info-section">
        <div class="price">\${{PRICE}}</div>
        <div class="address">{{ADDRESS}}</div>
    </div>
</body>
</html>`
  },

  // Template 4: Minimalist White
  {
    id: 'minimalist',
    name: 'Minimalist White',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Property</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 800px;
            height: 1000px;
            background: #ffffff;
            font-family: 'Helvetica Neue', sans-serif;
            padding: 60px;
            box-sizing: border-box;
        }
        .headline {
            font-size: 36px;
            font-weight: 300;
            color: #000;
            text-transform: uppercase;
            letter-spacing: 8px;
            margin-bottom: 40px;
            border-bottom: 1px solid #000;
            padding-bottom: 20px;
        }
        .main-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            margin-bottom: 40px;
        }
        .details {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: 30px;
            border-top: 1px solid #ddd;
        }
        .price {
            font-size: 48px;
            font-weight: 200;
            color: #000;
            letter-spacing: 2px;
        }
        .address {
            font-size: 20px;
            color: #666;
            font-weight: 300;
            text-align: right;
            max-width: 400px;
            line-height: 1.6;
        }
    </style>
</head>
<body>
    <div class="headline">{{HEADLINE}}</div>
    <img src="{{PHOTO_1}}" alt="Property" class="main-image">
    <div class="details">
        <div class="price">\${{PRICE}}</div>
        <div class="address">{{ADDRESS}}</div>
    </div>
</body>
</html>`
  },

  // Template 5: Bold Typography
  {
    id: 'bold-typography',
    name: 'Bold Typography',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Bold Design</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body {
            margin: 0;
            padding: 0;
            width: 800px;
            height: 1000px;
            background: #000;
            font-family: 'Impact', sans-serif;
            position: relative;
            overflow: hidden;
        }
        .headline {
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
        .main-image {
            position: absolute;
            bottom: 0;
            left: 0;
            width: 100%;
            height: 450px;
            object-fit: cover;
            opacity: 0.4;
        }
        .price-section {
            position: absolute;
            top: 350px;
            left: 50px;
            right: 50px;
            z-index: 2;
        }
        .price {
            font-size: 96px;
            font-weight: 900;
            color: #ff0;
            line-height: 1;
            text-shadow: 4px 4px 0 rgba(255,0,0,0.3);
        }
        .address {
            position: absolute;
            bottom: 50px;
            left: 50px;
            right: 50px;
            font-size: 28px;
            font-weight: bold;
            color: #000;
            background: rgba(255,255,0,0.9);
            padding: 20px;
            z-index: 2;
        }
    </style>
</head>
<body>
    <div class="headline">{{HEADLINE}}</div>
    <div class="price-section">
        <div class="price">\${{PRICE}}</div>
    </div>
    <img src="{{PHOTO_1}}" alt="Property" class="main-image">
    <div class="address">{{ADDRESS}}</div>
</body>
</html>`
  },
  
  // Template 6: Tech Modern (Glassmorphism)
  {
    id: 'tech-modern',
    name: 'Tech Modern',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Modern Property</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; font-family: -apple-system, BlinkMacSystemFont, 'SF Pro Display', sans-serif; }
        .poster-tech {
            width: 800px;
            height: 1000px;
            background: linear-gradient(135deg, #0093E9 0%, #80D0C7 100%);
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
        .main-image {
            width: 100%;
            height: 550px;
            object-fit: cover;
        }
        .glass-panel {
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
        .headline {
            font-size: 42px;
            font-weight: 700;
            color: white;
            margin-bottom: 15px;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .price {
            font-size: 48px;
            font-weight: 800;
            color: white;
            margin-bottom: 10px;
        }
        .address {
            font-size: 20px;
            color: rgba(255,255,255,0.9);
            font-weight: 500;
        }
    </style>
</head>
<body>
    <div class="poster-tech">
        <img src="{{PHOTO_1}}" alt="Property" class="main-image">
        <div class="glass-panel">
            <div class="headline">{{HEADLINE}}</div>
            <div class="price">\${{PRICE}}</div>
            <div class="address">{{ADDRESS}}</div>
        </div>
    </div>
</body>
</html>`
  },
  
  // Template 7: Vintage
  {
    id: 'vintage',
    name: 'Vintage',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Vintage Property</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; font-family: 'Courier New', monospace; }
        .poster-vintage {
            width: 800px;
            height: 1000px;
            background: #e8d5b7;
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
        .header-banner {
            background: #8b4513;
            color: #e8d5b7;
            padding: 20px;
            text-align: center;
            margin-bottom: 30px;
            border: 3px solid #654321;
            position: relative;
            z-index: 1;
        }
        .headline {
            font-size: 40px;
            font-weight: bold;
            text-transform: uppercase;
            letter-spacing: 3px;
        }
        .main-image {
            width: 100%;
            height: 500px;
            object-fit: cover;
            border: 10px solid #8b4513;
            margin-bottom: 30px;
            filter: sepia(0.3) contrast(1.1);
            position: relative;
            z-index: 1;
        }
        .footer-info {
            background: #d4a373;
            border: 5px double #8b4513;
            padding: 25px;
            text-align: center;
            position: relative;
            z-index: 1;
        }
        .price {
            font-size: 48px;
            font-weight: bold;
            color: #8b4513;
            margin-bottom: 10px;
        }
        .address {
            font-size: 20px;
            color: #654321;
            font-weight: bold;
        }
    </style>
</head>
<body>
    <div class="poster-vintage">
        <div class="header-banner">
            <div class="headline">{{HEADLINE}}</div>
        </div>
        <img src="{{PHOTO_1}}" alt="Property" class="main-image">
        <div class="footer-info">
            <div class="price">\${{PRICE}}</div>
            <div class="address">{{ADDRESS}}</div>
        </div>
    </div>
</body>
</html>`
  },
  
  // Template 8: Photo Collage
  {
    id: 'photo-collage',
    name: 'Photo Collage',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Property Collage</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; font-family: 'Montserrat', sans-serif; }
        .poster-collage {
            width: 800px;
            height: 1000px;
            background: #2c3e50;
            padding: 30px;
        }
        .headline-strip {
            background: #e74c3c;
            color: white;
            padding: 25px 30px;
            margin-bottom: 20px;
        }
        .headline {
            font-size: 44px;
            font-weight: 800;
            text-transform: uppercase;
            letter-spacing: 1px;
        }
        .image-grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 300px 300px;
            gap: 15px;
            margin-bottom: 20px;
        }
        .main-image {
            grid-column: 1 / 3;
            width: 100%;
            height: 100%;
            object-fit: cover;
        }
        .info-panel {
            background: white;
            padding: 30px;
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        .price {
            font-size: 52px;
            font-weight: 900;
            color: #e74c3c;
        }
        .address {
            font-size: 22px;
            color: #2c3e50;
            font-weight: 600;
            max-width: 400px;
            text-align: right;
        }
    </style>
</head>
<body>
    <div class="poster-collage">
        <div class="headline-strip">
            <div class="headline">{{HEADLINE}}</div>
        </div>
        <div class="image-grid">
            <img src="{{PHOTO_1}}" alt="Property" class="main-image">
        </div>
        <div class="info-panel">
            <div class="price">\${{PRICE}}</div>
            <div class="address">{{ADDRESS}}</div>
        </div>
    </div>
</body>
</html>`
  },
  
  // Template 9: Magazine Editorial
  {
    id: 'magazine',
    name: 'Magazine Editorial',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Featured Estate</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; font-family: 'Playfair Display', serif; }
        .poster-magazine {
            width: 800px;
            height: 1000px;
            background: white;
        }
        .top-bar {
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
        .main-image {
            width: 100%;
            height: 600px;
            object-fit: cover;
        }
        .content-area {
            padding: 40px 50px;
        }
        .headline {
            font-size: 52px;
            font-weight: 700;
            color: #000;
            margin-bottom: 20px;
            font-style: italic;
            line-height: 1.1;
        }
        .divider {
            width: 100px;
            height: 3px;
            background: #000;
            margin: 20px 0;
        }
        .price {
            font-size: 46px;
            font-weight: 700;
            color: #c9a961;
            margin-bottom: 15px;
        }
        .address {
            font-size: 22px;
            color: #666;
            font-family: 'Helvetica', sans-serif;
            font-weight: 400;
            line-height: 1.5;
        }
    </style>
</head>
<body>
    <div class="poster-magazine">
        <div class="top-bar">FEATURED ESTATE</div>
        <img src="{{PHOTO_1}}" alt="Property" class="main-image">
        <div class="content-area">
            <div class="headline">{{HEADLINE}}</div>
            <div class="divider"></div>
            <div class="price">\${{PRICE}}</div>
            <div class="address">{{ADDRESS}}</div>
        </div>
    </div>
</body>
</html>`
  },
  
  // Template 10: Neon Glow (Cyberpunk)
  {
    id: 'neon-glow',
    name: 'Neon Glow',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - Future Living</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        body { margin: 0; font-family: 'Orbitron', monospace; }
        .poster-neon {
            width: 800px;
            height: 1000px;
            background: #0a0a0a;
            position: relative;
            overflow: hidden;
        }
        .poster-neon::before {
            content: '';
            position: absolute;
            width: 100%;
            height: 100%;
            background: repeating-linear-gradient(
                0deg,
                transparent,
                transparent 2px,
                rgba(255, 0, 255, 0.05) 2px,
                rgba(255, 0, 255, 0.05) 4px
            );
            pointer-events: none;
            z-index: 1;
        }
        .main-image {
            width: 100%;
            height: 550px;
            object-fit: cover;
            filter: contrast(1.2) saturate(1.3);
            border-bottom: 3px solid #ff00ff;
        }
        .headline {
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
        .info-box {
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
            z-index: 2;
        }
        .price {
            font-size: 56px;
            font-weight: 900;
            color: #ff00ff;
            text-shadow: 
                0 0 10px #ff00ff,
                0 0 20px #ff00ff;
            margin-bottom: 15px;
        }
        .address {
            font-size: 20px;
            color: #00ffff;
            text-shadow: 0 0 5px #00ffff;
            letter-spacing: 1px;
        }
    </style>
</head>
<body>
    <div class="poster-neon">
        <img src="{{PHOTO_1}}" alt="Property" class="main-image">
        <div class="headline">{{HEADLINE}}</div>
        <div class="info-box">
            <div class="price">\${{PRICE}}</div>
            <div class="address">{{ADDRESS}}</div>
        </div>
    </div>
</body>
</html>`
  },
  
  // Template 11: Premium Gold Frame (User Custom)
  {
    id: 'premium-gold-riverside',
    name: 'Premium Gold Frame',
    html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>{{ADDRESS}} - For Sale</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Inter:wght@400&display=swap');
        
        body { 
            font-family: 'Inter', sans-serif; 
            background: #0a0a0a;
            margin: 0;
            padding: 0;
            width: 1080px;
            height: 1350px;
        }
        .title { 
            font-family: 'Cormorant Garamond', serif; 
            letter-spacing: 0.05em;
        }
        .gold-glow {
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
        .gold-border {
            border: 4px solid;
            border-image: linear-gradient(45deg, #d4af37, #b8975a) 1;
        }
        .photo-frame {
            border: 6px solid;
            border-image: linear-gradient(45deg, #d4af37, #b8975a) 1;
            box-shadow: 0 16px 32px rgba(0, 0, 0, 0.5);
        }
        @media print { 
            body { -webkit-print-color-adjust: exact; print-color-adjust: exact; }
            .no-print { display: none; }
        }
    </style>
</head>
<body class="min-h-screen flex items-center justify-center p-8 md:p-16">
    <!-- CLEAN & PREMIUM POSTER -->
    <div class="max-w-5xl w-full">
        
        <!-- GOLD OUTER FRAME -->
        <div class="rounded-3xl gold-border p-6 shadow-2xl">
            
            <!-- MAIN CONTENT -->
            <div class="bg-black rounded-2xl overflow-hidden">
                
                <!-- HERO PHOTO -->
                <div class="p-6 md:p-10">
                    <div class="photo-frame rounded-xl overflow-hidden">
                        <img src="{{PHOTO_1}}" 
                             alt="{{ADDRESS}}" 
                             class="w-full object-cover brightness-95">
                    </div>
                </div>

                <!-- PRICE – Smaller & Subtle -->
                <div class="px-6 md:px-10 pb-6 text-center">
                    <div class="inline-block bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 border border-white/20">
                        <div class="text-4xl md:text-5xl font-bold text-white gold-glow tracking-wider">
                            \${{PRICE}}
                        </div>
                    </div>
                </div>

                <!-- AERIAL PHOTO -->
                <div class="p-6 md:p-10">
                    <div class="photo-frame rounded-xl overflow-hidden">
                        <img src="{{PHOTO_2}}" 
                             alt="Aerial View" 
                             class="w-full object-cover brightness-90">
                    </div>
                </div>

                <!-- ADDRESS – Clean & Elegant -->
                <div class="bg-gradient-to-r from-zinc-950 to-zinc-900 px-10 py-8 text-center">
                    <div class="title text-5xl md:text-6xl font-bold text-white tracking-widest gold-glow">
                        {{ADDRESS}}
                    </div>
                    <div class="text-xl text-amber-100/70 mt-2 tracking-widest">
                        {{CITY}}, {{STATE}} {{ZIP}}
                    </div>
                </div>
            </div>
        </div>
    </div>
</body>
</html>`
  }
];

// Helper function to render field with conditional logic
function renderField(value: string | undefined): string {
  return value ? value : '<span class="opacity-40 italic"></span>';
}

// Helper function to render image - returns transparent pixel if empty
function renderImage(value: string | undefined, fallback?: string): string {
  const transparentPixel = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mNkYAAAAAYAAjCB0C8AAAAASUVORK5CYII=';
  return value || fallback || transparentPixel;
}

// Process template with user data - NO PLACEHOLDER TEXT, EVER
export function processHTMLTemplate(template: HTMLTemplate, data: {
  headline?: string;
  address?: string;
  city?: string;
  state?: string;
  zip?: string;
  price?: string;
  description?: string;
  agentName?: string;
  agentPhone?: string;
  agentEmail?: string;
  photo1?: string;
  photo2?: string;
  photo3?: string;
}): string {
  let processed = template.html;

  // Replace ALL placeholders - ONLY with real data or empty styled span
  // NO HARDCODED TEXT LIKE "Stunning Property" or "123 Main St"
  
  // Text fields: show data or empty styled span (NO placeholder text)
  processed = processed.replace(/\{\{HEADLINE\}\}/g, renderField(data.headline));
  processed = processed.replace(/\{\{ADDRESS\}\}/g, renderField(data.address));
  processed = processed.replace(/\{\{CITY\}\}/g, renderField(data.city));
  processed = processed.replace(/\{\{STATE\}\}/g, renderField(data.state));
  processed = processed.replace(/\{\{ZIP\}\}/g, renderField(data.zip));
  processed = processed.replace(/\{\{DESCRIPTION\}\}/g, renderField(data.description));
  processed = processed.replace(/\{\{AGENT_NAME\}\}/g, renderField(data.agentName));
  processed = processed.replace(/\{\{AGENT_PHONE\}\}/g, renderField(data.agentPhone));
  processed = processed.replace(/\{\{AGENT_EMAIL\}\}/g, renderField(data.agentEmail));
  
  // Price: show data or hide entire price sections
  if (data.price) {
    processed = processed.replace(/\{\{PRICE\}\}/g, data.price);
  } else {
    // Remove entire price sections if no price provided - NO "$0" or "TBD"
    processed = processed.replace(/<div[^>]*class="[^"]*price-box[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
    processed = processed.replace(/<div[^>]*class="[^"]*price-section[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
    processed = processed.replace(/<div[^>]*class="[^"]*price-label[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
    processed = processed.replace(/<div[^>]*class="[^"]*price[^"]*"[^>]*>[\s\S]*?<\/div>/g, '');
  }
  
  // Photos: use data or transparent pixel (NO broken images)
  processed = processed.replace(/\{\{PHOTO_1\}\}/g, renderImage(data.photo1));
  processed = processed.replace(/\{\{PHOTO_2\}\}/g, renderImage(data.photo2, data.photo1));
  processed = processed.replace(/\{\{PHOTO_3\}\}/g, renderImage(data.photo3, data.photo1));

  return processed;
}

