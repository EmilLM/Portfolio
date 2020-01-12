import React from 'react';

export default class AboutModal extends React.Component {
    render() {
        return (
            <div className="modal fade" id="aboutModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">What is this?</h4>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <h5>Main hub for all my front-end projects:</h5>
                            <ol>
                                <li>Landing page developed in creat-react-app: React, Sass, Bootstrap 4.</li>
                                <li>CountryInfo developed in Coder's lab boilerplate: React, Sass, manual RWD. Same app
                                    with <a href='https://countrynfo.web.app' target="_blank"  rel="noopener noreferrer">more animations</a>.</li>
                                <li>Weather App: jQuery, Ajax, Sass. Started as Coder's lab workshop, finished individually.</li>
                                <li>Website CV: Vue, Bootstrap 4, Sass. Made as a way to practice Vue.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}