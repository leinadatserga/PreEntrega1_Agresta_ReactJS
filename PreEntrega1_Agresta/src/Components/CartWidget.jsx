const CartWidget = () => {
    const totalCart = () => {
        return 10;
    }
    return(
        <div className="cartWidget">
            {(( totalCart () !== 0 ) ? <button className="cantidad" >{ totalCart () }</button> : <button className="cantidad" ></button> )}
        </div>
    )
};

export default CartWidget;