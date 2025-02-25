import React from 'react'

export default function trainers() {
  return (
    <section className="trainer-listing flex-grow-1 py-5">
        <div className="container">
            <h1 className="text-center mb-5">Available Trainers</h1>

            <div className="row">
                <div className="col">
                    <div className="card shadow">
                        <div className="card-body">
                            <table className="table table-striped">
                                <thead>
                                    <tr>
                                        <th>Trainer Name</th>
                                        <th>Specialization</th>
                                        <th>Charges (per session)</th>
                                        <th>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td>Alice Johnson</td>
                                        <td>Yoga</td>
                                        <td>$50</td>
                                        <td>
                                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#requestModal" data-trainer="Alice Johnson" data-charges="50">
                                                <i className="fas fa-envelope"></i> Request
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Bob Williams</td>
                                        <td>Weightlifting</td>
                                        <td>$60</td>
                                        <td>
                                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#requestModal" data-trainer="Bob Williams" data-charges="60">
                                                <i className="fas fa-envelope"></i> Request
                                            </button>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Charlie Brown</td>
                                        <td>Cardio</td>
                                        <td>$45</td>
                                        <td>
                                            <button className="btn btn-warning" data-bs-toggle="modal" data-bs-target="#requestModal" data-trainer="Charlie Brown" data-charges="45">
                                                <i className="fas fa-envelope"></i> Request
                                            </button>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
