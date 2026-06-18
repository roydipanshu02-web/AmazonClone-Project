import "./Home.css";
import Product from "../components/Product";

function Home() {
  const products = [
    {
      id: 1,
      title: "Apple iPhone 15",
      price: 79999,
      image:
        "https://m.media-amazon.com/images/I/71d7rfSl0wL._SX679_.jpg",
    },
    {
      id: 2,
      title: "Samsung Galaxy S24",
      price: 74999,
      image:
        "https://m.media-amazon.com/images/I/71HUnJvHsbL._SX679_.jpg",
    },
    {
      id: 3,
      title: "Boat Headphones",
      price: 1999,
      image:
        "https://m.media-amazon.com/images/I/61u1VALn6JL._SX679_.jpg",
    },
    {
      id: 4,
      title: "HP Laptop",
      price: 59999,
      image:
        "https://m.media-amazon.com/images/I/71DozMyPCBL._SX679_.jpg",
    },
  ];

  return (
    <div className="home">
      <div className="banner">
        <h1>Welcome to Amazon Clone</h1>
      </div>

      <div className="products">
        {products.map((item) => (
          <Product
            key={item.id}
            title={item.title}
            price={item.price}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
}

export default Home;