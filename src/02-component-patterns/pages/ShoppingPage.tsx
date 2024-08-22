import { ProductCard, ProductImage, ProductTitle, ProductButtons } from '../components';

import { products } from '../data/products';
import '../styles/custom-styles.css';


const product = products[0]



export const ShoppingPage = () => {

    // const { shoppingCart, onProductCountChange } = useShoppingCart();


    return (
        <div>
            <h1>Shopping Store</h1>
            <hr />
            <ProductCard
                key={product.id}
                product={product}
                className="bg-dark text-white"
                initialValues={{
                    count: 1,
                    maxCount: 3,
                }}
            >
                {
                    ({
                        reset, isMaxCountReached, count, increaseBy, maxCount
                    }) => (
                        <>
                            <ProductImage className="custom-image" style={{ boxShadow: '10px 10px 10px rgba(0,0,0,0.2)' }} />
                            <ProductTitle className="text-bold" />
                            <ProductButtons className="custom-buttons" />

                            <button
                                onClick={reset}
                            >Reset</button>

                            <button onClick={() => increaseBy(-2)}> -2</button>
                            <span>{count}- {maxCount}</span>
                            {(!isMaxCountReached &&
                                <button
                                    onClick={() => increaseBy(+2)}
                                > +2</button>)
                            }

                        </>
                    )
                }
            </ProductCard>

        </div>
    )
}