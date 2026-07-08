import { JSX } from "react";

export interface Project {
  title: string;
  description: string;
  image: string;
  tech: string[];
  github: string;
  live: string;
  category: string;
  featured: boolean;
}

export interface SkillItem {
  name: string;
  icon: string;
}

export interface SkillCategory {
  title: string;
  shortTitle: string;
  icon: JSX.Element;
  color: string;
  accentColor: string;
  skills: SkillItem[];
}

export interface Interest {
  icon: string;
  label: string;
  color: string;
}

export interface Value {
  icon: JSX.Element;
  title: string;
  description: string;
}
