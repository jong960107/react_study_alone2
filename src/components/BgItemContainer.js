import './BgItemContainer.css';

function BgItemContainer(props) {
    return (
        <div className='cardWrapper'>
            <div className='cardContainer'>
                <h2>{props.title}</h2>
            </div>
            <div className='cardContainer2'>
                <h3>{props.content}</h3>
            </div>
        </div>
    );
}

export default BgItemContainer;