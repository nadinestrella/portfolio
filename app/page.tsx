import AboutMe from './aboutMe/page';
import { ContactMe } from './components/ContactMe';
import { Education } from './components/Education';
import { Experience } from './components/Experience';
import { MyProjects } from './components/MyProjects';
import Skills from './components/Skills';

export default function Home() {
  return (
    <main>
      <AboutMe />
      <Skills />
      <MyProjects />
      <Education />
      <Experience />
      <ContactMe />
    </main>
  );
}
