import React, { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { PROJECTS } from "../constants";
import { ArrowLeft, Github, ExternalLink, Code2, Star, ChevronRight } from "lucide-react";
import Swal from 'sweetalert2';

const TECH_ICONS = {
  React: Code2,
  Python: Code2,
  JavaScript: Code2,
  HTML: Code2,
  CSS: Code2,
  default: Code2,
};

const TechBadge = ({ tech }) => {
  const Icon = TECH_ICONS[tech] || TECH_ICONS["default"];
  
  return (
    <div className="group relative overflow-hidden px-3 py-2 bg-gradient-to-r from-blue-600/10 to-purple-600/10 rounded-xl border border-blue-500/10 hover:border-blue-500/30 transition-all duration-300 cursor-default">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 to-purple-500/0 group-hover:from-blue-500/10 group-hover:to-purple-500/10 transition-all duration-500" />
      <div className="relative flex items-center gap-2">
        <Icon className="w-4 h-4 text-blue-400 group-hover:text-blue-300 transition-colors" />
        <span className="text-sm font-medium text-blue-300/90 group-hover:text-blue-200 transition-colors">
          {tech}
        </span>
      </div>
    </div>
  );
};

const FeatureItem = ({ children }) => {
  return (
    <li className="group flex items-start space-x-3 p-3 rounded-xl hover:bg-white/5 transition-all duration-300 border border-transparent hover:border-white/10">
      <div className="relative mt-2">
        <div className="absolute -inset-1 bg-gradient-to-r from-blue-600/20 to-purple-600/20 rounded-full blur group-hover:opacity-100 opacity-0 transition-opacity duration-300" />
        <div className="relative w-2 h-2 rounded-full bg-gradient-to-r from-blue-400 to-purple-400 group-hover:scale-125 transition-transform duration-300" />
      </div>
      <span className="text-base text-gray-300 group-hover:text-white transition-colors">
        {children}
      </span>
    </li>
  );
};

const ProjectStats = ({ project }) => {
  const featuresCount = project.features?.length || 0;
  return (
    <div className="grid grid-cols-2 gap-4 p-4 bg-[#0a0a1a] rounded-xl relative">
      <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-blue-500/20 transition-all duration-300 hover:scale-105">
        <div className="bg-blue-500/20 p-2 rounded-full">
          <Code2 className="text-blue-300 w-6 h-6" />
        </div>
        <div>
          <div className="text-xl font-semibold text-blue-200">{project.technologies.length}</div>
          <div className="text-xs text-gray-400">Tech Stacks</div>
        </div>
      </div>
      
      <div className="flex items-center space-x-3 bg-white/5 p-3 rounded-lg border border-purple-500/20 transition-all duration-300 hover:scale-105">
        <div className="bg-purple-500/20 p-2 rounded-full">
          <Star className="text-purple-300 w-6 h-6" />
        </div>
        <div>
          <div className="text-xl font-semibold text-purple-200">{featuresCount}</div>
          <div className="text-xs text-gray-400">Key Features</div>
        </div>
      </div>
    </div>
  );
};

const handleGithubClick = (githubLink) => {
  if (githubLink === 'Private') {
    Swal.fire({
      icon: 'info',
      title: 'Source Code Private',
      text: 'This project source code is private.',
      confirmButtonColor: '#3085d6',
      background: '#030014',
      color: '#ffffff'
    });
    return false;
  }
  window.open(githubLink, '_blank');
  return true;
};

const ProjectDetails = () => {
  const { slug } = useParams();
  const project = PROJECTS.find(p => p.title.toLowerCase().replace(/\s+/g, '-') === slug);

  if (!project) {
    return (
      <div className="min-h-screen bg-[#030014] flex items-center justify-center">
        <div className="text-center space-y-6">
          <div className="w-24 h-24 mx-auto border-4 border-blue-500/30 border-t-blue-500 rounded-full animate-spin" />
          <h2 className="text-3xl font-bold text-white">Project Not Found</h2>
          <Link 
            to="/" 
            className="inline-flex items-center gap-2 px-6 py-3 bg-white/5 hover:bg-white/10 rounded-xl transition-all text-white"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to Home</span>
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#030014] px-[2%] relative overflow-hidden">
      <div className="max-w-7xl mx-auto py-16">
        <div className="flex items-center space-x-4 mb-12">
          <Link
            to="/"
            className="inline-flex items-center space-x-2 px-5 py-2.5 bg-white/5 backdrop-blur-xl rounded-xl text-white/90 hover:bg-white/10 transition-all border border-white/10"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back</span>
          </Link>
          <div className="flex items-center space-x-2 text-white/50">
            <span>Projects</span>
            <ChevronRight className="w-4 h-4" />
            <span className="text-white/90">{project.title}</span>
          </div>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div className="space-y-10">
            <div className="space-y-6">
              <h1 className="text-6xl font-bold bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                {project.title}
              </h1>
              <div className="relative w-24 h-1.5">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full animate-pulse" />
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full blur-sm" />
              </div>
              <p className="text-lg text-gray-300/90 leading-relaxed">
                {project.description}
              </p>
            </div>

            <ProjectStats project={project} />

            <div className="flex flex-wrap gap-4">
              <a
                href={project.github}
                onClick={(e) => !handleGithubClick(project.github) && e.preventDefault()}
                className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-purple-600/10 to-pink-600/10 hover:from-purple-600/20 text-purple-300 rounded-xl transition-all border border-purple-500/20 backdrop-blur-xl"
              >
                <Github className="w-5 h-5" />
                <span>GitHub</span>
              </a>
              {project.liveDemo && (
                <a
                  href={project.liveDemo}
                  className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-blue-600/10 to-cyan-600/10 hover:from-blue-600/20 text-blue-300 rounded-xl transition-all border border-blue-500/20 backdrop-blur-xl"
                >
                  <ExternalLink className="w-5 h-5" />
                  <span>Live Demo</span>
                </a>
              )}
            </div>

            <div className="space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <Code2 className="w-5 h-5 text-blue-400" />
                Technologies Used
              </h3>
              <div className="flex flex-wrap gap-3">
                {project.technologies.map((tech, index) => (
                  <TechBadge key={index} tech={tech} />
                ))}
              </div>
            </div>
          </div>

          <div className="space-y-10">
            <div className="relative rounded-2xl overflow-hidden border border-white/10 shadow-2xl group">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-96 object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 border-2 border-white/0 group-hover:border-white/10 transition-colors duration-300" />
            </div>

            <div className="bg-white/[0.02] backdrop-blur-xl rounded-2xl p-8 border border-white/10 space-y-6">
              <h3 className="text-xl font-semibold text-white flex items-center gap-3">
                <Star className="w-5 h-5 text-yellow-400" />
                Key Features
              </h3>
              <ul className="space-y-2">
  {project.features?.map((feature, index) => (
    <FeatureItem key={index}>{feature}</FeatureItem>
  ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetails;