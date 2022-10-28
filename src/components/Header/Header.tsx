import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { animations } from '@/constants';
import { Navigation } from '@/components/Navigation';
import { StateType } from '@/types';
import './Header.css';

const HeaderComponent: React.FC = () => {
  const title = useSelector(
    (state: { store: StateType }) => state.store.headerTitle
  );

  return (
    <motion.div
      className='phlcom-header'
      initial={{ background: '#000000', position: 'absolute', height: '100vh' }}
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
        {title}
      </motion.div>
    </motion.div>
  );
};

export { HeaderComponent };
