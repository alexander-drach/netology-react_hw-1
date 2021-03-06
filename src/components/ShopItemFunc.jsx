import propTypes from 'prop-types';
export function ShopItemFunc(props) {
    const { item } = props;
    item.price = (item.price).toFixed(2);
    return (
        <div class="main-content">
            <h2>{item.brand}</h2>
            <h1>{item.title}</h1>
            <h3>{item.description}</h3>
            <div className="description">
                {item.descriptionFull}
            </div>
            <div className="highlight-window mobile"><div class="highlight-overlay"></div></div>
            <div className="divider"></div>
            <div class="purchase-info">
                <div className="price">{item.currency} {item.price}</div>
                <button>Добавить в корзину</button>
            </div>
        </div>
    );
}

ShopItemFunc.propTypes = {
  brand: propTypes.string,
  title: propTypes.string,
  description: propTypes.string,
  descriptionFull: propTypes.string,
  price: propTypes.number,
  currency: propTypes.string
}