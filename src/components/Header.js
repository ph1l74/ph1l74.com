import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { animations } from "../constants";
import Navigation from "./Navigation";
import "./Header.css";

const Header = () => {
  const title = useSelector((state) => state.store.headerTitle);

  return (
    <motion.div
      className="phlcom-header"
      initial={{ background: "#000000", position: "absolute", height: "100vh" }}
      animate={{ background: 'var(--color-grey)', position: "inherit", height: "inherit" }}
      transition={{ duration: 1, type: 'just', delay: 0.25 }}
    >
      <Navigation />
      <motion.div
        className="phlcom-header-title"
        initial="hidden"
        animate="visible"
        variants={animations.headerTitle}
      >
        {title}
      </motion.div>
    </motion.div>
  );
};

export default Header;
