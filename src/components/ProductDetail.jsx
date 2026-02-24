import { useParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const API_URL = "https://653a03ebe3b530c8d9e8f70d.mockapi.io/User";

export default function ProductDetail() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(`${API_URL}/${id}`)
      .then(res => setProduct(res.data))
      .catch(err => setError("Failed to load product"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <p>Loading product...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div className="card p-4 shadow-sm">
      <h2 className="mb-4 text-center">Product Details</h2>

      <div className="text-center mb-3">
        {product.avatar ? (
          <img
            src={product.avatar}
            alt={product.name}
            className="rounded-circle"
            style={{ width: 120, height: 120, objectFit: "cover" }}
          />
        ) : (
          <div
            className="rounded-circle bg-light d-inline-flex align-items-center justify-content-center"
            style={{ width: 120, height: 120, fontSize: 40 }}
          >
            {product.name?.[0]?.toUpperCase()}
          </div>
        )}
      </div>

      <Detail label="ID" value={product.id} />
      <Detail label="Name" value={product.name} />
      <Detail label="First Name" value={product.firstname} />
      <Detail label="Last Name" value={product.lastname} />
      <Detail label="Email" value={product.email} />
      <Detail label="Mobile" value={product.mobilephone} />
      <Detail label="Gender" value={product.gender} />
      <Detail label="DOB" value={product.dob} />
      <Detail label="Country" value={product.country} />

      <div className="text-center mt-4">
        <Link to="/productlist" className="btn btn-dark px-4 py-2">
          Back to List
        </Link>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <div className="mb-2">
      <strong>{label}: </strong>
      {value || "-"}
    </div>
  );
}