import { useSelector } from "react-redux";
import Block from "../Block";

const WebApps = () => {

    const webApps = useSelector(state => state.store.webApps);

    return (
        <Block title='Web-apps'>
            <div className="phlcom-block-webapps">
                {webApps.map((app, i) => (
                    <a href={app.href} key={`webApp_${i}`}>
                        <div className="phlcom-block-webapps-el" >
                            <div className="phlcom-block-webapps-img">
                                {app.img ? <img src={app.img} alt='webAppImg' /> : null}
                            </div>
                            <div className="phlcom-block-webapps-info">
                                <div className="phlcom-block-webapps-title">{app.title}</div>
                                <div className="phlcom-block-webapps-description">{app.description}</div>
                            </div>
                        </div>
                    </a>
                ))}
            </div>
        </Block>
    )
}

export default WebApps;