import React, {
  useEffect,
  useState
} from "react";

import {
  useDispatch,
  useSelector
} from "react-redux";

import {
  useParams,
  useNavigate
} from "react-router-dom";

import {
  FaStar,
  FaStarHalfAlt,
  FaRegStar
} from "react-icons/fa";

import {
  fetchProductById
} from "../redux/productSlice";

const ProductDetailsPage = () => {
  const { id } = useParams();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const [selectedImage, setSelectedImage] =
    useState(0);

  const {
    selectedProduct,
    loading
  } = useSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchProductById(id));
  }, [dispatch, id]);

  const renderStars = (rating) => {
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      if (rating >= i) {
        stars.push(<FaStar key={i} />);
      } else if (rating >= i - 0.5) {
        stars.push(
          <FaStarHalfAlt key={i} />
        );
      } else {
        stars.push(
          <FaRegStar key={i} />
        );
      }
    }

    return stars;
  };

if (loading) {
  return (
    <div className="loading-container">
      <div className="loader"></div>
      <h2>Loading Product...</h2>
    </div>
  );
}

  if (!selectedProduct) {
    return <h2>Product Not Found</h2>;
  }

  return (
    <div className="details-page">

      <button
        className="back-btn"
        onClick={() => navigate("/")}
      >
        ← Back To Products
      </button>

      <div className="details-container">

        <div className="gallery-section">

          <div className="main-image">
            <img
              src={
                selectedProduct.images?.[
                  selectedImage
                ] ||
                selectedProduct.thumbnail
              }
              alt={
                selectedProduct.title
              }
            />
          </div>

          <div className="thumbnail-row">
            {selectedProduct.images?.map(
              (img, index) => (
                <img
                  key={index}
                  src={img}
                  alt=""
                  className={
                    selectedImage ===
                    index
                      ? "thumbnail active-thumbnail"
                      : "thumbnail"
                  }
                  onClick={() =>
                    setSelectedImage(
                      index
                    )
                  }
                />
              )
            )}
          </div>

        </div>

        <div className="product-info">

          <h1>
            {selectedProduct.title}
          </h1>

          <div className="rating-row">

            <div className="rating">
              {renderStars(
                selectedProduct.rating
              )}
            </div>

            <span>
              {
                selectedProduct.rating
              }
            </span>

            <span>
              (
              {selectedProduct
                .reviews
                ?.length || 0}
              Reviews)
            </span>

          </div>

          <div className="price-row">

            <h2>
              $
              {
                selectedProduct.price
              }
            </h2>

            <span className="discount-badge">
              {
                selectedProduct.discountPercentage
              }
              % OFF
            </span>

          </div>

          <div className="details-grid">

            <div>
              <strong>
                Brand
              </strong>
              <p>
                {
                  selectedProduct.brand
                }
              </p>
            </div>

            <div>
              <strong>
                Category
              </strong>
              <p>
                {
                  selectedProduct.category
                }
              </p>
            </div>

            <div>
              <strong>
                Stock
              </strong>
              <p>
                {
                  selectedProduct.stock
                }
              </p>
            </div>

            <div>
              <strong>
                SKU
              </strong>
              <p>
                {
                  selectedProduct.sku
                }
              </p>
            </div>

          </div>

          <div className="description">

            <h3>
              Description
            </h3>

            <p>
              {
                selectedProduct.description
              }
            </p>

          </div>

          <div className="service-info">

            <div className="service-card">

              <div className="service-icon">
                🛡️
              </div>

              <div>
                <h4>
                  Warranty
                </h4>

                <p>
                  {
                    selectedProduct.warrantyInformation
                  }
                </p>
              </div>

            </div>

            <div className="service-card">

              <div className="service-icon">
                🚚
              </div>

              <div>
                <h4>
                  Shipping
                </h4>

                <p>
                  {
                    selectedProduct.shippingInformation
                  }
                </p>
              </div>

            </div>

            <div className="service-card">

              <div className="service-icon">
                ✅
              </div>

              <div>
                <h4>
                  Availability
                </h4>

                <p className="stock-status">
                  {
                    selectedProduct.availabilityStatus
                  }
                </p>
              </div>

            </div>

          </div>

          <div className="reviews-section">

            <h2>
              Customer Reviews
            </h2>

            {selectedProduct.reviews?.map(
              (
                review,
                index
              ) => (

                <div
                  key={index}
                  className="review-card"
                >

                  <div className="review-header">

                    <h4>
                      {
                        review.reviewerName
                      }
                    </h4>

                    <div className="rating">
                      {renderStars(
                        review.rating
                      )}
                    </div>

                  </div>

                  <p className="review-comment">
                    "
                    {
                      review.comment
                    }
                    "
                  </p>

                  <small>
                    {new Date(
                      review.date
                    ).toLocaleDateString()}
                  </small>

                </div>

              )
            )}

          </div>

        </div>

      </div>

    </div>
  );
};

export default ProductDetailsPage;