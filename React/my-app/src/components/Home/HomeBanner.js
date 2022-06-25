import React from 'react';

const HomeBanner = (props) => {
    return (
        <div>
            <h2>Home Banner</h2>
            <h3>{props.title}</h3>
            <h4>{props.subtitle}</h4>

            <hr/>

            <p>{props.jsonObj.name}</p>
            <p>{props.jsonObj.age}</p>
        </div>
    );
};

export default HomeBanner;