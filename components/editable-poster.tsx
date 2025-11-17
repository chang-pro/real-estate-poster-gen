'use client';

import React, { useState, useRef } from 'react';
import { Download, Edit3, Check, X } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import html2canvas from 'html2canvas';
import type { Template, TemplateData } from '../templates';

interface EditablePosterProps {
  template: Template;
  initialData: TemplateData;
  onBack: () => void;
}

export function EditablePoster({ template, initialData, onBack }: EditablePosterProps) {
  const [data, setData] = useState<TemplateData>(initialData);
  const [editingField, setEditingField] = useState<string | null>(null);
  const [tempValue, setTempValue] = useState('');
  const posterRef = useRef<HTMLDivElement>(null);

  const handleEdit = (field: keyof TemplateData) => {
    setEditingField(field);
    setTempValue(data[field] || '');
  };

  const handleSave = () => {
    if (editingField) {
      setData({ ...data, [editingField]: tempValue });
      setEditingField(null);
    }
  };

  const handleCancel = () => {
    setEditingField(null);
    setTempValue('');
  };

  const downloadPoster = async () => {
    const element = posterRef.current;
    if (!element) return;

    try {
      const canvas = await html2canvas(element, {
        scale: 2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: null,
      });

      canvas.toBlob((blob) => {
        if (blob) {
          const url = URL.createObjectURL(blob);
          const a = document.createElement('a');
          a.href = url;
          a.download = `${template.name}-${Date.now()}.png`;
          a.click();
          URL.revokeObjectURL(url);
        }
      });
    } catch (error) {
      console.error('Error downloading poster:', error);
      alert('Error downloading poster. Please try again.');
    }
  };

  const generatedHtml = template.generate(data);

  return (
    <div className="space-y-8">
      {/* Edit Panel */}
      <Card>
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
          <CardTitle className="flex items-center gap-2">
            <Edit3 className="h-5 w-5" />
            Edit Poster Content
          </CardTitle>
        </CardHeader>
        <CardContent className="p-6 space-y-4">
          {/* Edit Headline */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Headline</label>
            {editingField === 'headline' ? (
              <div className="flex gap-2">
                <Input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
                <Button size="icon" variant="default" onClick={handleSave}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="flex-1 p-3 border rounded-md bg-muted/30">
                  {data.headline || '(No headline)'}
                </div>
                <Button size="icon" variant="outline" onClick={() => handleEdit('headline')}>
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Edit Address */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Address</label>
            {editingField === 'address' ? (
              <div className="flex gap-2">
                <Input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
                <Button size="icon" variant="default" onClick={handleSave}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="flex-1 p-3 border rounded-md bg-muted/30">
                  {data.address}
                </div>
                <Button size="icon" variant="outline" onClick={() => handleEdit('address')}>
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>

          {/* Edit Price */}
          <div className="space-y-2">
            <label className="text-sm font-medium">Price</label>
            {editingField === 'price' ? (
              <div className="flex gap-2">
                <Input
                  value={tempValue}
                  onChange={(e) => setTempValue(e.target.value)}
                  className="flex-1"
                  autoFocus
                />
                <Button size="icon" variant="default" onClick={handleSave}>
                  <Check className="h-4 w-4" />
                </Button>
                <Button size="icon" variant="outline" onClick={handleCancel}>
                  <X className="h-4 w-4" />
                </Button>
              </div>
            ) : (
              <div className="flex gap-2">
                <div className="flex-1 p-3 border rounded-md bg-muted/30">
                  ${data.price || '(No price)'}
                </div>
                <Button size="icon" variant="outline" onClick={() => handleEdit('price')}>
                  <Edit3 className="h-4 w-4" />
                </Button>
              </div>
            )}
          </div>
        </CardContent>
      </Card>

      {/* Poster Preview */}
      <Card className="overflow-hidden">
        <CardHeader className="bg-gradient-to-r from-slate-50 to-blue-50 border-b">
          <CardTitle>Live Preview - {template.name}</CardTitle>
        </CardHeader>
        <CardContent className="p-8 bg-gradient-to-br from-slate-50 to-blue-50">
          <div className="flex justify-center">
            <div
              ref={posterRef}
              dangerouslySetInnerHTML={{ __html: generatedHtml }}
              className="shadow-2xl"
              style={{ width: '800px', height: '1000px', transform: 'scale(0.4)', transformOrigin: 'top center' }}
            />
          </div>
        </CardContent>
      </Card>

      {/* Action Buttons */}
      <div className="flex gap-4 justify-center">
        <Button
          size="lg"
          variant="outline"
          onClick={onBack}
          className="h-12 px-8"
        >
          ← Back to Templates
        </Button>
        <Button
          size="lg"
          onClick={downloadPoster}
          className="h-12 px-12 bg-gradient-to-r from-green-600 to-emerald-600 hover:from-green-700 hover:to-emerald-700"
        >
          <Download className="mr-2 h-5 w-5" />
          Download Poster
        </Button>
      </div>
    </div>
  );
}


