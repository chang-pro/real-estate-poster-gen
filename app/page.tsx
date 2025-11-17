'use client';

import { useState, useRef, useEffect } from 'react';
import { allTemplates, type Template, type TemplateData } from '../templates/index';
import html2canvas from 'html2canvas';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';
import { MultiImageDropzone } from '@/components/multi-image-dropzone';
import { ThemeToggle } from '@/components/theme-toggle';
import { Sparkles, MapPin, DollarSign, Download, FileCode, ChevronLeft, ChevronRight, Edit3, Check, X, Zap, Menu } from 'lucide-react';
import { cn } from '@/lib/utils';

export default function Home() {
  const [images, setImages] = useState<string[]>([]);
  const [propertyData, setPropertyData] = useState({
    address: '',
    headline: '',
    price: '',
    city: '',
    state: '',
    zip: '',
    description: '',
    agentName: '',
    agentPhone: '',
    agentEmail: '',
  });
  const [currentTemplateIndex, setCurrentTemplateIndex] = useState(0);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');
  const [processedHTML, setProcessedHTML] = useState('');
  const [isHovering, setIsHovering] = useState(false);
  const iframeRef = useRef<HTMLIFrameElement>(null);

  const currentTemplate = allTemplates[currentTemplateIndex];

  useEffect(() => {
    // Prepare template data
    const templateData: TemplateData = {
      headline: propertyData.headline || '',
      address: propertyData.address || '',
      price: propertyData.price || '',
      photo1: images[0] || '',
      photo2: images[1] || '',
      photo3: images[2] || '',
    };

    // Debug logging
    console.log('Template Data:', {
      address: templateData.address,
      price: templateData.price,
      photo1: templateData.photo1 ? 'Has photo' : 'No photo',
      photo2: templateData.photo2 ? 'Has photo' : 'No photo',
    });

    // Generate HTML from template
    const generatedHTML = currentTemplate.generate(templateData);
    
    // Check if template already has full HTML document structure
    const isFullDocument = generatedHTML.trim().startsWith('<!DOCTYPE html>');
    
    // If already full document, use as-is; otherwise wrap it
    const fullHTML = isFullDocument ? generatedHTML : `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${propertyData.address || 'Property Poster'}</title>
    <script src="https://cdn.tailwindcss.com"></script>
</head>
<body style="margin: 0; padding: 0; width: 1080px; height: 1350px; display: flex; align-items: center; justify-content: center; background: #f0f0f0;">
    ${generatedHTML}
</body>
</html>`;
    
    setProcessedHTML(fullHTML);
  }, [currentTemplate, propertyData, images]);

  // Write HTML directly to iframe document for proper rendering
  useEffect(() => {
    if (iframeRef.current && processedHTML) {
      const iframe = iframeRef.current;
      const iframeDoc = iframe.contentDocument || iframe.contentWindow?.document;
      
      if (iframeDoc) {
        // Log for debugging
        console.log('✅ Processing template with data:', {
          headline: propertyData.headline,
          address: propertyData.address,
          price: propertyData.price,
          hasPhoto1: !!images[0],
          hasPhoto2: !!images[1],
        });
        console.log('📄 Processed HTML length:', processedHTML.length);
        
        iframeDoc.open();
        iframeDoc.write(processedHTML);
        iframeDoc.close();
        
        // Wait for content to load then auto-size
        setTimeout(() => {
          if (iframe.contentWindow) {
            const body = iframe.contentWindow.document.body;
            const html = iframe.contentWindow.document.documentElement;
            const height = Math.max(
              body.scrollHeight,
              body.offsetHeight,
              html.clientHeight,
              html.scrollHeight,
              html.offsetHeight
            );
            console.log('📐 Iframe content height:', height);
          }
        }, 100);
      }
    }
  }, [processedHTML, propertyData, images]);

  const goToPrevious = () => {
    setCurrentTemplateIndex((prev) => (prev === 0 ? allTemplates.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentTemplateIndex((prev) => (prev === allTemplates.length - 1 ? 0 : prev + 1));
  };

  const handleEdit = (field: 'headline' | 'address' | 'price') => {
    setEditingField(field);
    setTempValue(propertyData[field]);
  };

  const handleSave = () => {
    if (editingField) {
      setPropertyData({ ...propertyData, [editingField]: tempValue });
      setEditingField(null);
    }
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue('');
  };

  const downloadPNG = async () => {
    const iframe = iframeRef.current;
    if (!iframe || !iframe.contentDocument) return;

    try {
      const canvas = await html2canvas(iframe.contentDocument.body, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
        width: 1080,
        height: 1350,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${currentTemplate.name}-${Date.now()}.png`;
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    } catch (error) {
      console.error('Error downloading PNG:', error);
      alert('Error downloading PNG. Please try again.');
    }
  };

  const downloadHTML = () => {
    const blob = new Blob([processedHTML], { type: 'text/html' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = `${currentTemplate.name}-${Date.now()}.html`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-cyan-50 dark:from-black dark:via-purple-950/20 dark:to-black overflow-hidden transition-colors duration-500">
      {/* Enhanced Animated Background */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        {/* Mesh Gradient */}
        <div className="absolute inset-0 mesh-gradient" />
        
        {/* Noise Texture */}
        <div className="absolute inset-0 noise-texture" />
        
        {/* Dot Pattern */}
        <div className="absolute inset-0 dot-pattern opacity-[0.03] dark:opacity-[0.05] text-purple-600 dark:text-cyan-400" />
        
        {/* Floating Orbs */}
        <motion.div
          className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-500/30 dark:bg-purple-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 1],
            opacity: [0.3, 0.5, 0.3],
            x: [0, 50, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-cyan-500/30 dark:bg-cyan-500/20 rounded-full blur-3xl"
          animate={{
            scale: [1.3, 1, 1.3],
            opacity: [0.5, 0.3, 0.5],
            x: [0, -50, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-pink-500/20 dark:bg-pink-500/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.2, 0.4, 0.2],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10">
        {/* Hero Header with Theme Toggle */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative border-b border-black/5 dark:border-white/10 backdrop-blur-sm"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
            {/* Theme Toggle - Top Right */}
            <div className="absolute top-6 right-6">
              <ThemeToggle />
            </div>

            <div className="text-center space-y-4 sm:space-y-6">
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 sm:px-6 py-2 sm:py-3 bg-white/60 dark:bg-white/5 backdrop-blur-xl rounded-full border border-black/10 dark:border-white/10"
              >
                <Zap className="h-3 w-3 sm:h-4 sm:w-4 text-purple-600 dark:text-cyan-400" />
                <span className="text-xs sm:text-sm font-medium text-black/80 dark:text-white/90">AI-Powered • Award-Winning Design</span>
              </motion.div>
              
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-black tracking-tighter leading-none"
              >
                <span className="bg-gradient-to-r from-purple-600 via-pink-600 to-cyan-600 dark:from-white dark:via-violet-200 dark:to-cyan-200 bg-clip-text text-transparent">
                  Real Estate
                </span>
                <br />
                <span className="bg-gradient-to-r from-cyan-600 via-purple-600 to-pink-600 dark:from-cyan-200 dark:via-violet-200 dark:to-white bg-clip-text text-transparent">
                  Poster Generator
                </span>
              </motion.h1>
              
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.8 }}
                className="text-sm sm:text-base md:text-lg lg:text-xl text-black/60 dark:text-white/60 max-w-2xl mx-auto font-light px-4"
              >
                Create stunning marketing materials with our award-winning template system
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* Main Content */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 lg:py-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12">
            
            {/* LEFT COLUMN */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              className="space-y-6 sm:space-y-8"
            >
              
              {/* Photo Upload */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
                  <CardHeader className="border-b border-black/5 dark:border-white/10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 text-black dark:text-white">
                      <motion.div
                        animate={{ rotate: [0, 360] }}
                        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                      >
                        <Sparkles className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-cyan-400" />
                      </motion.div>
                      <span className="flex-1">Upload Photos</span>
                      <span className="text-xs sm:text-sm font-normal text-black/50 dark:text-white/50">Max 3</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 lg:p-8">
                    <MultiImageDropzone
                      onImagesUpload={setImages}
                      currentImages={images}
                      maxImages={3}
                    />
                  </CardContent>
                </Card>
              </motion.div>

              {/* Property Details */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl">
                  <CardHeader className="border-b border-black/5 dark:border-white/10 bg-gradient-to-r from-cyan-500/10 to-purple-500/10 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 text-black dark:text-white">
                      <MapPin className="h-5 w-5 sm:h-6 sm:w-6 text-cyan-600 dark:text-violet-400" />
                      Property Details
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6 lg:p-8 space-y-4 sm:space-y-6">
                    {/* Address */}
                    <div className="space-y-2 sm:space-y-3">
                      <Label className="flex items-center gap-2 text-black/80 dark:text-white/80 text-xs sm:text-sm font-medium">
                        <MapPin className="h-3 w-3 sm:h-4 sm:w-4" />
                        Address
                      </Label>
                      {editingField === 'address' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-2"
                        >
                          <Input
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/30"
                            autoFocus
                          />
                          <Button size="icon" className="bg-cyan-500 hover:bg-cyan-600 shrink-0" onClick={handleSave}>
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="outline" className="border-black/20 dark:border-white/20 shrink-0" onClick={handleCancel}>
                            <X className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ) : (
                        <div className="flex gap-2">
                          <Input
                            value={propertyData.address}
                            onChange={(e) => setPropertyData({ ...propertyData, address: e.target.value })}
                            placeholder="Enter property address (required)"
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/30 text-sm sm:text-base"
                          />
                          <Button size="icon" variant="ghost" className="hover:bg-black/5 dark:hover:bg-white/10 shrink-0" onClick={() => handleEdit('address')}>
                            <Edit3 className="h-4 w-4 text-black/60 dark:text-white/60" />
                          </Button>
                        </div>
                      )}
                    </div>

                    <Separator className="bg-black/10 dark:bg-white/10" />

                    {/* Headline */}
                    <div className="space-y-2 sm:space-y-3">
                      <Label className="flex items-center gap-2 text-black/80 dark:text-white/80 text-xs sm:text-sm font-medium">
                        <Sparkles className="h-3 w-3 sm:h-4 sm:w-4" />
                        Headline <span className="text-black/40 dark:text-white/40 text-xs ml-2">Optional</span>
                      </Label>
                      {editingField === 'headline' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-2"
                        >
                          <Input
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white"
                            autoFocus
                          />
                          <Button size="icon" className="bg-purple-500 hover:bg-purple-600 shrink-0" onClick={handleSave}>
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="outline" className="border-black/20 dark:border-white/20 shrink-0" onClick={handleCancel}>
                            <X className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ) : (
                        <div className="flex gap-2">
                          <Input
                            value={propertyData.headline}
                            onChange={(e) => setPropertyData({ ...propertyData, headline: e.target.value })}
                            placeholder="Enter headline (optional)"
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/30 text-sm sm:text-base"
                          />
                          <Button size="icon" variant="ghost" className="hover:bg-black/5 dark:hover:bg-white/10 shrink-0" onClick={() => handleEdit('headline')}>
                            <Edit3 className="h-4 w-4 text-black/60 dark:text-white/60" />
                          </Button>
                        </div>
                      )}
                    </div>

                    {/* Price */}
                    <div className="space-y-2 sm:space-y-3">
                      <Label className="flex items-center gap-2 text-black/80 dark:text-white/80 text-xs sm:text-sm font-medium">
                        <DollarSign className="h-3 w-3 sm:h-4 sm:w-4" />
                        Price <span className="text-black/40 dark:text-white/40 text-xs ml-2">Optional</span>
                      </Label>
                      {editingField === 'price' ? (
                        <motion.div
                          initial={{ opacity: 0 }}
                          animate={{ opacity: 1 }}
                          className="flex gap-2"
                        >
                          <Input
                            value={tempValue}
                            onChange={(e) => setTempValue(e.target.value)}
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white"
                            autoFocus
                          />
                          <Button size="icon" className="bg-cyan-500 hover:bg-cyan-600 shrink-0" onClick={handleSave}>
                            <Check className="h-4 w-4" />
                          </Button>
                          <Button size="icon" variant="outline" className="border-black/20 dark:border-white/20 shrink-0" onClick={handleCancel}>
                            <X className="h-4 w-4" />
                          </Button>
                        </motion.div>
                      ) : (
                        <div className="flex gap-2">
                          <Input
                            value={propertyData.price}
                            onChange={(e) => setPropertyData({ ...propertyData, price: e.target.value })}
                            placeholder="Enter price without $ (optional)"
                            className="flex-1 bg-white/60 dark:bg-white/5 border-black/20 dark:border-white/20 text-black dark:text-white placeholder:text-black/40 dark:placeholder:text-white/30 text-sm sm:text-base"
                          />
                          <Button size="icon" variant="ghost" className="hover:bg-black/5 dark:hover:bg-white/10 shrink-0" onClick={() => handleEdit('price')}>
                            <Edit3 className="h-4 w-4 text-black/60 dark:text-white/60" />
                          </Button>
                        </div>
                      )}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Download Buttons */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-500/5 dark:to-cyan-500/5 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl">
                  <CardHeader className="border-b border-black/5 dark:border-white/10 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 text-black dark:text-white">
                      <Download className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-violet-400" />
                      Export Poster
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-3 sm:space-y-4">
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={downloadPNG}
                          className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold bg-gradient-to-r from-cyan-500 to-purple-500 hover:from-cyan-600 hover:to-purple-600 shadow-lg"
                        >
                          <Download className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="truncate">Download PNG</span>
                        </Button>
                      </motion.div>
                      
                      <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                        <Button
                          onClick={downloadHTML}
                          className="w-full h-12 sm:h-14 text-base sm:text-lg font-bold bg-white/60 dark:bg-white/10 hover:bg-white/80 dark:hover:bg-white/20 border-2 border-black/10 dark:border-white/20 text-black dark:text-white backdrop-blur-xl"
                        >
                          <FileCode className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                          <span className="truncate">Download HTML</span>
                        </Button>
                      </motion.div>

                      <p className="text-xs text-center text-black/40 dark:text-white/40 pt-2">
                        PNG for printing • HTML for web
                      </p>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

            {/* RIGHT COLUMN - Preview & Template Selector */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
              className="space-y-6"
            >
              {/* Live Preview */}
              <motion.div
                onHoverStart={() => setIsHovering(true)}
                onHoverEnd={() => setIsHovering(false)}
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-white/80 dark:bg-white/5 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl overflow-hidden">
                  <CardHeader className="border-b border-black/5 dark:border-white/10 bg-gradient-to-r from-purple-500/10 to-cyan-500/10 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center justify-between text-black dark:text-white">
                      <span className="flex items-center gap-2">
                        <span className="truncate">Live Preview</span>
                        <motion.span
                          animate={{ scale: isHovering ? [1, 1.2, 1] : 1 }}
                          transition={{ repeat: isHovering ? Infinity : 0, duration: 1 }}
                          className="inline-block w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-green-500 shrink-0"
                        />
                      </span>
                      <span className="text-xs font-normal text-black/50 dark:text-white/50">
                        Real-time
                      </span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 bg-gradient-to-br from-black/5 to-transparent dark:from-black/50 dark:to-black/30">
                    <motion.div
                      className="w-full"
                      animate={{ y: isHovering ? -10 : 0 }}
                      transition={{ type: "spring", stiffness: 300 }}
                    >
                      <div className="flex justify-center">
                        <div className="relative">
                          <div className="absolute -inset-4 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 dark:from-purple-500/10 dark:to-cyan-500/10 rounded-lg blur-xl" />
                          <div className="relative shadow-2xl rounded-lg overflow-hidden bg-white" style={{ width: '432px', height: '540px' }}>
                            <iframe
                              ref={iframeRef}
                              className="border-0"
                              style={{ 
                                width: '1080px', 
                                height: '1350px',
                                transform: 'scale(0.4)',
                                transformOrigin: 'top left',
                                display: 'block',
                                border: 'none',
                                overflow: 'hidden'
                              }}
                              title="Instagram/Facebook Post Preview"
                              sandbox="allow-same-origin allow-scripts"
                            />
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </CardContent>
                </Card>
              </motion.div>

              {/* Template Chooser */}
              <motion.div
                whileHover={{ scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card className="bg-gradient-to-br from-purple-500/10 to-cyan-500/10 dark:from-purple-500/5 dark:to-cyan-500/5 backdrop-blur-2xl border-black/10 dark:border-white/10 shadow-2xl">
                  <CardHeader className="border-b border-black/5 dark:border-white/10 p-4 sm:p-6">
                    <CardTitle className="text-lg sm:text-xl md:text-2xl flex items-center gap-2 sm:gap-3 text-black dark:text-white">
                      <Edit3 className="h-5 w-5 sm:h-6 sm:w-6 text-purple-600 dark:text-violet-400" />
                      Choose Template
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="p-4 sm:p-6">
                    <div className="space-y-4">
                      {/* Photo Count Badge */}
                      <div className="flex justify-center">
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 dark:bg-white/10 backdrop-blur-xl rounded-full border border-black/10 dark:border-white/20">
                          <Sparkles className="h-4 w-4 text-purple-600 dark:text-cyan-400" />
                          <span className="text-xs sm:text-sm font-medium text-black dark:text-white">
                            {currentTemplate.photoCount} Photo{currentTemplate.photoCount > 1 ? 's' : ''}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center justify-between gap-4">
                        <motion.button
                          whileHover={{ scale: 1.1, x: -5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={goToPrevious}
                          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/20 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-colors backdrop-blur-xl shrink-0"
                        >
                          <ChevronLeft className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
                        </motion.button>
                        
                        <div className="text-center flex-1">
                          <motion.p
                            key={currentTemplateIndex}
                            initial={{ opacity: 0, y: -20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-xs sm:text-sm text-black/50 dark:text-white/50 mb-1"
                          >
                            {currentTemplateIndex + 1} of {allTemplates.length}
                          </motion.p>
                          <motion.h3
                            key={currentTemplate.name}
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            className="text-lg sm:text-xl md:text-2xl font-bold text-black dark:text-white"
                          >
                            {currentTemplate.name}
                          </motion.h3>
                        </div>

                        <motion.button
                          whileHover={{ scale: 1.1, x: 5 }}
                          whileTap={{ scale: 0.95 }}
                          onClick={goToNext}
                          className="h-12 w-12 sm:h-14 sm:w-14 rounded-full bg-white/60 dark:bg-white/10 border border-black/10 dark:border-white/20 flex items-center justify-center hover:bg-white/80 dark:hover:bg-white/20 transition-colors backdrop-blur-xl shrink-0"
                        >
                          <ChevronRight className="h-5 w-5 sm:h-6 sm:w-6 text-black dark:text-white" />
                        </motion.button>
                      </div>

                      {/* Dots Indicator */}
                      <div className="flex justify-center gap-1.5 sm:gap-2 flex-wrap">
                        {allTemplates.map((_, index) => (
                          <motion.button
                            key={index}
                            onClick={() => setCurrentTemplateIndex(index)}
                            whileHover={{ scale: 1.3 }}
                            className={cn(
                              "h-2 rounded-full transition-all",
                              index === currentTemplateIndex 
                                ? "w-8 sm:w-12 bg-gradient-to-r from-purple-600 to-cyan-600 dark:from-purple-400 dark:to-cyan-400" 
                                : "w-2 bg-black/20 dark:bg-white/20 hover:bg-black/40 dark:hover:bg-white/40"
                            )}
                          />
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </div>
    </div>
  );
}
