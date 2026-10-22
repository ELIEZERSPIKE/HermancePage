import React, { useState } from 'react';
import { TIKTOK_VIDEOS } from '../data';
import { Play, Eye, Heart, Check } from 'lucide-react';

export const TikTokSection: React.FC = () => {
  const [following, setFollowing] = useState(false);
  const [activeVideoIndex, setActiveVideoIndex] = useState<number | null>(null);

  return (
    <section id="tiktok" className="py-20 lg:py-28 bg-[#0F3B2A] text-[#F6F1E7] border-b border-[#C9A45C]/20">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-10 lg:px-16">
        
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12 lg:mb-16">
          <div>
            <span className="text-xs tracking-[0.35em] text-[#C9A45C] uppercase font-light block mb-2">
              Comunidad & Bastidores
            </span>
            <h2 className="font-serif-luxury text-3xl sm:text-5xl text-[#F6F1E7] font-normal tracking-tight">
              Síguenos en TikTok
            </h2>
            <p className="text-sm text-[#C9A45C] tracking-widest font-light mt-1">
              @MAISON HERMANCE
            </p>
          </div>

          {/* Follow Button: « Seguir » */}
          <button
            onClick={() => setFollowing(!following)}
            className={`px-8 py-3.5 text-xs uppercase tracking-widest font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer ${
              following
                ? 'bg-[#17523b] text-[#C9A45C] border border-[#C9A45C]'
                : 'bg-[#C9A45C] text-[#0F3B2A] hover:bg-[#b58f47]'
            }`}
          >
            {following ? (
              <>
                <Check className="w-3.5 h-3.5" />
                <span>Siguiendo</span>
              </>
            ) : (
              <span>Seguir</span>
            )}
          </button>
        </div>

        {/* 4 Vertical Video Thumbnails Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          {TIKTOK_VIDEOS.map((video, idx) => (
            <div
              key={video.id}
              onClick={() => setActiveVideoIndex(activeVideoIndex === idx ? null : idx)}
              className="group relative aspect-[9/16] w-full overflow-hidden bg-[#082117] border border-[#C9A45C]/30 hover:border-[#C9A45C] transition-all duration-300 cursor-pointer shadow-lg"
            >
              {/* Background Thumbnail Image */}
              <img
                src={video.image}
                alt={video.caption}
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover object-center transform transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Dark editorial gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-[#082117]/95 via-black/20 to-transparent opacity-90 group-hover:opacity-100 transition-opacity" />

              {/* Tag pill at top */}
              <div className="absolute top-3 left-3 bg-[#0F3B2A]/85 backdrop-blur-xs border border-[#C9A45C]/40 px-2.5 py-1 text-[10px] tracking-wider text-[#C9A45C] uppercase font-light">
                {video.tag}
              </div>

              {/* Center Play Button indicator */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="w-12 h-12 rounded-full bg-[#0F3B2A]/80 border border-[#C9A45C] flex items-center justify-center text-[#C9A45C] transform group-hover:scale-110 transition-transform">
                  <Play className="w-5 h-5 ml-0.5 fill-[#C9A45C]" />
                </div>
              </div>

              {/* Bottom Video Meta */}
              <div className="absolute bottom-0 inset-x-0 p-4 space-y-2">
                <p className="text-xs text-[#F6F1E7] font-light line-clamp-2 leading-relaxed">
                  {video.caption}
                </p>

                <div className="flex items-center justify-between text-[11px] text-[#C9A45C]/90 font-light pt-1 border-t border-[#C9A45C]/20">
                  <div className="flex items-center gap-1">
                    <Eye className="w-3 h-3" />
                    <span>{video.views}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Heart className="w-3 h-3" />
                    <span>{video.likes}</span>
                  </div>
                </div>
              </div>

              {/* Active playback notification */}
              {activeVideoIndex === idx && (
                <div className="absolute inset-0 bg-[#0F3B2A]/90 flex flex-col items-center justify-center p-4 text-center z-20">
                  <Play className="w-8 h-8 text-[#C9A45C] animate-pulse mb-2" />
                  <span className="font-serif-luxury text-sm text-[#F6F1E7]">Reproduciendo cápsula</span>
                  <span className="text-[10px] text-[#C9A45C] mt-1">@MAISON HERMANCE</span>
                  <button
                    onClick={(e) => {
                      e.stopPropagation();
                      setActiveVideoIndex(null);
                    }}
                    className="mt-4 px-3 py-1 text-[10px] uppercase tracking-wider border border-[#C9A45C] text-[#C9A45C]"
                  >
                    Cerrar
                  </button>
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
