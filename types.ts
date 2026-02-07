import React from 'react';

export enum Page {
  Home = 'HOME',
  InvalGym = 'INVAL_GYM',
  PauzeSport = 'PAUZE_SPORT',
  Naschools = 'NASCHOOLS',
  TotaalOntzorgen = 'TOTAAL_ONTZORGEN',
  OverOns = 'OVER_ONS',
  Contact = 'CONTACT'
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