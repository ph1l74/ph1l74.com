import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Block } from '@/components/Block/';
import { Link } from '@/components/Link/';
import { animations } from '@/constants/';
import { StateType } from '@/types/';

const ContactsBlock: React.FC = () => {
  const contactsData = useSelector(
    (state: { store: StateType }) => state.store.contacts
  );

  return (
    <Block title='Contacts'>
      <motion.div
        className='phlcom-block-projects'
        variants={animations.projectsContainer}
        initial='hidden'
        animate='visible'
      >
        {contactsData.map((projectCat, i) => (
          <motion.div
            className='phlcom-block-projects-el'
            key={`projectCat_${i}`}
            variants={animations.projectsCatergory}
          >
            <div className='phlcom-block-projects-cat'>{projectCat.title}</div>
            <div className='phlcom-block-projects-items'>
              {projectCat.items.map((project, j) => (
                <div key={`project_${j}`}>
                  <Link
                    el={{ title: project.title, href: project.href }}
                    customStyle={{ color: 'var(--color-black' }}
                    animation={animations.projectsLinkItem}
                  />
                </div>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Block>
  );
};

export { ContactsBlock };
