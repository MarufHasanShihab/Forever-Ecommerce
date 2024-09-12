import PropTypes from "prop-types"
import { createContext, useState } from "react";
import { products } from "../assets/frontend_assets/assets";

export const shopContext = createContext(); 
const ShopProvider = ({children}) => {
    const currency = "$";
    const delivery_fee = 10;
    const [search, setSearch] = useState('');
    const [showSearch, setShowSearch] = useState(false);
    const value = {
        products,
        currency,
        delivery_fee,
        search, 
        setSearch,
        showSearch,
        setShowSearch
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