import React from 'react';
import ScrollMenu from 'react-horizontal-scrolling-menu';
import './MultimediaLists.css';
import MultimediaCard from "../MutimediaCard/MultimediaCard";


const Arrow = ({ text, className }) => {
    return (
        <div
            className={className}
        >{text}</div>
    );
};


const ArrowLeft = Arrow({ text: '<', className: 'arrow-prev' });
const ArrowRight = Arrow({ text: '>', className: 'arrow-next' });


const MultimediaLists=(props) =>{

        const menu = MultimediaCard({cardlist: props.titles.layoutTitles.titles})
        return (
            <div style={{ marginTop: '20px'}}>
                <div style={{marginLeft: '39px',marginBottom: '10px',
                    fontSize: '12px',
                    color: 'yellow'}}>{props.heading}</div>
                <div className="App" style={{ border: '1px solid', color:'black'}}>
                    <ScrollMenu
                        data={menu}
                        arrowLeft={ArrowLeft}
                        arrowRight={ArrowRight}
                        alignCenter={false}
                        dragging={false}
                        hideArrows={true}
                        wheel={true}

                    />

                </div>
            </div>

        );
}
export default MultimediaLists;
