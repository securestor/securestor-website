import React from 'react';
import { Check, X, HelpCircle, Server, Cloud, Shield } from 'lucide-react';

const TIERS = [
  {
    name: 'Community',
    price: '$0',
    description: 'Perfect for individuals and open-source projects.',
    features: [
      'Docker & NPM support',
      '50GB Storage',
      'Basic Vulnerability Scanning',
      'Community Support',
      '1 User'
    ],
    cta: 'Start for Free',
    highlighted: false
  },
  {
    name: 'Team',
    price: '$10',
    period: '/user/mo',
    description: 'Full security suite for growing engineering teams.',
    features: [
      'All Package Formats',
      '1TB Storage per User',
      'Real-time Vulnerability Blocking',
      'Automatic SBOM Generation',
      'Email Support (12h SLA)',
      'Unlimited Users'
    ],
    cta: 'Start Trial',
    highlighted: true,
    badge: 'Most Popular'
  },
  {
    name: 'SaaS Enterprise',
    price: '$750',
    period: '/mo',
    description: 'Fully managed dedicated instance with high-performance SLA.',
    features: [
      'Unlimited Storage',
      'SSO (SAML/OIDC) & RBAC',
      'Zero Maintenance',
      'Multi-Region Replication',
      '99.99% Uptime SLA',
      'Priority 24/7 Support'
    ],
    cta: 'Contact Sales',
    highlighted: false
  },
  {
    name: 'Self-Managed',
    price: '$2,999',
    period: '/year',
    description: 'Complete control for air-gapped and regulated environments.',
    features: [
      'Deploy on Kubernetes / Bare Metal',
      'Full Data Sovereignty',
      'Air-Gap Compatible',
      'Direct DB Access',
      'Custom Backup Policies',
      'Dedicated Solution Engineer'
    ],
    cta: 'Buy License',
    highlighted: false
  }
];

const ADDONS = [
  {
    name: "Compliance Pack",
    price: "+$999/mo",
    description: "Advanced analytics, long-term audit retention (7 years), and automated regulatory reporting (SOC2, ISO)."
  },
  {
    name: "AI Risk Engine",
    price: "+$499/mo",
    description: "Predictive supply chain risk analysis using AI to detect malicious typosquatting and zero-day threats before they are disclosed."
  }
];

