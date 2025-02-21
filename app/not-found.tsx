'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col items-center justify-center">
      <div className="text-center space-y-8">
        <h1 className="text-9xl font-bold text-primary">404</h1>
        <h2 className="text-4xl font-semibold text-muted-foreground">Page Not Found</h2>
        <p className="text-lg text-muted-foreground max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Button asChild size="lg" className="text-xl px-8 py-6 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200 hover:bg-gradient-to-bl text-gray-900 font-extrabold">
          <Link href="/">
            Go to Home
          </Link>
        </Button>
      </div>
    </div>
  );
}