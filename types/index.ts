export type TProject = {
  name: string,
  type: string,
  featured: boolean,
  img: string,
  url: string,
  descTitle: string,
  desc: string[],
  technologies: string[],
}

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

export interface Project {
  id: string;               // Contentful entry ID (or slug)
  name: string;             // Entry title
  slug: string;             // Slug
  featured: boolean;        // Featured flag
  thumbnail?: Asset;        // Media object
  type?: string;            // Short text type
  descTitle?: string;       // Long text title
  role?: string[];          // List of roles
  technologies?: string[];  // List of technologies
  background?: string;      // Long text background
  url?: string;             // External URL
  image?: Asset;            // Media object
  embedAssets?: any;        // JSON object, can type more strictly if known
  desc?: string;            // Long text description
}
