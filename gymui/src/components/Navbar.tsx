import Link from "next/link";

const Navbar = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
            <Link className="navbar-brand" href="/">FitLife Gym</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <Link className="nav-link active" href="/">Home</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/membership">Membership</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/classes">Classes</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link" href="/contact">Contact</Link>
                    </li>
                </ul>
                <div className="auth-buttons ms-3">
                <Link href="/login" className="btn btn-outline-light me-2">Login</Link>
                    <button className="btn btn-warning">Sign Up</button>
                </div>
            </div>
        </div>
    </nav>
    );
};

export default Navbar;