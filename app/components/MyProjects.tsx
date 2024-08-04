import React from 'react';
import { Card } from '../ui/Card';
import { Title } from '../ui/Title';

export const MyProjects = ({ title }) => {
  return (
    <div>
      <Title title={title} />
      <Card />
      <Card />
      <Card />
    </div>
  );
};
