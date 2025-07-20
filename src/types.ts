export interface Journal {
  id: string;
  name: string;
  impactFactor: number;
  publisher: string;
  websiteUrl: string;
  openAccess: boolean;
  domain: string;
  description: string;
}

export interface RecommendationRequest {
  abstract: string;
  domain?: string;
  openAccessOnly: boolean;
}
