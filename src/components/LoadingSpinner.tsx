import React from 'react';
import { Card, CardContent } from './ui/card';
import { Loader2, Brain, Sparkles } from 'lucide-react';

export function LoadingSpinner() {
  return (
    <Card className="w-full max-w-md mx-auto shadow-lg">
      <CardContent className="p-8">
        <div className="flex flex-col items-center space-y-6">
          <div className="relative">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-blue-600" />
              <Sparkles className="h-6 w-6 text-blue-400" />
            </div>
            <Loader2 className="h-12 w-12 text-blue-600 animate-spin absolute -top-2 -left-2" />
          </div>
          
          <div className="text-center space-y-2">
            <h3 className="text-lg font-semibold text-gray-900">
              Analyzing Your Abstract
            </h3>
            <p className="text-sm text-gray-600">
              Our AI is processing your research abstract and finding the best journal matches...
            </p>
          </div>
          
          <div className="w-full bg-gray-200 rounded-full h-2">
            <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
          </div>
          
          <div className="text-xs text-gray-500 text-center">
            <p>This may take a few moments</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}