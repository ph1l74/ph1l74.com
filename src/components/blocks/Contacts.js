import { useSelector } from "react-redux";
import Block from "../Block";
import Link from "../Link";

const Contacts = () => {

    const contactsData = useSelector(state => state.store.contacts);

    return (
        <Block title='Contacts'>
            <div className="phlcom-block-projects">
                {contactsData.map((projectCat, i) => (
                    <div className="phlcom-block-projects-el" key={`projectCat_${i}`}>
                        <div className="phlcom-block-projects-cat">{projectCat.title}</div>
                        <div className="phlcom-block-projects-items">
                            {
                                projectCat.items.map((project, j) =>
                                    <div key={`project_${j}`}>
                                        <Link el={{ title: project.title, href: project.href }} customStyle={{ color: 'var(--color-black' }} />
                                    </div>
                                )
                            }
                        </div>

                    </div>
                ))}
            </div>
        </Block>
    )
}

export default Contacts;