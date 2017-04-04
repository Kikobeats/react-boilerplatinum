import React from 'react'

const test = () => (
    <div className="large-3 large-centered columns">
        <div className="login-box">
            <div className="row">
                <div className="large-12 columns">
                    <form>
                        <div className="row">
                            <div className="large-12 columns">
                                <input type="text" name="username" placeholder="Username" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 columns">
                                <input type="password" name="password" placeholder="Password" />
                            </div>
                        </div>
                        <div className="row">
                            <div className="large-12 large-centered columns">
                                <input type="submit" className="button expand" value="Log In" />
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </div>
)

export default test
