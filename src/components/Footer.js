import './Footer.css';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    return (
        <div className="phlcom-block phlcom-footer">
            <div className="phlcom-block-title">{`${currentYear} © Filat Astakhov`}</div>
        </div>
    )
}

export default Footer;