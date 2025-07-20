import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Badge } from './ui/badge';
import { BookOpen, Brain, Target, Users, Zap, Shield, HelpCircle } from 'lucide-react';

export function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-gray-900">About Journal Recommender</h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          An AI-powered tool designed to help researchers find the most relevant academic journals for their work.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border-blue-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Target className="h-5 w-5 text-blue-600" />
              <span>How It Works</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-3">
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-blue-600">1</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Submit Your Abstract</h4>
                  <p className="text-sm text-gray-600">Enter your research abstract or upload a PDF/DOCX file</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-blue-600">2</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">AI Analysis</h4>
                  <p className="text-sm text-gray-600">Our ML model analyzes your content and research domain</p>
                </div>
              </div>
              <div className="flex items-start space-x-3">
                <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                  <span className="text-xs font-medium text-blue-600">3</span>
                </div>
                <div>
                  <h4 className="font-medium text-gray-900">Get Recommendations</h4>
                  <p className="text-sm text-gray-600">Receive ranked journal suggestions with impact factors</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card className="border-green-100">
          <CardHeader>
            <CardTitle className="flex items-center space-x-2">
              <Zap className="h-5 w-5 text-green-600" />
              <span>Key Features</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-3">
            <div className="flex items-center space-x-2">
              <Brain className="h-4 w-4 text-gray-500" />
              <span className="text-sm">AI-powered journal matching</span>
            </div>
            <div className="flex items-center space-x-2">
              <BookOpen className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Impact factor information</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Publisher details</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Open access filtering</span>
            </div>
            <div className="flex items-center space-x-2">
              <Target className="h-4 w-4 text-gray-500" />
              <span className="text-sm">Domain-specific recommendations</span>
            </div>
          </CardContent>
        </Card>
      </div>

      <Card className="border-purple-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <HelpCircle className="h-5 w-5 text-purple-600" />
            <span>Frequently Asked Questions</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="space-y-4">
            <div>
              <h4 className="font-medium text-gray-900 mb-2">How accurate are the recommendations?</h4>
              <p className="text-sm text-gray-600">
                Our AI model is trained on millions of research papers and journal data to provide highly relevant suggestions. 
                The recommendations are ranked by relevance and include impact factors to help you make informed decisions.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What file formats are supported?</h4>
              <p className="text-sm text-gray-600">
                You can upload PDF and DOCX files, or simply paste your abstract directly into the text area. 
                Our system will automatically extract and analyze the content.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">Is my research data secure?</h4>
              <p className="text-sm text-gray-600">
                Yes, we take data security seriously. Your abstracts are processed securely and are not stored permanently. 
                We only use the information to generate recommendations.
              </p>
            </div>
            
            <div>
              <h4 className="font-medium text-gray-900 mb-2">What research domains are supported?</h4>
              <p className="text-sm text-gray-600">
                We support a wide range of research domains including Computer Science, Engineering, Medicine, Biology, 
                Physics, Chemistry, Mathematics, and many more. The system can also work without specifying a domain.
              </p>
            </div>
          </div>
        </CardContent>
      </Card>

      <Card className="bg-blue-50 border-blue-200">
        <CardContent className="p-6">
          <div className="text-center space-y-4">
            <h3 className="text-lg font-semibold text-blue-900">Ready to find the perfect journal?</h3>
            <p className="text-sm text-blue-700">
              Start by entering your research abstract and let our AI find the best journals for your work.
            </p>
            <div className="flex flex-wrap justify-center gap-2">
              <Badge variant="outline" className="border-blue-300">Machine Learning</Badge>
              <Badge variant="outline" className="border-blue-300">Academic Publishing</Badge>
              <Badge variant="outline" className="border-blue-300">Research Tools</Badge>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}