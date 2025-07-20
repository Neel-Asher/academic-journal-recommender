import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { Button } from './ui/button';
import { ExternalLink, Award, BookOpen, Unlock } from 'lucide-react';
import type { Journal } from '../types';

interface JournalCardProps {
  journal: Journal;
  rank: number;
}

export function JournalCard({ journal, rank }: JournalCardProps) {
  const getImpactFactorColor = (factor: number) => {
    if (factor >= 20) return 'bg-red-100 text-red-800';
    if (factor >= 10) return 'bg-orange-100 text-orange-800';
    if (factor >= 5) return 'bg-yellow-100 text-yellow-800';
    return 'bg-green-100 text-green-800';
  };

  const getRankColor = (rank: number) => {
    if (rank <= 3) return 'bg-gold-100 text-gold-800 border-gold-300';
    if (rank <= 6) return 'bg-silver-100 text-silver-800 border-silver-300';
    return 'bg-bronze-100 text-bronze-800 border-bronze-300';
  };

  return (
    <Card className="hover:shadow-lg transition-shadow duration-200 border-blue-100">
      <CardHeader className="pb-4">
        <div className="flex items-start justify-between">
          <div className="flex items-center space-x-3">
            <Badge variant="outline" className={getRankColor(rank)}>
              #{rank}
            </Badge>
            {journal.openAccess && (
              <Badge variant="outline" className="bg-green-100 text-green-800 border-green-300">
                <Unlock className="h-3 w-3 mr-1" />
                Open Access
              </Badge>
            )}
          </div>
          <div className="flex items-center space-x-2">
            <Award className="h-4 w-4 text-blue-600" />
            <Badge className={getImpactFactorColor(journal.impactFactor)}>
              IF: {journal.impactFactor}
            </Badge>
          </div>
        </div>
        <CardTitle className="text-lg leading-tight">{journal.name}</CardTitle>
      </CardHeader>
      
      <CardContent className="space-y-4">
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <BookOpen className="h-4 w-4 text-gray-500" />
            <span className="text-sm font-medium text-gray-700">Publisher:</span>
            <span className="text-sm text-gray-600">{journal.publisher}</span>
          </div>
          
          <div className="flex items-center space-x-2">
            <div className="h-4 w-4 rounded-full bg-blue-500 flex-shrink-0" />
            <span className="text-sm font-medium text-gray-700">Domain:</span>
            <span className="text-sm text-gray-600">{journal.domain}</span>
          </div>
        </div>

        <div className="text-sm text-gray-600 bg-gray-50 p-3 rounded-lg">
          {journal.description}
        </div>

        <div className="flex items-center justify-between pt-2">
          <div className="text-xs text-gray-500">
            Impact Factor: {journal.impactFactor} • {journal.openAccess ? 'Open Access' : 'Subscription'}
          </div>
          <Button
            variant="outline"
            size="sm"
            className="flex items-center space-x-1 border-blue-300 hover:bg-blue-50"
            onClick={() => window.open(journal.websiteUrl, '_blank')}
          >
            <ExternalLink className="h-3 w-3" />
            <span>Visit Journal</span>
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}