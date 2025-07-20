import React, { useState } from 'react';
import { Button } from './ui/button';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Textarea } from './ui/textarea';
import { Label } from './ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Switch } from './ui/switch';
import { Upload, FileText, Sparkles } from 'lucide-react';
import type { RecommendationRequest } from '../types';

interface AbstractInputProps {
  onGetRecommendations: (request: RecommendationRequest) => void;
}

export function AbstractInput({ onGetRecommendations }: AbstractInputProps) {
  const [abstract, setAbstract] = useState('');
  const [domain, setDomain] = useState<string>('');
  const [openAccessOnly, setOpenAccessOnly] = useState(false);
  const [file, setFile] = useState<File | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!abstract.trim()) return;

    onGetRecommendations({
      abstract: abstract.trim(),
      domain: domain || undefined,
      openAccessOnly,
    });
  };

  const handleFileUpload = async (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFile = e.target.files?.[0];
    if (!selectedFile) return;

    setFile(selectedFile);

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const res = await fetch('http://localhost:8000/extract', {
        method: 'POST',
        body: formData,
      });

      if (!res.ok) throw new Error('File upload failed');

      const data = await res.json();
      setAbstract(data.abstract || ''); // assuming backend returns { abstract: "..." }
    } catch (err) {
      console.error('Error uploading file:', err);
      // optionally show user-friendly error
    }
  };

  const domains = [
    'Computer Science',
    'Engineering',
    'Medicine',
    'Biology',
    'Physics',
    'Chemistry',
    'Mathematics',
    'Psychology',
    'Business',
    'Social Sciences',
    'Environmental Science',
    'Materials Science',
  ];

  return (
    <div className="max-w-4xl mx-auto space-y-8">
      <div className="text-center space-y-4">
        <div className="flex items-center justify-center space-x-2">
          <Sparkles className="h-8 w-8 text-blue-600" />
          <h1 className="text-3xl font-bold text-gray-900">Academic Journal Recommender</h1>
        </div>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          Get personalized journal recommendations based on your research abstract. 
          Our AI-powered tool analyzes your work and suggests the most relevant academic journals.
        </p>
      </div>

      <Card className="shadow-lg border-blue-100">
        <CardHeader>
          <CardTitle className="flex items-center space-x-2">
            <FileText className="h-5 w-5 text-blue-600" />
            <span>Enter Your Research Abstract</span>
          </CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="abstract">Research Abstract</Label>
              <Textarea
                id="abstract"
                placeholder="Paste your research paper abstract here..."
                value={abstract}
                onChange={(e) => setAbstract(e.target.value)}
                className="min-h-[200px] resize-none"
                required
              />
              <p className="text-sm text-gray-500">
                Enter the abstract of your research paper to get personalized journal recommendations.
              </p>
            </div>

            <div className="border-t pt-4">
              <Label className="text-sm font-medium text-gray-700 mb-3 block">
                Or upload a file (PDF/DOCX)
              </Label>
              <div className="relative">
                <input
                  type="file"
                  accept=".pdf,.docx,.doc"
                  onChange={handleFileUpload}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                  id="file-upload"
                />
                <div className="border-2 border-dashed border-blue-300 rounded-lg p-6 text-center hover:border-blue-400 transition-colors">
                  <Upload className="h-8 w-8 text-blue-500 mx-auto mb-2" />
                  <p className="text-sm text-gray-600">
                    {file ? file.name : 'Click to upload PDF or DOCX file'}
                  </p>
                  <p className="text-xs text-gray-500 mt-1">
                    The abstract will be automatically extracted from your file
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4 border-t">
              <div className="space-y-2">
                <Label htmlFor="domain">Research Domain (Optional)</Label>
                <Select value={domain} onValueChange={setDomain}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select your research domain" />
                  </SelectTrigger>
                  <SelectContent>
                    {domains.map((d) => (
                      <SelectItem key={d} value={d}>
                        {d}
                      </SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <Label htmlFor="open-access">Preferences</Label>
                <div className="flex items-center space-x-2 p-3 border rounded-md">
                  <Switch
                    id="open-access"
                    checked={openAccessOnly}
                    onCheckedChange={setOpenAccessOnly}
                  />
                  <Label htmlFor="open-access" className="text-sm">
                    Prefer Open Access Journals
                  </Label>
                </div>
              </div>
            </div>

            <Button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3"
              disabled={!abstract.trim()}
            >
              Get Recommendations
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}