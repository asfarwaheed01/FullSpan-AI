export interface HighlightedText {
  text: string;
  highlight?: boolean;
  color?: string;
}

export interface TextWithImageProps {
  /**
   * The heading text or array of text segments where some can be highlighted
   */
  heading: string | HighlightedText[];

  /**
   * The default color for highlighted text if not specified in the HighlightedText
   */
  highlightColor?: string;

  /**
   * The paragraph text below the heading
   */
  description: string;

  /**
   * The image source path
   */
  imageSrc: string;

  /**
   * Alt text for the image
   */
  imageAlt: string;

  /**
   * Whether to display the image on the right (true) or left (false)
   * @default true
   */
  imageOnRight?: boolean;

  /**
   * Additional className for the container
   */
  className?: string;

  /**
   * Background color class
   * @default "bg-white"
   */
  bgColor?: string;

  /**
   * Bullet points to display below the description
   */
  bulletPoints?: string[];
}
