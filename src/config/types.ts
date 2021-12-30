import React from 'react';

export type TAuthToken = string | null;

export type TRoute = {
  path: string;
  title: string;
  component: React.FC;
};

export type TNavItem = {
  title: string;
  icon?: string;
  route?: string;
  items?: TNavItem[];
};
