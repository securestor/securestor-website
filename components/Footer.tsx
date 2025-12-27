import React, { useState } from 'react';
import { Shield, Github, Twitter, Linkedin, X } from 'lucide-react';

const Footer: React.FC = () => {
  const [showPrivacy, setShowPrivacy] = useState(false);
  const [showTerms, setShowTerms] = useState(false);

  const LegalModal: React.FC<{ title: string; content: React.ReactNode; onClose: () => void }> = ({ title, content, onClose }) => (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-950/80 backdrop-blur-sm">
      <div className="bg-slate-900 border border-slate-700 rounded-xl max-w-2xl w-full max-h-[80vh] overflow-y-auto relative shadow-2xl">
        <div className="sticky top-0 bg-slate-900 p-4 border-b border-slate-700 flex justify-between items-center">
          <h3 className="text-xl font-bold text-white">{title}</h3>
          <button onClick={onClose} className="text-slate-400 hover:text-white"><X className="h-6 w-6"/></button>
        </div>
        <div className="p-6 text-slate-300 text-sm leading-relaxed space-y-4">
          {content}
        </div>
      </div>
    </div>
  );

  return (
    <footer className="bg-slate-950 border-t border-slate-900 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <Shield className="h-6 w-6 text-indigo-500" />
              <span className="font-bold text-xl text-white">SecureStor</span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed">
              The standard for secure artifact management. Built for teams that demand security, compliance, and speed.
            </p>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#features" className="hover:text-indigo-400 transition-colors">Features</a></li>
              <li><a href="#enterprise" className="hover:text-indigo-400 transition-colors">Integrations</a></li>
              <li><a href="#pricing" className="hover:text-indigo-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Changelog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Documentation</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">API Reference</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-indigo-400 transition-colors">Blog</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm text-slate-500">
              <li><button onClick={() => setShowTerms(true)} className="hover:text-indigo-400 transition-colors">Terms of Service</button></li>
              <li><button onClick={() => setShowPrivacy(true)} className="hover:text-indigo-400 transition-colors">Privacy Policy</button></li>
              <li><a href="#contact" className="hover:text-indigo-400 transition-colors">Contact</a></li>
              <li className="flex gap-4 mt-4">
                <a href="https://github.com/securestor/securestor" target="_blank" rel="noopener noreferrer">
                  <Github className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                </a>
                <a href="https://x.com/securestor_io" target="_blank" rel="noopener noreferrer">
                  <X className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                </a>
                <a href="https://www.linkedin.com/company/securestor/about/?viewAsMember=true" target="_blank" rel="noopener noreferrer">
                  <Linkedin className="h-5 w-5 hover:text-white transition-colors cursor-pointer" />
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-slate-900 pt-8 text-center text-slate-600 text-sm">
          &copy; {new Date().getFullYear()} SecureStor Inc. All rights reserved.
        </div>
      </div>

      {showPrivacy && (
        <LegalModal 
          title="Privacy Policy" 
          onClose={() => setShowPrivacy(false)} 
          content={
            <>
              <p><strong>1. Introduction</strong><br/>SecureStor respects your privacy. This policy explains how we handle your data.</p>
              <p><strong>2. Data Collection</strong><br/>We only collect information necessary to provide our services, such as email addresses for account creation and artifact metadata for security scanning.</p>
              <p><strong>3. Security</strong><br/>We use industry-standard encryption (AES-256) to protect your data at rest and in transit.</p>
              <p><strong>4. Contact</strong><br/>For privacy concerns, email privacy@securestor.io.</p>
            </>
          }
        />
      )}

      {showTerms && (
        <LegalModal 
          title="Terms of Service" 
          onClose={() => setShowTerms(false)} 
          content={
            <>
              <p><strong>1. Acceptance</strong><br/>By using SecureStor, you agree to these terms.</p>
              <p><strong>2. Usage</strong><br/>You may not use SecureStor to host illegal content or malware. We reserve the right to terminate accounts that violate this policy.</p>
              <p><strong>3. Liability</strong><br/>SecureStor is provided "as is". We are not liable for data loss, though we take every precaution to prevent it.</p>
            </>
          }
        />
      )}
    </footer>
  );
};

export default Footer;