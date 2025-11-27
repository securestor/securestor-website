import React from 'react';
import { Check, X, AlertTriangle, ShieldCheck, Trophy } from 'lucide-react';

const Comparison: React.FC = () => {
  const rows = [
    { feature: 'Binary storage', jfrog: 'yes', github: 'yes', nexus: 'yes', securestor: 'yes' },
    { feature: 'Cloud-native', jfrog: 'yes', github: 'yes', nexus: 'partial', securestor: 'yes' },
    { feature: 'Provenance tracking', jfrog: 'partial', github: 'no', nexus: 'no', securestor: 'yes' },
    { feature: 'SBOM & compliance', jfrog: 'partial', github: 'no', nexus: 'no', securestor: 'yes' },
    { feature: 'AI vulnerability analysis', jfrog: 'no', github: 'no', nexus: 'no', securestor: 'yes' },
    { feature: 'Zero-trust artifact delivery', jfrog: 'no', github: 'no', nexus: 'no', securestor: 'yes' },
  ];

  const renderIcon = (status: string) => {
    switch (status) {
      case 'yes':
        return <Check className="h-5 w-5 text-emerald-400 mx-auto" />;
      case 'partial':
        return <AlertTriangle className="h-5 w-5 text-amber-500 mx-auto" />;
      case 'no':
        return <X className="h-5 w-5 text-slate-700 mx-auto" />;
      default:
        return null;
    }
  };

  return (
    <section className="py-24 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Why Choose Us</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            Competitive Landscape
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            See how SecureStor compares to legacy artifact management solutions.
          </p>
        </div>

        <div className="overflow-x-auto">
          <div className="inline-block min-w-full align-middle">
            <div className="bg-slate-950 border border-slate-800 rounded-xl overflow-hidden shadow-xl">
              <table className="min-w-full divide-y divide-slate-800">
                <thead>
                  <tr className="bg-slate-900/50">
                    <th scope="col" className="py-5 px-6 text-left text-sm font-bold text-slate-300 uppercase tracking-wider w-1/4">
                      Feature
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-sm font-bold text-slate-400 uppercase tracking-wider w-1/6">
                      JFrog
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-sm font-bold text-slate-400 uppercase tracking-wider w-1/6">
                      GitHub Packages
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-sm font-bold text-slate-400 uppercase tracking-wider w-1/6">
                      Nexus
                    </th>
                    <th scope="col" className="py-5 px-6 text-center text-sm font-bold text-indigo-400 uppercase tracking-wider w-1/6 bg-indigo-900/10 border-b-2 border-indigo-500">
                      <div className="flex items-center justify-center gap-2">
                        <Trophy className="h-4 w-4" /> SecureStor
                      </div>
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800">
                  {rows.map((row, index) => (
                    <tr key={index} className={index % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/30'}>
                      <td className="py-4 px-6 text-sm font-medium text-slate-200 whitespace-nowrap">
                        {row.feature}
                      </td>
                      <td className="py-4 px-6 whitespace-nowrap">{renderIcon(row.jfrog)}</td>
                      <td className="py-4 px-6 whitespace-nowrap">{renderIcon(row.github)}</td>
                      <td className="py-4 px-6 whitespace-nowrap">{renderIcon(row.nexus)}</td>
                      <td className="py-4 px-6 whitespace-nowrap bg-indigo-900/5 border-l border-slate-800/50">
                        {renderIcon(row.securestor)}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>

        <div className="mt-12 max-w-4xl mx-auto text-center">
          <div className="bg-indigo-900/20 border border-indigo-500/30 rounded-2xl p-8 backdrop-blur-sm">
             <ShieldCheck className="h-10 w-10 text-indigo-400 mx-auto mb-4" />
             <h3 className="text-xl font-bold text-white mb-2">Our Core Differentiator</h3>
             <p className="text-lg text-indigo-200 font-medium italic">
               "SecureStor fuses artifact management, security, and intelligence — not just storage."
             </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Comparison;