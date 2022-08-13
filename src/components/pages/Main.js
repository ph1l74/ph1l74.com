import BriefInfo from '../blocks/BriefInfo';
import Contacts from '../blocks/Contacts';
import Projects from '../blocks/Projects';
import WebApps from '../blocks/WebApps';
import Footer from '../Footer';
import Header from '../Header';
import './Main.css'

const Main = () => {
    return (
        <div className="phlcom-page phlcom-main">
            <Header />
            <BriefInfo />
            <Projects />
            <WebApps />
            <Contacts />
            <Footer />
        </div>
    )
}

export default Main;