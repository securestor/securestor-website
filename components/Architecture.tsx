import React from 'react';
import { Database, HardDrive, Server, Zap, Layers } from 'lucide-react';

const TECH_STACK = [
  {
    title: 'Erasure Coding',
    description: 'Configurable redundancy schemes (8+4, 16+8) ensuring data durability even in the event of multiple disk failures.',
    icon: Layers,
    tech: 'Reed-Solomon'
  },
  {
    title: 'Metadata Store',
    description: 'High-performance PostgreSQL cluster with streaming replication for atomic metadata operations and complex queries.',
    icon: Database,
    tech: 'PostgreSQL'
  },
  {
    title: 'Cache Layer',
    description: 'Distributed Redis Sentinel cluster for sub-millisecond session management and hot artifact metadata caching.',
    icon: Zap,
    tech: 'Redis Sentinel'
  },
  {
    title: 'Blob Storage',
    description: 'Flexible backend storage supporting local NVMe filesystem or cloud object stores like AWS S3 and GCS.',
    icon: HardDrive,
    tech: 'S3 / GCS / FS'
  }
];

const Architecture: React.FC = () => {
  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Infrastructure</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Storage Architecture
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
             Built on a foundation of proven, scalable open-source technologies for maximum reliability and data integrity.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {TECH_STACK.map((item, index) => (
            <div key={index} className="bg-slate-950 p-6 rounded-xl border border-slate-800 hover:border-indigo-500/50 transition-all hover:shadow-lg hover:shadow-indigo-500/10 group">
              <div className="w-12 h-12 bg-slate-900 rounded-lg flex items-center justify-center mb-4 group-hover:bg-indigo-900/30 transition-colors">
                <item.icon className="h-6 w-6 text-indigo-400" />
              </div>
              <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
              <p className="text-slate-400 text-sm leading-relaxed mb-4 min-h-[80px]">{item.description}</p>
              <div className="pt-4 border-t border-slate-900 flex items-center gap-2">
                 <Server className="h-3 w-3 text-slate-500"/>
                <span className="text-xs font-mono text-indigo-400 bg-indigo-900/20 px-2 py-1 rounded">
                  {item.tech}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Architecture;