import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

const API_URL = "https://653a03ebe3b530c8d9e8f70d.mockapi.io/User";

export default function ProductList() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get(API_URL)
      .then(res => setProducts(res.data))
      .catch(err => setError("Failed to load products"))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <p>Loading products...</p>;
  if (error) return <p className="text-danger">{error}</p>;

  return (
    <div>
      <h3>Product List</h3>

      <div className="row g-3 mt-3">
        {products.map(product => (
          <div className="col-md-4" key={product.id}>
            <div className="card p-3 shadow-sm h-100">
              {product.avatar ? (
                <img
                  src={product.avatar}
                  alt={product.name}
                  className="card-img-top"
                  style={{ height: "200px", objectFit: "cover" }}
                />
              ) : (
                <div
                  className="bg-light d-flex align-items-center justify-content-center"
                  style={{ height: "200px" }}
                >
                  No Image
                </div>
              )}

              <div className="card-body">
                <h5>{product.name}</h5>
                <p className="text-muted">{product.email}</p>
              </div>

              <div className="card-footer bg-white border-0">
                <Link
                  to={`/product/${product.id}`}
                  className="btn btn-primary w-100"
                >
                  View Details
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}