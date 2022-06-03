import React from 'react'

const CountryDetails  = () => {
    return(
        <div className='country_details'>
            <button className='back'>
                <p>Go Back</p> 
            </button>
            <div className="country_details_body">
                <div className="img_container">
                    <img src="data:image/png;base64,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" alt="" />
                </div>
                <div className="info">
                    <h2>Name</h2>
                    <div className="info_container">
                        <div className="left_info">
                            <p>Native Name : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>population : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>Region : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>Sub Region : {" "}
                                <span className='values'>Test</span>
                            </p>

                        </div>
                        <div className="right_info">
                        <p>Capitals : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>Top-level Domain : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>Currencies : {" "}
                                <span className='values'>Test</span>
                            </p>
                            <p>Languges: {" "}
                                <span className='values'>Test</span>
                            </p>

                        </div>
                    </div>
                    Border Countries :
                    <div className="border_country">
                        <p>Test</p>
                    </div>
                    <div className="border_country">
                        <p>Test</p>
                    </div>
                    <div className="border_country">
                        <p>Test</p>
                    </div>
                </div>
            </div>
              
        </div>
    )
}
export default CountryDetails;