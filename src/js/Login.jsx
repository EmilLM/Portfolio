import React from 'react';

export default class Login extends React.Component {
    render() {
        return (
            <div className="modal fade" id="loginModal">
                <div className="modal-dialog modal-dialog-centered ">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h4 className="modal-title">Log in</h4>
                            <button type="button" className="close"
                                    data-dismiss="modal">&times;</button>

                        </div>
                        <div className="modal-body">
                            <form className='was-validated'>
                                <div className="form-group">
                                    <label htmlFor="mail">Email:</label>
                                    <input type="email" className="form-control" id="mail" placeholder="Enter email"
                                           name="email"/>
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password:</label>
                                    <input type="password" className="form-control" id="password"
                                           placeholder="Enter password" name="password"/>
                                </div>
                                <div className="form-group form-check">
                                    <label className="form-check-label">
                                        <input className="form-check-input" type="checkbox" name="remember"/> Remember me
                                    </label>
                                </div>
                                <button type="submit" className="btn btn-primary">Submit</button>
                                {/*eslint-disable-next-line*/}
                                <div className='mt-3'>Don't have an account? Register <a href='#'>here</a></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}