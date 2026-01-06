/**
 * Image optimization utilities for Next.js Image component
 */

export const IMAGE_SIZES = {
  thumbnail: 128,
  small: 256,
  medium: 512,
  large: 1024,
  xlarge: 1920,
} as const;

export const IMAGE_QUALITY = {
  low: 50,
  medium: 75,
  high: 90,
  max: 100,
} as const;

/**
 * Get responsive image sizes string for Next.js Image component
 * @param breakpoints - Object with breakpoint sizes
 * @returns sizes string for responsive images
 */
export function getResponsiveSizes(breakpoints: {
  mobile?: string;
  tablet?: string;
  desktop?: string;
  default?: string;
}): string {
  const sizes: string[] = [];

  if (breakpoints.mobile) {
    sizes.push(`(max-width: 640px) ${breakpoints.mobile}`);
  }
  if (breakpoints.tablet) {
    sizes.push(`(max-width: 1024px) ${breakpoints.tablet}`);
  }
  if (breakpoints.desktop) {
    sizes.push(`(min-width: 1025px) ${breakpoints.desktop}`);
  }

  sizes.push(breakpoints.default || '100vw');

  return sizes.join(', ');
}

/**
 * Common responsive sizes configurations
 */
export const RESPONSIVE_SIZES = {
  hero: getResponsiveSizes({
    mobile: '100vw',
    tablet: '100vw',
    desktop: '100vw',
    default: '100vw',
  }),
  serviceCard: getResponsiveSizes({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    default: '33vw',
  }),
  galleryImage: getResponsiveSizes({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '33vw',
    default: '33vw',
  }),
  aboutPhoto: getResponsiveSizes({
    mobile: '100vw',
    tablet: '50vw',
    desktop: '50vw',
    default: '50vw',
  }),
  serviceDetail: getResponsiveSizes({
    mobile: '100vw',
    tablet: '100vw',
    desktop: '50vw',
    default: '50vw',
  }),
} as const;

/**
 * Get blur data URL for placeholder
 * @param width - Width of the blur placeholder
 * @param height - Height of the blur placeholder
 * @returns Data URL for blur placeholder
 */
export function getBlurDataURL(width: number = 10, height: number = 10): string {
  const canvas = `
    <svg width="${width}" height="${height}" xmlns="http://www.w3.org/2000/svg">
      <rect width="${width}" height="${height}" fill="#e5e7eb"/>
    </svg>
  `;
  const base64 = Buffer.from(canvas).toString('base64');
  return `data:image/svg+xml;base64,${base64}`;
}
