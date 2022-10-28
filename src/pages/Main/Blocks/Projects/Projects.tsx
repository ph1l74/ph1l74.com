import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { animations } from '@/constants';
import { Block } from '@/components/Block';
import { Link } from '@/components/Link';
import { ProjectType, StateType } from '@/types';

const ProjectsBlock = () => {
  const projectsData: ProjectType[] = useSelector(
    (state: { store: StateType }) => state.store.projects
  );

  return (
    <Block title='Projects'>
      <motion.div
        className='phlcom-block-projects'
        variants={animations.projectsContainer}
        initial='hidden'
        animate='visible'
      >
        {projectsData.map((projectCat, i) => (
          <motion.div
            className='phlcom-block-projects-el'
            key={`projectCat_${i}`}
            variants={animations.projectsCatergory}
          >
            <div className='phlcom-block-projects-cat'>{projectCat.title}</div>
            <div className='phlcom-block-projects-items'>
              {projectCat.items.map((project, j) => (
                <div key={`webApp_${i}`}>
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

export { ProjectsBlock };
