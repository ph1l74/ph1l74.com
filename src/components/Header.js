import Navigation from './Navigation'
import './Header.css'
import { useSelector } from 'react-redux'


const Header = () => {

    const title = useSelector(state => state.store.headerTitle)


    return (
        <div className="phlcom-header">
            <Navigation />
            <div className="phlcom-header-title">
                {title}
            </div>
        </div>
    )
}

export default Header;