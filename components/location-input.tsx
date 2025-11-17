'use client';

import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import { Input } from './ui/input';
import { Label } from './ui/label';

interface LocationInputProps {
  value: string;
  onChange: (value: string) => void;
  required?: boolean;
}

export function LocationInput({ value, onChange, required = false }: LocationInputProps) {
  const [focused, setFocused] = useState(false);

  // Sample suggestions - can be replaced with Google Places API
  const sampleLocations = [
    '1821 Riverside Drive, Ormond Beach, FL 32174',
    '123 Ocean Boulevard, Miami Beach, FL 33139',
    '456 Park Avenue, New York, NY 10022',
    '789 Beach Road, Santa Monica, CA 90401',
  ];

  const filteredSuggestions = value.length > 2
    ? sampleLocations.filter(loc =>
        loc.toLowerCase().includes(value.toLowerCase())
      )
    : [];

  return (
    <div className="space-y-2 relative">
      <Label htmlFor="address">
        <div className="flex items-center gap-2">
          <MapPin className="h-4 w-4" />
          Property Address {required && <span className="text-destructive">*</span>}
        </div>
      </Label>
      <Input
        id="address"
        type="text"
        placeholder="e.g., 1821 Riverside Drive, Ormond Beach, FL"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onFocus={() => setFocused(true)}
        onBlur={() => setTimeout(() => setFocused(false), 200)}
        className="pl-3"
      />
      
      {focused && filteredSuggestions.length > 0 && (
        <div className="absolute z-50 w-full mt-1 bg-popover border border-border rounded-md shadow-lg max-h-60 overflow-auto">
          {filteredSuggestions.map((suggestion, index) => (
            <button
              key={index}
              type="button"
              className="w-full text-left px-4 py-3 hover:bg-accent text-sm transition-colors"
              onClick={() => {
                onChange(suggestion);
                setFocused(false);
              }}
            >
              <div className="flex items-center gap-2">
                <MapPin className="h-3 w-3 text-muted-foreground" />
                {suggestion}
              </div>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}


