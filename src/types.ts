export type VoltageType = '8.4V' | '7.4V' | '6.0V';

export interface ProductSpec {
  torque: string;
  torqueOzIn: string;
  speed: string;
  stallCurrent: string;
  idleCurrent: string;
}

export interface Product {
  id: string;
  modelName: string;
  category: string;
  badgeLabel: string;
  badgeColor?: string;
  headline: string;
  description: string;
  image: string;
  specs: Record<VoltageType, ProductSpec>;
  gears: string;
  dimensions: string;
  weight: string;
  spline: string;
  deadband: string;
  motorType: string;
  bearingType: string;
  operatingFrequency: string;
  waterproofRating: string;
  workingVoltage: string;
  hornType: string;
  features: string[];
  schematicDetails?: {
    length: number;
    width: number;
    height: number;
    splineTeeth: number;
  };
}

export interface Discipline {
  id: string;
  title: string;
  subtitle: string;
  badge: string;
  image: string;
  description: string;
  torqueSpectrum: string;
  targetCategory: string;
}

export interface NewsItem {
  id: string;
  category: string;
  dateTag: string;
  title: string;
  summary: string;
  image: string;
  isMediaVideo?: boolean;
  videoDuration?: string;
  content?: string;
}

export interface DealerRegion {
  id: string;
  regionName: string;
  distributors: {
    name: string;
    territory: string;
    contact: string;
    type: string;
    website: string;
  }[];
}
