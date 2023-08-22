import { IResourceComponentsProps } from '@refinedev/core';
import { AntdListInferencer  } from '@refinedev/inferencer/antd';
import React from 'react';

export const UserList: React.FC<IResourceComponentsProps> = () => {
  return <AntdListInferencer />;
};