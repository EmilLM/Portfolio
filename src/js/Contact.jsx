import React from 'react';

export default class Contact extends React.Component {
    render() {
        return(
            <div className="modal fade" id="contactModal">
                <div className="modal-dialog modal-dialog-centered">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Contact form</h4>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>

                        </div>
                        <div className="modal-body">
                            <form className='needs-validation'>
                                <div className="form-group">
                                    <label htmlFor="name">Name:</label>
                                    <input type="text" className="form-control" id="name" placeholder="Enter name"
                                           name="name"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="email">Email:</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter email"
                                           name="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="comment">Comment:</label>
                                    <textarea className="form-control" rows="5" id="comment" name="text"> </textarea>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}