import React from 'react'

export default function dashboard() {
  return (
    <section className="admin-dashboard flex-grow-1 py-5">
        <div className="container">
            <h1 className="text-center mb-5">Admin Dashboard</h1>

            <div className="row mb-5">
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Total Members</h5>
                            <p className="card-text display-4">120</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Total Revenue</h5>
                            <p className="card-text display-4">$12,000</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Upcoming Classes</h5>
                            <p className="card-text display-4">8</p>
                        </div>
                    </div>
                </div>
                <div className="col-md-3">
                    <div className="card text-center">
                        <div className="card-body">
                            <h5 className="card-title">Active Trainers</h5>
                            <p className="card-text display-4">5</p>
                        </div>
                    </div>
                </div>
            </div>

			<div className="row mb-5">
				<div className="col-md-3 mb-3 mb-md-0">
					<a href="add-member.html" className="btn btn-warning btn-lg w-100">Add New Member</a>
				</div>
				<div className="col-md-3 mb-3 mb-md-0">
					<a href="schedule-class.html" className="btn btn-warning btn-lg w-100">Schedule a Class</a>
				</div>
				<div className="col-md-3 mb-3 mb-md-0">
					<a href="add-trainer.html" className="btn btn-warning btn-lg w-100">Add a Trainer</a>
				</div>
				<div className="col-md-3">
					<a href="payments.html" className="btn btn-warning btn-lg w-100">View Payments</a>
				</div>
			</div>

            <div className="row">
                <div className="col">
                    <h2 className="mb-4">Recent Activity</h2>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Date</th>
                                <th>Activity</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>2023-10-01</td>
                                <td>New Member Added</td>
                                <td>John Doe (Basic Plan)</td>
                            </tr>
                            <tr>
                                <td>2023-10-02</td>
                                <td>Class Booked</td>
                                <td>Yoga Class at 6 PM</td>
                            </tr>
                            <tr>
                                <td>2023-10-03</td>
                                <td>Payment Received</td>
                                <td>$50 from Jane Smith</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </section>
  )
}
