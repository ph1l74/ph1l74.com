import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { animations } from '@/constants';
import { Navigation } from '@/components/Navigation';
import { StateType } from '@/types';
import './Header.css';

type HeaderComponentProps = {
  title?: string;
};

const HeaderComponent: React.FC<HeaderComponentProps> = (props) => {
  const { title } = props;

  return (
    <motion.div
      className='phlcom-header'
      initial={{ height: '100vh' }}
      animate={{
        background: 'var(--color-grey)',
        position: 'inherit',
        height: 'inherit',
      }}
      transition={{ delay: 0.25 }}
    >
      <Navigation />
      <motion.div
        className='phlcom-header-title'
        initial='hidden'
        animate='visible'
        variants={animations.headerTitle}
      >
        {title ? title : ''}
      </motion.div>
    </motion.div>
  );
};

export { HeaderComponent };
