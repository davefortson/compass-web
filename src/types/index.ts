export interface LeadFormData {
  firstName: string;
  lastName: string;
  email: string;
  organization: string;
  orgType: string;
  challenge?: string;
}

export interface ModuleTab {
  id: string;
  label: string;
  description: string;
  persona: string;
  outcomes: string[];
  embedUrl: string;
  isProtected?: boolean;
  credentials?: string;
}

export interface PersonaData {
  id: string;
  icon: string;
  label: string;
  headline: string;
  body: string;
  modules: string[];
  quote: string;
  attribution: string;
}
