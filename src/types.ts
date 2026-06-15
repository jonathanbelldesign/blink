export type Platform =
  | 'instagram'
  | 'facebook'
  | 'tiktok'
  | 'youtube'
  | 'spotify'
  | 'google_maps'
  | 'yelp'
  | 'generic';

export interface LinkItem {
  label: string;
  url: string;
  platform: Platform;
}

export interface HeadingSection {
  type: 'heading';
  title: string;
  subtitle?: string;
  phone?: string;
}

export interface TextSection {
  type: 'text';
  body: string;
}

export interface ImageSection {
  type: 'image';
  src: string;
  caption?: string;
}

export interface QuoteSection {
  type: 'quote';
  text: string;
  attribution?: string;
}

export interface LinksSection {
  type: 'links';
  items: LinkItem[];
}

export interface EmbedSection {
  type: 'embed';
  url: string;
}

export type Section =
  | HeadingSection
  | TextSection
  | ImageSection
  | QuoteSection
  | LinksSection
  | EmbedSection;

export interface ThemeColors {
  background?: string;
  text?: string;
  accent?: string;
}

export interface ThemeFonts {
  heading?: string;
  body?: string;
}

export interface Theme {
  colors?: ThemeColors;
  fonts?: ThemeFonts;
}

export interface PageContent {
  theme?: Theme;
  sections: Section[];
}
