const Link = ({ el, customStyle }) => {
    return (
        <a href={el.href} target={el.target || '_self'} className="phlcom-nav-link" style={customStyle}>
            <div className="phlcom-nav-link-title">
                {el.icon ? <img src={el.icon} alt='icon' className="phlcom-phlart-logo" /> : el.title}
            </div>
            <div className="phlcom-nav-link-hidden">
                {el.icon ? <img src={el.icon} alt='icon' className="phlcom-phlart-logo" /> : el.title}
            </div>
        </a>
    )
}

export default Link;