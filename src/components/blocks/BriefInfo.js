import { useSelector } from "react-redux";
import Block from "../Block";
import Link from "../Link";

const BriefInfo = () => {

    const briefInfoText = useSelector(state => state.store.briefInfoText)

    return (
        <Block>
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

export default BriefInfo;