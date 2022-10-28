import './Footer.css';

const FooterComponent = () => {
  const currentYear = new Date().getFullYear();

  return (
    <div className='phlcom-block phlcom-footer'>
      <div className='phlcom-block-title'>{`${currentYear} © Filat Astakhov`}</div>
    </div>
  );
};

export { FooterComponent };
