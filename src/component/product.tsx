"use client"
interface ProductProps {
  imageSrc: string;
  productName: string;
}
function Product({ imageSrc, productName}: ProductProps) {
  return (
    <li>
      <div className="list-item">
        <div className="p-head">
          <a href="/" className="product-img">
            <img src={imageSrc} alt=""/>
          </a>
          <a href="/" className="details">SEE DETAIL</a>
        </div>
        <div className="product_info">
          <a href="/" className="product-name">{productName}</a>

        </div>
      </div>
    </li>
  );
}

export default function Products() {
  return (

      <div className="produce_con sec">
          <div className="sec-title">
              Pick the best coffee!
          </div>
        <div className="top_button">
          <a href="/"><h2>vote your Favorite</h2></a>
        </div>
        <ul className="products_list">
          <Product 
            imageSrc="/iceLatte.jpg"
            productName="ICE LATTE"
          />
          <Product 
            imageSrc="cappuccino.jpg"
            productName="CAPPUCCINO"
          />
          <Product 
            imageSrc="/americano.jpg"
            productName="AMERICANO"
          />
          <Product imageSrc="/mocha.jpg"productName="ICE MOCHA"/>
        </ul>
      </div>

  );
}