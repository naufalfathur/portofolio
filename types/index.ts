export type AssetFile = {
  url: string;
  details: {
    size: number;
    image?: {
      width: number;
      height: number;
    };
  };
  fileName: string;
  contentType: string;
};

export type AssetFields = {
  title: string;
  description?: string;
  file: AssetFile;
};

export type Asset = {
  sys: any;
  metadata: {
    tags: any[];
    concepts: any[];
  };
  fields: AssetFields;
};

export interface TProject {
  id: string;               // Contentful entry ID (or slug)
  name: string;             // Entry title
  ProjectDate: string;      // New field for project date
  slug: string;             // Slug
  featured: boolean;        // Featured flag
  thumbnail?: Asset;        // Media object
  type?: string;            // Short text type
  descTitle?: string;       // Long text title
  role?: string[];          // List of roles
  technologies?: string[];  // List of technologies
  background?: string;      // Long text background
  url?: string;             // External URL
  themeColor: string;       // New field for theme color
  mainSectionImg: Asset;    // New field for main section image
  otherSectionImg: Asset[]; // New field for other section images (multiple)
  desc?: string;            // Long text description
}

export interface TDocFile {
  id: string;               // Contentful entry ID (or slug)
  name: string;
  file: Asset;
  category: string;
}