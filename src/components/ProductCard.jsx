import React from "react";
import { useNavigate } from "react-router-dom";
import {
    FaStar,
    FaStarHalfAlt,
    FaRegStar
} from "react-icons/fa";

const ProductCard = ({ product }) => {
    const navigate = useNavigate();

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

    return (
        <div className="product-card">
            <img
                src={product.thumbnail}
                alt={product.title}
                className="product-image"
            />

            <h3 className="product-title">
                {product.title}
            </h3>

            <p className="brand">
                {product.brand}
            </p>

            <div className="price-rating">
                <h2>${product.price}</h2>

                <div className="rating">
                    {renderStars(product.rating)}
                    <span>
                        ({product.rating})
                    </span>
                </div>
            </div>

            <button
                className="details-btn"
                onClick={() =>
                    navigate(
                        `/product/${product.id}`
                    )
                }
            >
                View Details
            </button>
        </div>
    );
};

export default ProductCard;