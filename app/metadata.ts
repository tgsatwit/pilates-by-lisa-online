import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    template: '%s | Pilates By Lisa',
    default: 'Pilates By Lisa - Online Pilates & Reformer Classes',
  },
  description: 'Transform your practice with expert-led online Pilates classes.',
  viewport: {
    width: 'device-width',
    initialScale: 1,
    maximumScale: 1,
    userScalable: false,
  },
  themeColor: '#000000',
  manifest: '/manifest.json',
  icons: {
    icon: '/favicon.ico',
    apple: '/apple-touch-icon.png',
  },
} 