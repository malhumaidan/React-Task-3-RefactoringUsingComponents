const Product = (props) =>{
    return(
        <div className="product">
          <img className="productImage" alt={props.name} src={props.image} />
          <p className="text">{props.name}</p>
          <p className="text">{props.price} KD</p>
        </div>
    );
}

export default Product