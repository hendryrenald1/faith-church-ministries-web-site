import metadata from '@/metadata.json';

export const siteMetadata = {
  title: metadata.name ?? 'Faith Church Ministries',
  description:
    metadata.description ??
    'A modern, responsive church website featuring sermon archives, event schedules, location details, and ministry information.',
  baseUrl: 'https://faithchurch.org',
};
