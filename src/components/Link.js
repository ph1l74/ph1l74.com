import { motion } from "framer-motion";

const Link = ({ el, customStyle, animation }) => {
  return (
    <motion.a
      href={el.href}
      target={el.target || "_self"}
      className="phlcom-nav-link"
      style={customStyle}
      variants={animation}
    >
      <div className="phlcom-nav-link-title">
        {el.icon ? (
          <img src={el.icon} alt="icon" className="phlcom-phlart-logo" />
        ) : (
          el.title
        )}
      </div>
      <div className="phlcom-nav-link-hidden">
        {el.icon ? (
          <img src={el.icon} alt="icon" className="phlcom-phlart-logo" />
        ) : (
          el.title
        )}
      </div>
    </motion.a>
  );
};

export default Link;
