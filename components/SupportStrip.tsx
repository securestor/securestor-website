import React from 'react';

const TECHS = [
  { name: 'Docker', color: 'text-blue-500' },
  { name: 'NPM', color: 'text-red-500' },
  { name: 'Maven', color: 'text-orange-500' },
  { name: 'PyPI', color: 'text-yellow-500' },
  { name: 'Helm', color: 'text-blue-400' },
  { name: 'Generic', color: 'text-gray-400' },
];

const SupportStrip: React.FC = () => {
  return (
    <div className="py-10 border-y border-slate-900 bg-slate-950/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <p className="text-center text-slate-500 text-sm font-semibold uppercase tracking-wider mb-6">
          Native support for all major package formats
        </p>
        <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16">
          {TECHS.map((tech) => (
            <div key={tech.name} className="flex items-center gap-2 opacity-50 hover:opacity-100 transition-opacity cursor-default">
              <span className={`text-xl md:text-2xl font-bold ${tech.color}`}>{tech.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SupportStrip;