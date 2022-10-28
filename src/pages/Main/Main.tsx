import { BriefInfo } from './Blocks/BriefInfo';
import { Contacts } from './Blocks/Contacts';
import { Projects } from './Blocks/Projects';
import { WebApps } from './Blocks/WebApps';
import { Footer } from '@/components/Footer/';
import { Header } from '@/components/Header/';
import './Main.css';

const MainPageComponent = () => {
  return (
    <div className='phlcom-page phlcom-main'>
      <Header />
      <BriefInfo />
      <Projects />
      <WebApps />
      <Contacts />
      <Footer />
    </div>
  );
};

export { MainPageComponent };
