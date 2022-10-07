import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import { animations } from "../constants";
import "./Navigation.css";
import Link from "./Link";

const Navigation = () => {
  const links = useSelector((state) => state.store.links);

  return (
    <motion.div
      className="phlcom-navigation"
      variants={animations.navContainer}
      initial="hidden"
      animate="visible"
    >
      {links.map((el, i) => (
        <Link el={el} key={`navlink_${i}`} animation={animations.navLinkItem} />
      ))}
      <Link
        el={{ title: "Filat Astakhov", href: "/" }}
        customStyle={{ fontSize: "24px", float: "right" }}
        animation={{ ...animations.navLinkItem, ...{ delay: 1.25 } }}
      />
    </motion.div>
  );
};

export default Navigation;
