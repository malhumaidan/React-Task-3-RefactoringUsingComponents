import products from "../../products";
import Product from "./Item";

const ProductList = () =>{
    const productList = products.map((product) => <Product name={product.name} image= {product.image} price={product.price} key={product.id}></Product>);
    return(
        <div className="list">{productList}</div>
    );
}

export default ProductList