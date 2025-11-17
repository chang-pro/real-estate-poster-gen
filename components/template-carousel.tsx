'use client';

import React, { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { cn } from '@/lib/utils';
import type { Template, TemplateData } from '../templates';

interface TemplateCarouselProps {
  templates: Template[];
  data: TemplateData;
  onSelectTemplate: (template: Template, html: string) => void;
}

export function TemplateCarousel({ templates, data, onSelectTemplate }: TemplateCarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev === 0 ? templates.length - 1 : prev - 1));
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev === templates.length - 1 ? 0 : prev + 1));
  };

  const currentTemplate = templates[currentIndex];
  const generatedHtml = currentTemplate.generate(data);

  const handleSelect = () => {
    onSelectTemplate(currentTemplate, generatedHtml);
  };

  return (
    <div className="space-y-6">
      {/* Template Counter */}
      <div className="text-center">
        <p className="text-sm text-muted-foreground">
          Template {currentIndex + 1} of {templates.length}
        </p>
        <h3 className="text-2xl font-bold mt-1">{currentTemplate.name}</h3>
      </div>

      {/* Carousel Container */}
      <div className="relative">
        {/* Navigation Buttons */}
        <Button
          variant="outline"
          size="icon"
          onClick={goToPrevious}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur"
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        <Button
          variant="outline"
          size="icon"
          onClick={goToNext}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 h-12 w-12 rounded-full shadow-lg bg-background/95 backdrop-blur"
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Template Preview */}
        <Card className="overflow-hidden border-2">
          <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
            <div className="flex justify-center">
              <div
                dangerouslySetInnerHTML={{ __html: generatedHtml }}
                className="shadow-2xl transform scale-[0.35] origin-center"
                style={{ width: '800px', height: '1000px' }}
              />
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Dots Indicator */}
      <div className="flex justify-center gap-2">
        {templates.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={cn(
              "h-2 rounded-full transition-all",
              index === currentIndex 
                ? "w-8 bg-primary" 
                : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
            )}
          />
        ))}
      </div>

      {/* Select Button */}
      <div className="flex justify-center">
        <Button
          size="lg"
          onClick={handleSelect}
          className="h-14 px-12 text-lg font-bold bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          <Check className="mr-2 h-5 w-5" />
          Select This Template
        </Button>
      </div>
    </div>
  );
}


