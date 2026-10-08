import { Link } from 'react-router-dom';
import { ProductCard } from '../Shared/Product/ProductCard';
import { useContext } from 'react';
import { StateContext } from '../../context/ItemProvider';

export const Favourites = () => {
  const { fav } = useContext(StateContext);

  return (
    <main className="main">
      <div className="container">
        <div className="main__content">
          <div className="favourites">
            <div className="favourites__top">
              <Link to="/">
                <img src="./img/icons/Home.svg" alt="" />
              </Link>
              <img src="./img/icons/VectorRight.svg" alt="" />
              <span className="favourites__history">Favourites</span>
            </div>
            <h1>Favourites</h1>
            <span className="favourites__text">{fav.length} items</span>
            <div className="favourites__products">
              {fav.length === 0 ? (
                <h3 className="favourites__empty">
                  Your favourites list is empty
                </h3>
              ) : (
                fav.map(product => (
                  <div className="favourites__product" key={product.id}>
                    <ProductCard product={product} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
