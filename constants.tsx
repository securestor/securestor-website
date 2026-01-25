import { 
  Box, 
  ShieldCheck, 
  Globe, 
  Server, 
  Database, 
  Lock, 
  Activity, 
  Zap,
  Layers,
  Search,
  FileCode,
  Key
} from 'lucide-react';
import { Feature, NavItem } from './types';

export const NAV_ITEMS: NavItem[] = [
  { label: 'Features', href: '#features' },
  { label: 'Security', href: '#security' },
  { label: 'Enterprise', href: '#enterprise' },
  // { label: 'Pricing', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
];

export const FEATURES: Feature[] = [
  // Artifact Management
  {
    title: 'Multi-Format Support',
    description: 'Unified storage for Docker, npm, Maven, PyPI, Helm, and Generic artifacts.',
    icon: Layers,
    category: 'management'
  },
  {
    title: 'OCI & Registry Compliance',
    description: 'Full Docker Registry v2 and npm registry compatibility guaranteed.',
    icon: Box,
    category: 'management'
  },
  {
    title: 'Erasure Coding',
    description: 'Configurable redundancy schemes (8+4, 16+8) for extreme durability.',
    icon: Database,
    category: 'management'
  },
  
  // Security
  {
    title: 'Automated Scanning',
    description: 'Integrated detection using OWASP dep-scan, Blint, and Grype.',
    icon: Search,
    category: 'security'
  },
  {
    title: 'Compliance Auditing',
    description: 'Built-in policy enforcement, license checks, and comprehensive audit trails.',
    icon: FileCode,
    category: 'security'
  },
  {
    title: 'Real-time Alerts',
    description: 'Immediate notification triggers for critical vulnerabilities.',
    icon: Activity,
    category: 'security'
  },

  // Enterprise
  {
    title: 'SSO & RBAC',
    description: 'Complete tenant isolation with OIDC/OAuth2 support via Keycloak.',
    icon: Key,
    category: 'enterprise'
  },
  {
    title: 'Multi-Region Replication',
    description: 'Active-active replication across regions with configurable sync.',
    icon: Globe,
    category: 'enterprise'
  },
  {
    title: 'Smart Caching',
    description: 'Intelligent proxying for Docker Hub and npm with offline mode.',
    icon: Zap,
    category: 'proxy'
  }
];