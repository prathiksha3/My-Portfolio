import React from 'react';
import { Link } from 'react-router-dom';
import { ExternalLink, ArrowRight } from 'lucide-react';
import Tilt from 'react-parallax-tilt';

const CardProject = ({ Img, Title, Description, technologies = [] }) => {
  const getProjectSlug = () => {
    return Title?.toLowerCase().replace(/\s+/g, '-') || '';
  };

  return (
    <Tilt
    glareEnable={true}
    glareMaxOpacity={0.3}
    glareColor="#ffffff"
    glarePosition="bottom"
    tiltMaxAngleX={10}
    tiltMaxAngleY={10}
    transitionSpeed={500}
  >
      <div className="relative h-full rounded-xl bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg border border-white/10 shadow-2xl transition-all duration-300 hover:shadow-purple-500/20">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-pink-500/10 opacity-50 group-hover:opacity-70 transition-opacity duration-300"></div>
    
        <div className="relative p-5 z-10 h-full flex flex-col">
          {/* Image container with fixed height */}
          <div className="relative overflow-hidden rounded-lg h-48 flex-shrink-0">
            <img
              src={Img}
              alt={Title}
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
          </div>
          
          {/* Content area with flex-grow */}
          <div className="mt-4 space-y-3 flex-grow flex flex-col">
            <h3 className="text-xl font-semibold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
              {Title}
            </h3>
            
            <p className="text-gray-300/80 text-sm leading-relaxed line-clamp-2 flex-grow">
              {Description}
            </p>

            {/* Tech Stack Pills */}
            {technologies && technologies.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-2">
                {technologies.slice(0, 3).map((tech, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300"
                  >
                    {tech}
                  </span>
                ))}
                {technologies.length > 3 && (
                  <span className="px-2 py-1 text-xs font-medium rounded-md bg-white/5 text-slate-300">
                    +{technologies.length - 3}
                  </span>
                )}
              </div>
            )}
            
            {/* Button container with margin-top auto */}
            <div className="mt-auto pt-4">
              <Link
                to={`/project/${getProjectSlug()}`}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 text-white/90 transition-all duration-200 hover:scale-105 active:scale-95 focus:outline-none focus:ring-2 focus:ring-purple-500/50"
              >
                <span className="text-sm font-medium">View Details</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
          
        <div className="absolute inset-0 border border-white/0 group-hover:border-purple-500/50 rounded-xl transition-colors duration-300 -z-50"></div>
      </div>
    </Tilt>
  );
};

export default CardProject;