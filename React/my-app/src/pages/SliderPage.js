import React, {Component} from 'react';
import Slider from "../components/Home/Slider";

class SliderPage extends Component {
    constructor() {
        super();
    }

    render() {
        return (
            <div>
                <Slider title="welcome" subtitle="To Bangladesh"/>
            </div>
        );
    }
}

export default SliderPage;