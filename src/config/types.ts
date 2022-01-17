import React from 'react';

export type TAuthToken = string | null;

export type TRoute = {
  path: string;
  component: React.FC;
};

export type TNavItem = {
  title: string;
  icon?: string;
  route?: string;
  items?: TNavItem[];
};

export interface IDataWorkflow {
  createdBy: string;
  updatedBy: string;
  createdAt: string;
  updatedAt: string;
  isDeleted: boolean;
}

export interface IDataMeta {
  uuid: string;
  property: string;
  name: string;
  content: string;
}

export interface IDataEntity {
  uuid?: string;
  title: string;
  workflow?: IDataWorkflow;
}
