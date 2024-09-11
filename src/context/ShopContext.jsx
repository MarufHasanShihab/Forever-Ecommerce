import PropTypes from "prop-types"
import { createContext } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext(); 
const ShopProvider = ({children}) => {
    const currency = "$";
    const delivery_fee = 10;
    const value = {
        products,
        currency,
        delivery_fee
    }
    return (
        <shopContext.Provider value={value}>
            {children}
        </shopContext.Provider>
    );
};

ShopProvider.propTypes = {
    children: PropTypes.node.isRequired
}

export default ShopProvider;