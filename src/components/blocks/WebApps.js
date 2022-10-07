import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Block from "../Block";
import { animations } from "../../constants";

const WebApps = () => {
  const webApps = useSelector((state) => state.store.webApps);

  return (
    <Block title="Web-apps">
      <motion.div
        className="phlcom-block-webapps"
        variants={animations.webAppsContainer}
        initial="hidden"
        animate="visible"
      >
        {webApps.map((app, i) => (
          <a href={app.href} key={`webApp_${i}`}>
            <motion.div
              className="phlcom-block-webapps-el"
              variants={animations.webAppsItem}
              whileHover={{ scale: 1.01 }}
              whileTap={{
                scale: 0.99,
              }}
            >
              <div className="phlcom-block-webapps-img">
                {app.img ? <img src={app.img} alt="webAppImg" /> : null}
              </div>
              <div className="phlcom-block-webapps-info">
                <div className="phlcom-block-webapps-title">{app.title}</div>
                <div className="phlcom-block-webapps-description">
                  {app.description}
                </div>
              </div>
            </motion.div>
          </a>
        ))}
      </motion.div>
    </Block>
  );
};

export default WebApps;
