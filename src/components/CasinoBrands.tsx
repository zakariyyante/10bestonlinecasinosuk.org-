'use client';

import { siteConfig } from '@/config/site';
import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function CasinoBrands() {
  const [gclid, setGclid] = useState('');

  useEffect(() => {
    // Get GCLID from URL parameters
    const urlParams = new URLSearchParams(window.location.search);
    const gclidValue = urlParams.get('gclid') || '';
    setGclid(gclidValue);
  }, []);

  // Function to replace {gclid} placeholder in URLs
  const processPlayLink = (link: string) => {
    return link.replace('{gclid}', gclid);
  };
  return (
    <section id="casinos" className="py-12 md:py-20 bg-gradient-to-br from-gray-900/50 via-purple-900/30 to-gray-900/50 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-r from-purple-500/5 via-transparent to-pink-500/5"></div>
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-pink-500/10 rounded-full blur-3xl"></div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="casino-grid">
          {siteConfig.casinos.map((casino, index) => {
            // Determine tag based on position
            const getTag = (index: number) => {
              if (index === 0) return { text: "MOST POPULAR", color: "bg-orange-500" };
              if (index === 1) return { text: "RUNNER UP", color: "bg-orange-500" };
              if (index === 2) return { text: "HOT", color: "bg-orange-500" };
              return { text: "MOST POPULAR", color: "bg-orange-500" };
            };

            const tag = getTag(index);

            return (
              <div key={index} className="card hover:transform hover:scale-105 transition-all duration-300 group relative">
                {/* Top Badge */}
                <div className="absolute -top-2 -left-2 z-10">
                  <div className={`${tag.color} text-white text-sm font-bold px-4 py-2 rounded-md shadow-lg`}>
                    {tag.text}
                  </div>
                </div>

                <div className="p-6 pt-8">
                  {/* Logo and Rating Row */}
                  <div className="flex justify-between items-center mb-6">
                    {/* Casino Logo - Left Side */}
                    <div className="flex-1">
                      <div className="relative w-48 h-24">
                        <Image
                          src={`/casino-logos/${casino.logo}`}
                          alt={casino.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    </div>

                    {/* Rating Section - Right Side */}
                    <div className="text-right">
                      <div className="flex items-center justify-end space-x-1 mb-2">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <span
                            key={star}
                            className={`text-xl ${
                              star <= Math.round(casino.rating) 
                                ? 'text-yellow-400' 
                                : 'text-gray-600'
                            }`}
                          >
                            ★
                          </span>
                        ))}
                      </div>
                      <div className="text-3xl font-bold text-yellow-400 mb-1 text-center">{casino.rating}</div>
                      <div className="text-sm text-gray-400 text-center">Reviews (1300)</div>
                    </div>
                  </div>

                  {/* Bonus Deal Section */}
                  <div className="text-center mb-6">
                    <div className="text-sm text-gray-400 mb-2">Bonus Deal</div>
                    <div className="text-lg text-cyan-400 font-bold leading-tight">
                      {casino.bonus}
                    </div>
                  </div>

                  {/* Action Button */}
                  <a
                    href={processPlayLink(casino.playLink)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-yellow-500 text-white font-bold py-4 px-6 rounded-lg text-center hover:bg-yellow-400 transition-all duration-300 shadow-lg hover:shadow-xl"
                  >
                    GET BONUS
                  </a>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
