import React from 'react';
import "./searchItem.css"

const SearchItem = () => {
    return (
        <div className='searchItem'>
            <img src="https://xkld-nhatban.net/wp-content/uploads/2021/07/anime-phong-canh-thanh-pho-1.jpg" alt="" className="siImg" />
            <div className="siDesc">
                <h1 className="siTitle">Tower Street Apartments</h1>
                <span className="siDistance">500m from center</span>
                <span className="siTaxiOp">Free Airport taxi</span>
                <span className="siSubtitle">
                    Studio Apartment with Air conditioning
                </span>
                <span className="siFeatures">
                    Entire studio - 1 bathroom - 21m2 1 full bed
                </span>
                <span className="siCancelop">Free cancellation</span>
                <span className="siCancelOpSubtitle">
                    You can cancel later, so lock in this great price today !
                </span>
            </div>
            <div className="siDetails">
            <div className="siRating">
                <span>Excellent</span>
                <button>8.9</button>
            </div>
            <div className="siDetailTexts">
                <span className="siPrice">$123</span>
                <span className="siTaxOp">Includes taxes and fees</span>
                <button className="siCheckButton">See availability</button>
            </div>
            </div>
        </div>
    );
};

export default SearchItem;