import { TextWithImageProps } from "./testWithImage";

export interface TabData {
  title: string;
  content: TextWithImageProps;
}

export interface TabbedSectionProps {
  tabs: TabData[];
  activeTabIndex?: number;
  className?: string;
}
