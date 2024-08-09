import { Metadata } from 'next';
import React from 'react';
import { Title } from '../components/ui/Title';

export const metadata: Metadata = {
  title: 'About me | Nadine Estrella',
};

export default function About() {
  return (
    <main className="p-3    max-w-screen-lg mx-auto">
      <Title title="About me" />
      <p className="flex flex-col justify-center  pb-3">
        I studied Business Administration and worked as an Administrative
        Assistant for a few years.
      </p>
      <p>
        In 2016, I moved to London and lived there until 2021. It was a great
        experience and a daily challenge. There, I worked as a barista at
        Starbucks until I had my first child.{' '}
      </p>
      <p>
        After dedicating a few years to my family, last year I decided that I
        wanted to embark on something new, have a challenge in mind, and do
        something different from what I had known until then.
      </p>
      <p>
        {' '}
        I decided to study <strong>Web Programming</strong> and enrolled in a
        bootcamp at Adalab. It has been a tough journey, but I am starting to be
        proud of the small steps I am taking
      </p>
    </main>
  );
}
