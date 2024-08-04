import React from 'react';
import { Card } from '../ui/Card';
import { Title } from '../ui/Title';

export const MyProjects = ({ title }) => {
  return (
    <div>
      <Title title={title} />
      <Card titleCard="GiftList" text="aaa" link="aaalink" />
      <Card titleCard="Harry Potter" text="aaa" link="aaalink" />
      <Card titleCard="My To Do List" text="aaa" link="aaalink" />
    </div>
  );
};
