import { useSelector } from "react-redux";
import Block from "../Block";
import Link from "../Link";

const Contacts = () => {
    return (
        <Block title='Brief Info'>
            <div className="phlcom-block-info">{briefInfoText}</div>
            <div className="phlcom-block-info-photo">
                <img src="/img/avatar.jpg" alt="avatar" />
            </div>
            <div>

                <Link el={{ title: 'more', href: "/about" }} customStyle={{ color: 'var(--color-black)' }} />
            </div>
        </Block>
    )
}

export default Contacts;