/**
 * Contact Page Configuration
 *
 * @description
 * Contact information, methods, and FAQ data for the contact page.
 * Modify these values to customize your contact page content.
 */

import type { ContactInfo, ContactMethod, ContactFAQ } from '../lib/types';

/** Contact information used across contact page and legal pages */
export const contact: ContactInfo = {
  email: 'shihabdinajpur@gmail.com',
  supportEmail: 'hello@shihabiiuc.com',
  salesEmail: 'shihabdinajpur@gmail.com',
  address: {
    street: 'Professor para, Birampur',
    city: 'Dinajpur',
    state: 'Rangpur',
    zip: '5266',
    country: 'Bangladesh',
  },
};

/** Contact methods displayed on the contact page */
export const contactMethods: ContactMethod[] = [
  {
    icon: 'lucide:mail',
    label: 'Email',
    value: contact.email,
    href: `mailto:${contact.email}`,
  },
  {
    icon: 'lucide:calendar',
    label: 'Calendly',
    value: 'Calendly',
    href: 'https://calendly.com/shihabiiuc/booking',
  },
];

/** FAQ items displayed on the contact page */
export const contactFAQs: ContactFAQ[] = [
  {
    question: 'How quickly can you fix my hacked WordPress website?',
    answer:
      'In most cases, I start working within minutes of confirmation. Basic malware infections and common issues can often be cleaned within a few hours. More complex hacks may take longer depending on severity, but I always provide a clear timeline after initial review.',
  },
  {
    question: 'Will my website data be safe during the cleanup process?',
    answer:
      'Yes. I always create a full backup before starting any recovery work. Your database, media files, and content are preserved. The goal is to remove malware and vulnerabilities without affecting your existing website content.',
  },
  {
    question: 'How do we work together during the repair process?',
    answer:
      'After you contact me, I will request temporary access (hosting, cPanel, or WordPress admin). I can also assist via live support using screen-sharing tools if needed. Once the issue is resolved, I provide a report explaining what was fixed and how to prevent future problems.',
  },
];
