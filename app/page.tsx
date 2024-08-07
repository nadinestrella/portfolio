import { Metadata } from 'next';
import { AboutMe } from './components/AboutMe';
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
    <main className="p-2  md:mx-auto lg:flex lg:flex-row max-w-screen-xl mx-auto">
      <div className="min-w-80 lg:flex lg:flex-col mt-12 lg:gap-3 ">
        <Skills title="Skills" />
      </div>
      <div>
        <MyProjects title="My Projects" />
        <Education title="Education" />
        <Experience title="Experience" />
        <ContactMe title="Contact me" />
      </div>
    </main>
  );
}
