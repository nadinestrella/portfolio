import { AboutMe } from './components/AboutMe';
import { ContactMe } from './components/ContactMe';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { MyProjects } from './components/MyProjects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main className="p-2 md:px-3">
      <Skills title="Skills" />
      <MyProjects title="My Projects" />
      <Education title="Education" />
      <Experience title="Experience" />
      <ContactMe title="Contact me" />
    </main>
  );
}
