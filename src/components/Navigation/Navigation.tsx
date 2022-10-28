import { useSelector } from 'react-redux';
import { motion } from 'framer-motion';
import { animations } from '@/constants';
import { Link } from '@/components/Link';
import { StateType } from '@/types';
import './Navigation.css';

const NavigationComponent = () => {
  const links = useSelector((state: { store: StateType }) => state.store.links);

  return (
    <motion.div
      className='phlcom-navigation'
      variants={animations.navContainer}
      initial='hidden'
      animate='visible'
    >
      {links.map((el, i) => (
        <Link el={el} key={`navlink_${i}`} animation={animations.navLinkItem} />
      ))}
      <Link
        el={{ title: 'Filat Astakhov', href: '/' }}
        customStyle={{ fontSize: '24px', float: 'right' }}
        animation={{ ...animations.navLinkItem, ...{ delay: 1.25 } }}
      />
    </motion.div>
  );
};

export { NavigationComponent };