import { defineConfig } from 'astro/config';

export default defineConfig({
  site: process.env.SITE_URL || 'https://example.com',
  image: {
    responsiveStyles: true,
  },
  security: {
    csp: {
      directives: [
        "default-src 'self'",
        "base-uri 'self'",
        "connect-src 'self'",
        "font-src 'self'",
        "form-action 'none'",
        "frame-src https://www.google.com https://maps.google.com",
        "img-src 'self' data:",
        "media-src 'none'",
        "object-src 'none'",
        "worker-src 'none'",
        "upgrade-insecure-requests",
      ],
    },
  },
});
