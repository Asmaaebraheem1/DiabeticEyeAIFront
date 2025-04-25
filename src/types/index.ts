// Define common types used throughout the application

export interface NavItem {
  title: string;
  href: string;
}

export interface ResultData {
  imageUrl: string;
  densityValue?: number;
  status: 'success' | 'processing' | 'error';
  message?: string;
}