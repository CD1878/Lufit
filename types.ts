import React from 'react';

export enum Page {
  Home = 'home',
  InvalGym = 'invalgym',
  PauzeSport = 'pauzesport',
  Naschools = 'naschools',
  TotaalOntzorgen = 'totaalontzorgen',
  OverOns = 'overons',
  Team = 'team',
  Klanten = 'klanten',
  Reviews = 'reviews',
  WerkenBij = 'werkenbij',
  Contact = 'contact'
}

export interface NavItem {
  label: string;
  page: Page;
}

export interface ServiceCardProps {
  title: string;
  description: string;
  icon?: React.ReactNode;
  onClick: () => void;
}