import React from 'react';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white">
      <header className="container mx-auto py-4">
        <nav className="flex justify-end space-x-4">
          <a href="#" className="text-green-400 hover:text-green-300">Home</a>
          <a href="#" className="text-white hover:text-green-300">Blog</a>
          <a href="#" className="text-white hover:text-green-300">Account</a>
        </nav>
      </header>

      <main className="container mx-auto text-center py-20">
        <h1 className="text-7xl font-bold mb-8 text-green-400">
          The War On<br />SaaS Has Begun
        </h1>
        <p className="text-xl mb-12 max-w-2xl mx-auto">
          Replace your teams SaaS subscriptions with custom AI internal tooling for a
          fraction of the price. We'll help you build team hubs, replacement tools and custom
          workflows.
        </p>
        <Button variant="outline" size="lg" className="bg-gray-800 text-white hover:bg-gray-700">
          Learn More
        </Button>
      </main>

      <footer className="container mx-auto py-20">
        <div className="flex justify-between items-center">
          <img src="/placeholder.svg" alt="Logo 1" className="mx-auto object-cover w-24 h-8" />
          <img src="/placeholder.svg" alt="Logo 2" className="mx-auto object-cover w-24 h-8" />
          <img src="/placeholder.svg" alt="Logo 3" className="mx-auto object-cover w-24 h-8" />
          <img src="/placeholder.svg" alt="Logo 4" className="mx-auto object-cover w-24 h-8" />
          <img src="/placeholder.svg" alt="Logo 5" className="mx-auto object-cover w-24 h-8" />
        </div>
      </footer>
    </div>
  );
}