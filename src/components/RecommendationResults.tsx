import React from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { JournalCard } from './JournalCard';
import { ArrowLeft, Download, Sparkles } from 'lucide-react';
import type { Journal } from '../types';

interface RecommendationResultsProps {
  recommendations: Journal[];
  onBackToHome: () => void;
}

export function RecommendationResults({ recommendations, onBackToHome }: RecommendationResultsProps) {
  const handleDownloadPDF = () => {
    // In a real app, this would generate and download a PDF
    alert('PDF download functionality would be implemented here');
  };

  const openAccessCount = recommendations.filter(journal => journal.openAccess).length;
  const avgImpactFactor = recommendations.reduce((sum, journal) => sum + journal.impactFactor, 0) / recommendations.length;

  return (
    <div className="max-w-6xl mx-auto space-y-8">
      <div className="flex items-center justify-between">
        <Button
          variant="ghost"
          onClick={onBackToHome}
          className="flex items-center space-x-2 hover:bg-blue-50"
        >
          <ArrowLeft className="h-4 w-4" />
          <span>Back to Home</span>
        </Button>
        
        <Button
          onClick={handleDownloadPDF}
          variant="outline"
          className="flex items-center space-x-2 border-blue-300 hover:bg-blue-50"
        >
          <Download className="h-4 w-4" />
          <span>Download as PDF</span>
        </Button>
      </div>

      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Journal Recommendations</h1>
        </div>
        <p className="text-lg text-gray-600">
          Based on your research abstract, we've found {recommendations.length} relevant journals for you.
        </p>
      </div>

      <Card className="shadow-lg border-blue-100">
        <CardHeader>
          <CardTitle>Recommendation Summary</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
            <div className="space-y-2">
              <div className="text-2xl font-bold text-blue-600">{recommendations.length}</div>
              <div className="text-sm text-gray-600">Total Recommendations</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-green-600">{openAccessCount}</div>
              <div className="text-sm text-gray-600">Open Access Journals</div>
            </div>
            <div className="space-y-2">
              <div className="text-2xl font-bold text-purple-600">{avgImpactFactor.toFixed(1)}</div>
              <div className="text-sm text-gray-600">Average Impact Factor</div>
            </div>
          </div>
        </CardContent>
      </Card>

      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-gray-900">Recommended Journals</h2>
          <div className="flex items-center space-x-2">
            <Badge variant="outline" className="border-blue-300">
              Sorted by Impact Factor
            </Badge>
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {recommendations.map((journal, index) => (
            <JournalCard 
              key={journal.id} 
              journal={journal} 
              rank={index + 1}
            />
          ))}
        </div>
      </div>

      {recommendations.length === 0 && (
        <Card className="text-center py-12">
          <CardContent>
            <div className="space-y-4">
              <div className="text-gray-400">
                <Sparkles className="h-12 w-12 mx-auto mb-4" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">No recommendations found</h3>
              <p className="text-gray-600">
                Please try adjusting your search criteria or check your abstract.
              </p>
              <Button onClick={onBackToHome} className="bg-blue-600 hover:bg-blue-700">
                Try Again
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </div>
  );
}