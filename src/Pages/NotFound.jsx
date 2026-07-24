import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="container text-center my-5 py-5" style={{ minHeight: "60vh" }}>
      <h1 className="display-1 fw-bold text-danger">404</h1>
      <h2>Page Not Found 404</h2>
      <p className="text-muted mt-3"></p>
      <Link to="/" className="btn btn-primary mt-4">
        Regresar al Home
      </Link>
    </div>
  );
};
export default NotFound;