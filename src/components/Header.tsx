import React from 'react';
import { Button } from './ui/button';

interface HeaderProps {
  currentPage: 'home' | 'recommendations' | 'about';
  onNavigate: (page: 'home' | 'recommendations' | 'about') => void;
}

export function Header({ currentPage, onNavigate }: HeaderProps) {
  return (
    <header className="bg-white shadow-sm border-b border-blue-100">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold">JR</span>
              </div>
              <h1 className="text-xl font-semibold text-gray-900">Journal Recommender</h1>
            </div>
          </div>
          
          <nav className="flex items-center space-x-1">
            <Button
              variant={currentPage === 'home' ? 'default' : 'ghost'}
              onClick={() => onNavigate('home')}
              className={currentPage === 'home' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              Home
            </Button>
            <Button
              variant={currentPage === 'recommendations' ? 'default' : 'ghost'}
              onClick={() => onNavigate('recommendations')}
              className={currentPage === 'recommendations' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              Recommendations
            </Button>
            <Button
              variant={currentPage === 'about' ? 'default' : 'ghost'}
              onClick={() => onNavigate('about')}
              className={currentPage === 'about' ? 'bg-blue-600 hover:bg-blue-700' : 'hover:bg-blue-50'}
            >
              About
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
}