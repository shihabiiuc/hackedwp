/**
 * Navigation Configuration
 *
 * @description
 * Centralized navigation configuration for header and footer.
 * All navigation items are defined here for consistency and easy maintenance.
 *
 * Items with a `feature` property will only be shown if that feature is enabled
 * in the site config's feature flags.
 */

import type { Navigation } from '../lib/types';

export const navigation: Navigation = {
  /**
   * Header Navigation
   * - main: Primary navigation links
   * - cta: Call-to-action buttons on the right
   */
  header: {
    main: [
      { label: 'Home', href: '/' },
      { label: 'About', href: '/about' },
      { label: 'Services', href: '/services' },
      { label: 'Pricing', href: '/pricing' },
      { label: 'Blog', href: '/blog', feature: 'blog' },
      { label: 'Contact', href: '/contact' },
    ],
    cta: [
      { label: 'FAQ', href: '/faq', variant: 'ghost' },
      { label: 'WhatsApp', href: 'https://wa.me/8801947888197', variant: 'primary' },
    ],
  },

  /**
   * Footer Navigation
   * Organized into 5 columns: Product, Solutions, Resources, Company, Legal
   */
  footer: {
    product: [
      { label: 'Preloader WP', href: 'https://shihabiiuc.com/preloader-wordpress-plugin/' },
    ],
    solutions: [{ label: 'WordPress Security Services', href: '/services' }],
    resources: [{ label: 'Blog', href: '/blog' }],
    company: [{ label: 'About', href: '/about' }],
    legal: [
      { label: 'Privacy', href: '/privacy' },
      { label: 'Terms', href: '/terms' },
    ],
  },
};
