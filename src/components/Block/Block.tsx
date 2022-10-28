import './Block.css';
import { motion } from 'framer-motion';
import './BlocksStyles.css';
import { animations } from '@/constants/';

type BlockComponentProps = {
  title?: string;
  children: React.ReactNode;
};

const BlockComponent: React.FC<BlockComponentProps> = (props) => {
  return (
    <motion.div
      className='phlcom-block'
      variants={animations.defaultBlock}
      initial='hidden'
      animate='visible'
    >
      {props.title && <div className='phlcom-block-title'>{props.title}</div>}
      <div className='phlcom-block-content'>{props.children}</div>
    </motion.div>
  );
};

export { BlockComponent };
