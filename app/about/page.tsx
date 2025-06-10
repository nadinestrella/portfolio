import { Metadata } from 'next';
import React from 'react';
import { Title } from '../components/ui/Title';

export const metadata: Metadata = {
  title: 'About me | Nadine Estrella',
};

export default function About() {
  return (
    <main className="p-6 max-w-screen-lg mx-auto">
      <Title title="About me" />

      <p className="mb-2">
        Having spent eight years as an accountant, I have developed a keen eye
        for detail, strong analytical skills, and a dedication to accuracy and
        efficiency.{' '}
      </p>

      <p className="mb-2">
        Upon moving to <strong>London 🇬🇧</strong>, I faced the challenge of
        adapting to a new environment and overcoming language barriers. While
        working in Starbucks, I developed my communication skills and developed
        resilience in the face of adversity.{' '}
      </p>

      <p className="mb-2">
        In 2020, I made the decision to prioritize my family and took a break
        from my career to focus on motherhood 👶. However, my desire to continue
        learning and growing professionally never waned. Recognizing the
        increasing demand for technical skills in today&apos;s job market, I
        embarked on a journey to learn programming and enrolled in the{' '}
        <strong>Adalab Fullstack Web Development Bootcamp</strong> 🚀.
      </p>

      <p className="mb-2">
        Over the course, I have acquired proficiency in various programming
        languages, tools, and frameworks relevant to{' '}
        <strong>Full Stack Web Development</strong> 💻. Through hands-on
        projects and collaborative learning experiences, I have developed a
        strong foundation in <strong>front-end and back-end development</strong>
        , as well understanding of <strong>web design principles</strong> and{' '}
        <strong>best practices</strong> ✅.
      </p>

      <p className="mb-2">
        After finishing, I started collaborating with
        <strong>Adopta un Junior</strong> in their working groups, where,
        together with my teammates, we developed the Adopta un Junior blog.
      </p>
      <p className="mb-2">
        After that, I began collaborating on
        <strong>Adopta un Junior&apos;s main website.</strong>
      </p>
      <p className="mb-2">
        In <strong>October 2024</strong> , I started working at{' '}
        <strong>Aplanet</strong> as 👩‍💻 a Junior Frontend Developer. I have
        contributed to the development of the platform with a new design and new
        features, applying my previous knowledge and gaining new skills thanks
        to my teammates and daily work.
      </p>

      <p className="mb-2">
        I am now ready for a new adventure where I can continue growing my
        career as a Frontend Developer.
      </p>
      <p className="mb-6">
        I am excited 😊 about the opportunity to blend my diverse background and
        my recent tech training to contribute to the innovative projects. I am
        confident that my ability to <strong>adapt to new challenges</strong>,
        coupled with my <strong>passion for continuous learning</strong>, make
        me a valuable asset to your <strong>team</strong>.
      </p>
      <p>Nadine Estrella </p>
    </main>
  );
}
