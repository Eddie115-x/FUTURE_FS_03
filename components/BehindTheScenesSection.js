import Image from 'next/image';
import { useState } from 'react';

export default function BehindTheScenesSection() {
  const [activeTab, setActiveTab] = useState('studio');

  const tabs = [
    { id: 'studio', label: 'STUDIO' },
    { id: 'writing', label: 'WRITING PROCESS' },
    { id: 'tour', label: 'TOUR LIFE' },
  ];

  const content = {
    studio: {
      title: "BEHIND THE SOUND",
      description: "Raw, unfiltered moments from the studio where every track is born. The creative process isn't always clean—it's messy, honest, and real.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1598488035139-bdbb2231ce04?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
          alt: "Studio recording session"
        },
        {
          src: "https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Mixing board"
        },
        {
          src: "https://images.unsplash.com/photo-1598653222000-6b7b7a552625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Studio microphone"
        }
      ],
      quote: "I don't make songs for the moment, I make songs for life."
    },
    writing: {
      title: "THE WRITING PROCESS",
      description: "Each lyric is carefully crafted from personal experience, internal struggles, and raw emotion. The writing process is where vulnerability meets honesty.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1455849318743-b2233052fcff?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
          alt: "Writing lyrics"
        },
        {
          src: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Notebook with lyrics"
        },
        {
          src: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Late night writing session"
        }
      ],
      quote: "Real music 'til the day we die."
    },
    tour: {
      title: "LIFE ON THE ROAD",
      description: "From empty venues to sold-out arenas, the journey has been anything but easy. Tour life is where the music connects with the people who need it most.",
      images: [
        {
          src: "https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80",
          alt: "Concert performance"
        },
        {
          src: "https://images.unsplash.com/photo-1501281668745-f7f57925c3b4?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Backstage moment"
        },
        {
          src: "https://images.unsplash.com/photo-1514525253161-7a46d19cd819?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80",
          alt: "Tour bus life"
        }
      ],
      quote: "When I walk in the room, I don't need to introduce myself."
    }
  };

  const activeContent = content[activeTab];

  return (
    <section id="behind-the-scenes" className="content-section bg-obsidian texture-overlay">
      <div className="container mx-auto px-6">
        <h2 className="section-title text-center mb-12">BEHIND THE SCENES</h2>
        
        <div className="flex justify-center mb-10 relative">
          <div className="inline-flex p-1 bg-charcoal rounded-sm">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                className={`px-6 py-3 font-bebas tracking-wider text-lg transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-crimson text-ghost'
                    : 'text-silver hover:text-ghost'
                }`}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            ))}
          </div>
          <div className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-crimson to-transparent"></div>
        </div>

        <div className="mt-12 max-w-5xl mx-auto">
          <h3 className="font-bebas text-4xl mb-4 text-ghost tracking-wider animate-fade-in">
            {activeContent.title}
          </h3>
          
          <p className="text-silver mb-8 animate-fade-in animate-delay-200">
            {activeContent.description}
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
            {activeContent.images.map((image, index) => (
              <div 
                key={index} 
                className="relative aspect-[4/3] overflow-hidden group cinematic-image animate-fade-in"
                style={{ animationDelay: `${(index + 2) * 200}ms` }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-black/70"></div>
              </div>
            ))}
          </div>
          
          <blockquote className="relative border-l-4 border-crimson pl-6 py-2 max-w-3xl mx-auto mb-8 animate-fade-in animate-delay-600">
            <p className="font-bebas text-2xl md:text-3xl text-ghost italic">
              "{activeContent.quote}"
            </p>
            <div className="absolute -left-1 top-0 bottom-0 w-1 bg-crimson"></div>
          </blockquote>
          
          <div className="flex justify-center animate-fade-in animate-delay-600">
            <button className="btn-outline mt-8">
              MORE BEHIND THE SCENES
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
