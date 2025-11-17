// Premium Gold Frame - Luxury design with gold borders (1821 Riverside Drive example)
import { TemplateData } from './template1';

// Default placeholder images from actual poster
const defaultPhoto1 = 'https://photos.zillowstatic.com/fp/273dee60fa77f67491c4b51e415a78b5-cc_ft_768.webp';
const defaultPhoto2 = 'https://photos.zillowstatic.com/fp/db336c5adc5230d6aa54223acab7212a-cc_ft_384.webp';

// Photo placeholder SVG (fallback)
const photoPlaceholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iODAwIiBoZWlnaHQ9IjYwMCIgZmlsbD0iI2YzZjRmNiIvPjxnPjx0ZXh0IHg9IjUwJSIgeT0iNDUlIiBmb250LWZhbWlseT0iQXJpYWwsIHNhbnMtc2VyaWYiIGZvbnQtc2l6ZT0iMjQiIGZpbGw9IiM5Y2EzYWYiIHRleHQtYW5jaG9yPSJtaWRkbGUiPjxzdmcgeD0iLTMwIiB5PSItNDAiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgdmlld0JveD0iMCAwIDI0IDI0IiBmaWxsPSJub25lIiBzdHJva2U9IiM5Y2EzYWYiIHN0cm9rZS13aWR0aD0iMiI+PHJlY3QgeD0iMyIgeT0iMyIgd2lkdGg9IjE4IiBoZWlnaHQ9IjE4IiByeD0iMiIgcnk9IjIiLz48Y2lyY2xlIGN4PSI4LjUiIGN5PSI4LjUiIHI9IjEuNSIvPjxwb2x5bGluZSBwb2ludHM9IjIxIDE1IDAgMTYgNSAxMSAxMCIvPjwvc3ZnPjwvdGV4dD48dGV4dCB4PSI1MCUiIHk9IjU1JSIgZm9udC1mYW1pbHk9IkFyaWFsLCBzYW5zLXNlcmlmIiBmb250LXNpemU9IjE4IiBmaWxsPSIjOWNhM2FmIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIj5VcGxvYWQgUGhvdG88L3RleHQ+PC9nPjwvc3ZnPg==';

export const template11 = {
  id: 'premium-gold-frame',
  name: 'Premium Gold Frame',
  photoCount: 2,
  generate: (data: TemplateData) => `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${data.address || 'Property'} - For Sale</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@700&family=Inter:wght@400&display=swap');
        
        body { 
            font-family: 'Inter', sans-serif; 
            background: #0a0a0a;
        }
        .title { 
            font-family: 'Cormorant Garamond', serif; 
            letter-spacing: 0.05em;
        }
        .gold-glow {
            text-shadow: 0 0 20px rgba(212, 175, 55, 0.4);
        }
        .gold-border {
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
        <div class="rounded-3xl border-4 gold-border p-6 shadow-2xl">
            
            <!-- MAIN CONTENT -->
            <div class="bg-black rounded-2xl overflow-hidden">
                
                <!-- HERO PHOTO -->
                <div class="p-6 md:p-10">
                    <div class="photo-frame rounded-xl overflow-hidden">
                        <img src="${data.photo1 || defaultPhoto1}" 
                             alt="${data.address || '1821 Riverside Drive'}" 
                             class="w-full object-cover brightness-95">
                    </div>
                </div>

                <!-- PRICE – Smaller & Subtle -->
                <div class="px-6 md:px-10 pb-6 text-center">
                    <div class="inline-block bg-white/10 backdrop-blur-sm rounded-full px-10 py-4 border border-white/20">
                        <div class="text-4xl md:text-5xl font-bold text-white gold-glow tracking-wider">
                            ${data.price ? '$' + data.price : '$1,295,000'}
                        </div>
                    </div>
                </div>

                <!-- AERIAL PHOTO -->
                <div class="p-6 md:p-10">
                    <div class="photo-frame rounded-xl overflow-hidden">
                        <img src="${data.photo2 || defaultPhoto2}" 
                             alt="Aerial View" 
                             class="w-full object-cover brightness-90">
                    </div>
                </div>

                <!-- ADDRESS – Clean & Elegant -->
                <div class="bg-gradient-to-r from-zinc-950 to-zinc-900 px-10 py-8 text-center">
                    <div class="title text-5xl md:text-6xl font-bold text-white tracking-widest gold-glow">
                        ${data.address ? data.address.toUpperCase() : '1821 RIVERSIDE DRIVE'}
                    </div>
                    <div class="text-xl text-amber-100/70 mt-2 tracking-widest">
                        ORMOND BEACH, FL 32176
                    </div>
                </div>
            </div>
        </div>
    </div>

    <!-- Print Button -->
    <div class="fixed bottom-8 right-8 no-print">
        <button onclick="window.print()" 
                class="bg-white/10 backdrop-blur-sm text-white p-4 rounded-full shadow-xl hover:bg-white/20 transition-all border border-white/30">
            <i class="fas fa-print text-xl"></i>
        </button>
    </div>
</body>
</html>`
};
