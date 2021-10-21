import React from 'react'
import Detailsectionstyle from './Detailsection.style'
import Topcastsection from './topcast/Topcastsection'
import Socialsection from './socialsection/Socialsection'
const Detailsection = () => {
    return (
        <Detailsectionstyle>
            <div className="container detailsection">
                <div className="row">
                    <div className="col-left">
                        <Topcastsection />
                        <Socialsection />
                    </div>
                    <div className="col-right">
                        <h2>col-right</h2>
                    </div>
                </div>
            </div>
        </Detailsectionstyle>
    )
}

export default Detailsection
