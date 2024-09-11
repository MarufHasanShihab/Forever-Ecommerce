import PropTypes from "prop-types"
import { useContext } from "react";
import { shopContext } from "../context/ShopContext";
import { Link } from "react-router-dom";


const ProductItem = ({product}) => {
    const {_id, image, name, price} = product || {};
    const {currency} = useContext(shopContext)
    return (
        <Link to={`/product/${_id}`} className="text-gray-700 cursor-pointer">
            <div className="overflow-hidden">
            <img src={image[0]} alt="prodcut_img" className="hover:scale-110 transition ease-in-out" />
            <p className="pt-3 pb-1 text-sm">{name}</p>
            <p className="text-sm font-medium">{currency}{price}</p>
            </div>
        </Link>
    );
};

ProductItem.propTypes = {
    product: PropTypes.object.isRequired
}

export default ProductItem;