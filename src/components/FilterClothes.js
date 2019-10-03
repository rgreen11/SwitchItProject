import React from 'react';


export default ({ stylesByCategory, clothingColor, clothingSeason, handleTops, handleTopStyle, handleTopColor, handleTopSeason }) => {
    return (
        <form>

            <select id="inputState" onChange={handleTopStyle} className="form-control tab-color" defaultValue="STYLE">
                <option value="STYLE" disabled>STYLE</option>
                {
                    stylesByCategory.top.map((style, i) => {
                        return <option key={i}>{style}</option>
                    })
                }
            </select>

            <select id="inputState" onChange={handleTopColor} className="form-control tab-color" defaultValue="COLOR">
                <option value="COLOR" disabled>COLOR</option>
                {
                    clothingColor.colors.map((color, i) => {
                        return <option key={i}>{color}</option>
                    })
                }
            </select>

            <select id="inputState" onChange={handleTopSeason} className="form-control tab-color" defaultValue="SEASON">
                <option value="SEASON" disabled>SEASON</option>
                {
                    clothingSeason.seasons.map((season, i) => {
                        return <option key={i}>{season}</option>
                    })
                }
            </select>

        </form>
    );
}