const Pricing: React.FC = () => {
  return null;
  /* 
  return (
    <section id="pricing" className="py-24 bg-slate-900 scroll-mt-20 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-base font-semibold text-indigo-400 tracking-wide uppercase">Transparent Pricing</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-white sm:text-4xl">
            SaaS & Hybrid Deployment Models
          </p>
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto">
            Choose the deployment that fits your security posture. From fully managed SaaS to air-gapped on-premise.
          </p>
        </div>

        {/* Competitor Comparison Strip *\/}
        <div className="mb-16 bg-slate-950 rounded-xl border border-slate-800 p-6 max-w-4xl mx-auto hidden md:block">
           <h3 className="text-center text-white font-bold mb-6">Why switch from legacy vendors?</h3>
           <div className="grid grid-cols-3 gap-4 text-sm">
              <div className="col-span-1 text-slate-400 font-medium">Feature</div>
              <div className="col-span-1 text-center font-bold text-indigo-400">SecureStor</div>
              <div className="col-span-1 text-center text-slate-500">Legacy Vendors (JFrog/Nexus)</div>
              
              <div className="col-span-3 h-px bg-slate-800 my-2"></div>

              <div className="col-span-1 text-slate-300">Security Scanning</div>
              <div className="col-span-1 text-center text-emerald-400 flex justify-center"><Check className="w-4 h-4"/> <span className="ml-1">Included</span></div>
              <div className="col-span-1 text-center text-slate-500">$$$ Add-on</div>

              <div className="col-span-3 h-px bg-slate-800 my-2"></div>

              <div className="col-span-1 text-slate-300">High Availability</div>
              <div className="col-span-1 text-center text-emerald-400 flex justify-center"><Check className="w-4 h-4"/> <span className="ml-1">Standard</span></div>
              <div className="col-span-1 text-center text-slate-500">Enterprise Only</div>

               <div className="col-span-3 h-px bg-slate-800 my-2"></div>

              <div className="col-span-1 text-slate-300">Pricing Model</div>
              <div className="col-span-1 text-center text-emerald-400">Flat User Fee ($10)</div>
              <div className="col-span-1 text-center text-slate-500">Complex / Consumption</div>
           </div>
        </div>

        {/* Pricing Cards Grid - Updated to lg:grid-cols-4 to accommodate 4 tiers *\/}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto mb-16">
          {TIERS.map((tier) => (
            <div 
              key={tier.name} 
              className={`relative flex flex-col rounded-2xl border ${
                tier.highlighted 
                  ? 'border-indigo-500 bg-slate-800 shadow-2xl shadow-indigo-500/20 z-10 scale-105' 
                  : 'border-slate-800 bg-slate-900/50'
              } p-6`}
            >
              {tier.highlighted && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-indigo-500 text-white text-xs font-bold uppercase tracking-wider py-1 px-3 rounded-full">
                  {tier.badge}
                </div>
              )}
              
              <div className="mb-6">
                <h3 className="text-lg font-medium text-white">{tier.name}</h3>
                <div className="mt-4 flex items-baseline text-white">
                  <span className="text-3xl font-extrabold tracking-tight">{tier.price}</span>
                  {tier.period && <span className="ml-1 text-sm font-medium text-slate-400">{tier.period}</span>}
                </div>
                <p className="mt-2 text-xs text-slate-400 min-h-[40px]">{tier.description}</p>
              </div>

              <ul className="space-y-4 mb-8 flex-1">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-start">
                    <div className="flex-shrink-0">
                      <Check className="h-4 w-4 text-indigo-400" />
                    </div>
                    <p className="ml-3 text-sm text-slate-300">{feature}</p>
                  </li>
                ))}
              </ul>

              <a 
                href={tier.name.includes('Enterprise') || tier.name === 'Self-Managed' ? '#contact' : '#'}
                className={`w-full block text-center py-3 px-6 rounded-lg font-medium transition-colors text-sm ${
                  tier.highlighted
                    ? 'bg-indigo-600 hover:bg-indigo-500 text-white'
                    : 'bg-slate-700 hover:bg-slate-600 text-white'
                }`}
              >
                {tier.cta}
              </a>
            </div>
          ))}
        </div>

        {/* Deployment Models & Add-ons *\/}
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
             <h3 className="text-white font-bold text-xl mb-6 flex items-center gap-2">
                <Server className="h-5 w-5 text-indigo-400"/> Deployment Details
             </h3>
             <div className="space-y-6">
                <div className="flex gap-4">
                   <div className="bg-slate-900 p-2 rounded h-fit"><Cloud className="h-5 w-5 text-sky-400"/></div>
                   <div>
                      <h4 className="text-white font-semibold">SaaS Enterprise ($750/mo)</h4>
                      <p className="text-sm text-slate-400">Hosted on our SOC2 compliant cloud. We handle upgrades, backups, and scaling. Includes high-performance global CDN.</p>
                   </div>
                </div>
                <div className="flex gap-4">
                   <div className="bg-slate-900 p-2 rounded h-fit"><Shield className="h-5 w-5 text-emerald-400"/></div>
                   <div>
                      <h4 className="text-white font-semibold">Self-Managed ($2,999/yr)</h4>
                      <p className="text-sm text-slate-400">Fixed annual license fee. You deploy on your own infrastructure (AWS, Azure, On-prem). Ideal for air-gapped networks.</p>
                   </div>
                </div>
             </div>
          </div>

          <div className="bg-slate-950 border border-slate-800 rounded-xl p-8">
             <h3 className="text-white font-bold text-xl mb-6">Enterprise Add-ons</h3>
             <div className="space-y-4">
                {ADDONS.map((addon, idx) => (
                   <div key={idx} className="flex justify-between items-start border-b border-slate-900 pb-4 last:border-0 last:pb-0">
                      <div>
                         <h4 className="text-white font-semibold">{addon.name}</h4>
                         <p className="text-sm text-slate-400 mt-1">{addon.description}</p>
                      </div>
                      <span className="text-indigo-400 font-bold whitespace-nowrap ml-4">{addon.price}</span>
                   </div>
                ))}
             </div>
          </div>
        </div>
        
        <div className="mt-8 text-center text-sm text-slate-500">
           Prices in USD. VAT may apply based on your location.
        </div>
      </div>
    </section>
  );
  */
};

export default Pricing;