import { useSelector } from "react-redux";
import './Navigation.css'
import Link from "./Link";

const Navigation = () => {

    const links = useSelector(state => state.store.links);

    return (
        <div className="phlcom-navigation">
            {links.map((el, i) => (
                <Link el={el} key={`navlink_${i}`} />
            ))}
            <Link el={{ title: 'Filat Astakhov', href: '/' }} customStyle={{fontSize: '24px', float: 'right'}} />
        </div>
    )
}

export default Navigation;