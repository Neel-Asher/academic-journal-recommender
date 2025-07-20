import React, { useState } from 'react';
import { Header } from './components/Header';
import { AbstractInput } from './components/AbstractInput';
import { RecommendationResults } from './components/RecommendationResults';
import { AboutPage } from './components/AboutPage';
import { LoadingSpinner } from './components/LoadingSpinner';
import { ErrorMessage } from './components/ErrorMessage';
import type { Journal, RecommendationRequest } from './types';


export default function App() {
  const [currentPage, setCurrentPage] = useState<'home' | 'recommendations' | 'about'>('home');
  const [recommendations, setRecommendations] = useState<Journal[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [lastRequest, setLastRequest] = useState<RecommendationRequest | null>(null);

  const handleGetRecommendations = async (request: RecommendationRequest) => {
    setLoading(true);
    setError(null);
    setLastRequest(request);

    try {
      // Simulate API call with mock data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      const mockRecommendations: Journal[] = [
        {
          id: '1',
          name: 'Nature Machine Intelligence',
          impactFactor: 25.898,
          publisher: 'Nature Publishing Group',
          websiteUrl: 'https://nature.com/natmachintell',
          openAccess: false,
          domain: 'Computer Science',
          description: 'A premier journal for machine learning and AI research with high impact factor.'
        },
        {
          id: '2',
          name: 'Journal of Machine Learning Research',
          impactFactor: 4.994,
          publisher: 'MIT Press',
          websiteUrl: 'https://jmlr.org',
          openAccess: true,
          domain: 'Computer Science',
          description: 'Leading open-access journal for machine learning research and methodology.'
        },
        {
          id: '3',
          name: 'IEEE Transactions on Pattern Analysis and Machine Intelligence',
          impactFactor: 24.314,
          publisher: 'IEEE',
          websiteUrl: 'https://ieee.org/tpami',
          openAccess: false,
          domain: 'Computer Science',
          description: 'Top-tier journal for pattern recognition and machine intelligence.'
        },
        {
          id: '4',
          name: 'Machine Learning',
          impactFactor: 7.467,
          publisher: 'Springer',
          websiteUrl: 'https://springer.com/journal/10994',
          openAccess: false,
          domain: 'Computer Science',
          description: 'Long-established journal covering all aspects of machine learning.'
        },
        {
          id: '5',
          name: 'Neural Networks',
          impactFactor: 7.197,
          publisher: 'Elsevier',
          websiteUrl: 'https://elsevier.com/locate/neunet',
          openAccess: false,
          domain: 'Computer Science',
          description: 'Specialized journal for neural network research and applications.'
        },
        {
          id: '6',
          name: 'AI Magazine',
          impactFactor: 4.333,
          publisher: 'AAAI Press',
          websiteUrl: 'https://aaai.org/magazine',
          openAccess: true,
          domain: 'Computer Science',
          description: 'Open-access magazine covering artificial intelligence research and applications.'
        }
      ];

      // Filter by open access if requested
      const filteredRecommendations = request.openAccessOnly 
        ? mockRecommendations.filter(journal => journal.openAccess)
        : mockRecommendations;

      setRecommendations(filteredRecommendations);
      setCurrentPage('recommendations');
    } catch (err) {
      setError('Failed to get recommendations. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const handleRetry = () => {
    if (lastRequest) {
      handleGetRecommendations(lastRequest);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-white">
      <Header currentPage={currentPage} onNavigate={setCurrentPage} />
      
      <main className="container mx-auto px-4 py-8">
        {loading && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <LoadingSpinner />
          </div>
        )}

        {error && (
          <ErrorMessage 
            message={error} 
            onRetry={handleRetry}
            onDismiss={() => setError(null)}
          />
        )}

        {currentPage === 'home' && (
          <AbstractInput onGetRecommendations={handleGetRecommendations} />
        )}

        {currentPage === 'recommendations' && (
          <RecommendationResults 
            recommendations={recommendations}
            onBackToHome={() => setCurrentPage('home')}
          />
        )}

        {currentPage === 'about' && <AboutPage />}
      </main>
    </div>
  );
}