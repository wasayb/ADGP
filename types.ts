
export interface SceneProps {
  progress: number; // 0 to 1 for the specific range
  globalProgress: number; // 0 to 1 for the entire site
}

export interface SectionContent {
  id: string;
  title: string;
  description: string;
  image: string;
}
