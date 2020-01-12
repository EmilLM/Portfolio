import React from 'react';

export default class Plans extends React.Component {
    render() {
        return (
            <div className="modal fade" id="plansModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">To do :</h4>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>
                        </div>
                        <div className="modal-body">
                            <h5>A series of goals I plan to achieve:</h5>
                            <ol>
                                <li>Create a website-type CV to practice Vue and Bootstrap.</li>
                                <li>Replace Bootstrap in React with react-strap.</li>
                                <li>Create a blog to learn WordPress.</li>
                                <li>Add back-end functionality to projects by learning PHP.</li>
                                <li>Learn React Redux and React Native.</li>
                                <li>Create more projects to practice.</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}