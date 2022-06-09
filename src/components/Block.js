import './Block.css'
import './BlocksStyles.css'

const Block = ({ title, children }) => {
    return (
        <div className="phlcom-block">
            {
                title ?
                    <div className="phlcom-block-title">{title}</div>
                    : null
            }
            <div className='phlcom-block-content'>
                {children}
            </div>
        </div>
    )
}

export default Block;