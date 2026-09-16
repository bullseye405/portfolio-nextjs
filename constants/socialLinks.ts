import { Github, Globe, Linkedin, Twitter } from 'lucide-react';

export const SOCIALS = {
  mail: 'bullseye405@gmail.com',
  github: 'https://github.com/bullseye405',
  twitter: 'https://twitter.com/bullseye405',
  linkedin: 'https://www.linkedin.com/in/samir-prajapati-b9b589174',
  carrdCo: 'https://samir-prajapati.carrd.co/',
  upwork: 'https://www.upwork.com/freelancers/~01fba7ca6af5995f8d',
};

export const socialLinks = [
  {
    id: 1,
    icon: Github,
    url: SOCIALS.github,
  },
  {
    id: 2,
    icon: Twitter,
    url: SOCIALS.twitter,
  },
  {
    id: 3,
    icon: Linkedin,
    url: SOCIALS.linkedin,
  },
  {
    id: 4,
    icon: Globe,
    url: SOCIALS.upwork,
  },
];
