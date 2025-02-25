import React from 'react'
import Link from "next/link";

export default function login() {
  return (
    <section className="login-section d-flex flex-grow-1 align-items-center">
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6 col-lg-4">
                    <div className="card shadow">
                        <div className="card-body p-4">
                            <h2 className="card-title text-center mb-4">Login</h2>
                            <div className="form-check form-switch d-flex justify-content-center mb-4">
                                <input className="form-check-input" type="checkbox" id="roleSwitch"/>
                                <label className="form-check-label ms-2" htmlFor="roleSwitch">Login as Admin</label>
                            </div>
                            <form>
                                <div className="mb-3">
                                    <label htmlFor="email" className="form-label">Email address</label>
                                    <input type="email" className="form-control" id="email" placeholder="Enter your email" required/>
                                </div>
                                <div className="mb-3">
                                    <label htmlFor="password" className="form-label">Password</label>
                                    <input type="password" className="form-control" id="password" placeholder="Enter your password" required/>
                                </div>
                                <div className="d-grid mb-3">
                                    <button type="submit" className="btn btn-warning">Login</button>
                                </div>
                                <div className="text-center">
                                    <a href="#" className="text-muted">Forgot Password?</a>
                                </div>
                            </form>
                            <hr className="my-4"/>
                            <div className="text-center">
                                <p className="mb-0">Dont have an account? <Link href="signup.html" className="text-warning">Sign Up</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
