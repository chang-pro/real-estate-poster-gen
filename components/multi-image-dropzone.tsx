'use client';

import React, { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
import { Upload, X, Image as ImageIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import { Button } from './ui/button';

interface MultiImageDropzoneProps {
  onImagesUpload: (images: string[]) => void;
  currentImages: string[];
  maxImages?: number;
}

export function MultiImageDropzone({ 
  onImagesUpload, 
  currentImages, 
  maxImages = 3 
}: MultiImageDropzoneProps) {
  const [images, setImages] = useState<string[]>(currentImages);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const remainingSlots = maxImages - images.length;
    const filesToProcess = acceptedFiles.slice(0, remainingSlots);

    filesToProcess.forEach((file) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const base64 = e.target?.result as string;
        setImages((prev) => {
          const newImages = [...prev, base64];
          onImagesUpload(newImages);
          return newImages;
        });
      };
      reader.readAsDataURL(file);
    });
  }, [images.length, maxImages, onImagesUpload]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpg', '.jpeg', '.webp', '.gif']
    },
    multiple: true,
    maxSize: 10485760, // 10MB per file
    disabled: images.length >= maxImages,
  });

  const removeImage = (index: number) => {
    const newImages = images.filter((_, i) => i !== index);
    setImages(newImages);
    onImagesUpload(newImages);
  };

  return (
    <div className="space-y-4">
      {/* Upload Zone */}
      {images.length < maxImages && (
        <div
          {...getRootProps()}
          className={cn(
            "relative border-2 border-dashed rounded-xl p-8 sm:p-12 transition-all cursor-pointer backdrop-blur-xl",
            isDragActive 
              ? "border-cyan-500 bg-cyan-500/10 scale-[1.02]" 
              : "border-black/20 dark:border-white/20 hover:border-cyan-500/50 hover:bg-black/5 dark:hover:bg-white/5"
          )}
        >
          <input {...getInputProps()} />
          
          <div className="flex flex-col items-center justify-center text-center space-y-4">
            <div className={cn(
              "rounded-full p-4 sm:p-6",
              isDragActive ? "bg-cyan-500/20" : "bg-black/5 dark:bg-white/10"
            )}>
              {isDragActive ? (
                <Upload className="h-8 w-8 sm:h-10 sm:w-10 text-cyan-500 animate-bounce" />
              ) : (
                <ImageIcon className="h-8 w-8 sm:h-10 sm:w-10 text-black/60 dark:text-white/60" />
              )}
            </div>
            
            <div className="space-y-2">
              <p className="text-base sm:text-lg font-semibold text-black dark:text-white">
                {isDragActive 
                  ? "Drop photos here" 
                  : "Upload Property Photos"
                }
              </p>
              <p className="text-xs sm:text-sm text-black/60 dark:text-white/60">
                Drag & drop or click to browse • Max {maxImages} photos
              </p>
              <p className="text-xs text-black/40 dark:text-white/40">
                PNG, JPG, WEBP up to 10MB each
              </p>
            </div>
            
            {images.length > 0 && (
              <p className="text-xs sm:text-sm font-medium text-cyan-600 dark:text-cyan-400">
                {images.length} of {maxImages} photos uploaded
              </p>
            )}
          </div>
        </div>
      )}

      {/* Preview Grid */}
      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group aspect-video rounded-lg overflow-hidden border-2 border-black/10 dark:border-white/20">
              <img
                src={image}
                alt={`Property ${index + 1}`}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                <Button
                  type="button"
                  variant="destructive"
                  size="icon"
                  onClick={() => removeImage(index)}
                  className="h-10 w-10 bg-red-500 hover:bg-red-600"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>
              <div className="absolute bottom-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                Photo {index + 1}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

