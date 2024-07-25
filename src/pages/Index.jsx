import React from 'react';
import { Button } from '@/components/ui/button';

export default function Index() {
  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      <header className="container mx-auto py-4">
        <nav className="flex justify-end space-x-4">
          <a href="#" className="text-green-400 hover:text-green-300">Home</a>
          <a href="#" className="text-white hover:text-green-300">Blog</a>
          <a href="#" className="text-white hover:text-green-300">Account</a>
        </nav>
      </header>

      <main className="container mx-auto text-center py-20 flex-grow">
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

      <footer className="w-full overflow-hidden py-20">
        <div className="flex animate-scroll">
          {[...Array(10)].map((_, index) => (
            <img 
              key={index}
              src="/placeholder.svg" 
              alt={`Logo ${index + 1}`} 
              className="mx-8 object-contain h-12 w-auto"
            />
          ))}
        </div>
      </footer>

      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
          width: calc(250px * 20);
        }
      `}</style>
    </div>
  );
}