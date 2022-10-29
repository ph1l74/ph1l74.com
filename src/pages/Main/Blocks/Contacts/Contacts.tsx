import { motion } from 'framer-motion';
import { useSelector } from 'react-redux';
import { Block } from '@/components/Block/';
import { Link } from '@/components/Link/';
import { animations } from '@/constants/';
import { ContactType, StateType } from '@/types/';

const ContactsBlock: React.FC = () => {
  const contactsData: ContactType[] = useSelector(
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
        {contactsData.map((contactCat, i) => (
          <motion.div
            className='phlcom-block-projects-el'
            key={`projectCat_${i}`}
            variants={animations.contactsCatergory}
          >
            <div className='phlcom-block-projects-cat'>{contactCat.title}</div>
            <div className='phlcom-block-projects-items'>
              {contactCat.items.map((contact, j) => (
                <div key={`contact_${j}`}>
                  <Link
                    el={{ title: contact.title, href: contact.href }}
                    customStyle={{ color: 'var(--color-black' }}
                    animation={animations.contactsLinkItem}
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
