const ItemListContainer = ({ greeting }) => {
    return (
        <div className="itemList">
            <div>
                 <p className="bienvenida">{ greeting }</p>
            </div>
        </div>
    )
};

export default ItemListContainer;