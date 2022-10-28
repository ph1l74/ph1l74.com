import { useSelector } from 'react-redux';
import { Block } from '@/components/Block';
import { Link } from '@/components/Link';
import { StateType } from '@/types/';

const BriefInfoBlock: React.FC = () => {
  const briefInfoText = useSelector(
    (state: { store: StateType }) => state.store.briefInfoText
  );

  return (
    <Block>
      <div className='phlcom-block-info'>{briefInfoText}</div>
      <div className='phlcom-block-info-photo'>
        <img src='/img/avatar.jpg' alt='avatar' />
      </div>
      <div>
        <Link
          el={{ title: 'more', href: '/about' }}
          customStyle={{ color: 'var(--color-black)' }}
        />
      </div>
    </Block>
  );
};

export { BriefInfoBlock };
