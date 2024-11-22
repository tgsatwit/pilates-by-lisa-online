# Pilates by Lisa - Online Studio Platform

A modern, full-featured online Pilates studio platform built with Next.js 13, offering seamless access to expert-led Pilates classes, e-commerce functionality, and community features.

## Overview

Pilates by Lisa is a comprehensive online fitness platform that combines:
- On-demand Pilates classes
- E-commerce store for fitness equipment
- Member community features
- Blog content
- Administrative dashboard

## Key Features

### Public Features
- **Class Library**: Access to 800+ expert-led Pilates classes
- **E-commerce**: Shop for Pilates equipment and accessories
- **Blog**: Educational content and fitness tips
- **Membership Plans**: Flexible subscription options
- **Mobile App**: iOS app for on-the-go access
- **Free Trial**: Sample workouts without commitment

### Member Features
- **Progress Tracking**: Monitor fitness journey
- **Offline Access**: Download classes for offline viewing
- **Community**: Connect with other members
- **Custom Programs**: Personalized workout plans
- **Live Classes**: Join scheduled live sessions

### Admin Features
- **Dashboard**: Overview of key metrics
- **Content Management**: Manage classes and blog posts
- **E-commerce Management**: Handle products and orders
- **Member Management**: User administration
- **Analytics**: Track platform performance

## Technology Stack

- **Frontend**: Next.js 13, React 18
- **Styling**: Tailwind CSS, shadcn/ui
- **Authentication**: Firebase Auth
- **Database**: Firebase Firestore
- **Storage**: Firebase Storage
- **E-commerce**: Shopify API
- **Animations**: Framer Motion
- **Forms**: React Hook Form, Zod

## Project Structure

```
├── app/                    # Next.js 13 app directory
│   ├── admin/             # Admin dashboard routes
│   ├── blog/              # Blog routes
│   ├── shop/              # E-commerce routes
│   └── layout.tsx         # Root layout
├── components/            # React components
│   ├── admin/            # Admin dashboard components
│   ├── blog/             # Blog components
│   ├── shop/             # E-commerce components
│   └── ui/               # Shared UI components
├── contexts/             # React context providers
├── lib/                  # Utility functions and configs
│   ├── firebase.ts      # Firebase configuration
│   ├── shopify.ts       # Shopify API integration
│   └── utils.ts         # Helper functions
├── public/              # Static assets
└── styles/             # Global styles
```

## User Flow

### Public Users
1. Landing page showcases platform features
2. Browse free sample classes
3. View membership options
4. Sign up for free trial
5. Access shop and blog content

### Members
1. Login to account
2. Access full class library
3. Track progress
4. Join community
5. Purchase equipment

### Administrators
1. Secure admin login
2. Access dashboard
3. Manage content and users
4. Monitor analytics
5. Process orders

## Getting Started

1. Clone the repository
2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```env
NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=
NEXT_PUBLIC_SHOPIFY_STORE_DOMAIN=
NEXT_PUBLIC_SHOPIFY_STOREFRONT_ACCESS_TOKEN=
```

4. Run the development server:
```bash
npm run dev
```

## Deployment

The application is configured for deployment on Vercel with the following features:
- Automatic HTTPS
- Edge Functions
- Image Optimization
- Analytics

## Contributing

1. Fork the repository
2. Create a feature branch
3. Commit changes
4. Push to the branch
5. Open a pull request

## License

This project is private and proprietary. All rights reserved.