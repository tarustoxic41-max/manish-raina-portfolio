import React from 'react';

interface ProfileImageProps {
  src: string;
  alt: string;
  className?: string;
}

const ProfileImage: React.FC<ProfileImageProps> = ({ src, alt, className = '' }) => {
  return (
    <div className={`relative w-40 h-40 sm:w-56 sm:h-56 md:w-72 md:h-72 lg:w-80 lg:h-80 flex-shrink-0 ${className}`}>
      {/* Outer glow layer */}
      <div className="absolute inset-0 rounded-full bg-gradient-to-br from-neon-blue via-neon-purple to-neon-blue opacity-30 blur-xl animate-pulse-glow" />
      
      {/* Middle glow layer */}
      <div className="absolute inset-1 rounded-full bg-gradient-to-br from-neon-blue/20 to-neon-purple/20 opacity-50" />
      
      {/* Image container */}
      <div className="relative inset-0 rounded-full overflow-hidden border-2 border-neon-blue/50 shadow-lg" style={{
        boxShadow: '0 0 30px hsl(200, 100%, 50%, 0.3), inset 0 0 30px hsl(200, 100%, 50%, 0.1)'
      }}>
        <img
          src={src}
          alt={alt}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Subtle floating animation */}
      <style>{`
        @keyframes float-profile {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }
        .profile-float {
          animation: float-profile 4s ease-in-out infinite;
        }
      `}</style>
      <div className="absolute inset-0 profile-float" />
    </div>
  );
};

export default ProfileImage;
