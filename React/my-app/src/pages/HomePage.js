import React from 'react';
import HomeBanner from "../components/Home/HomeBanner";

const HomePage = () => {
    return (
        <div>
            <HomeBanner title="Welcome" subtitle="To Learn With me"

            jsonObj={{name:"irfan",age:27}}
            />
        </div>
    );
};

export default HomePage;