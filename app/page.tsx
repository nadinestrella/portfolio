import { Metadata } from 'next';
import { ContactMe } from './components/ContactMe';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { MyProjects } from './components/MyProjects';
import Skills from './components/Skills';

export const metadata: Metadata = {
  title: 'Nadine Estrella',
};

export default function Home() {
  return (
    <main className="p-3  md:mx-auto lg:flex lg:flex-row max-w-screen-lg mx-auto">
      <div className="min-w-60 flex items-center md:items-start flex-col gap-3">
        <Skills title="Skills" />
      </div>
      <div>
        <MyProjects title="Projects" />
        <Education title="Education" />
        <Experience title="Experience" />
        <ContactMe title="Contact me" />
      </div>
    </main>
  );
}
