import "./Block.css";
import { motion } from "framer-motion";
import "./BlocksStyles.css";
import { animations } from "../constants";

const Block = ({ title, children }) => {
  return (
    <motion.div
      className="phlcom-block"
      variants={animations.defaultBlock}
      initial="hidden"
      animate="visible"
    >
      {title ? <div className="phlcom-block-title">{title}</div> : null}
      <div className="phlcom-block-content">{children}</div>
    </motion.div>
  );
};

export default Block;
