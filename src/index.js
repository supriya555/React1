import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return (
    // <h1 style={{ color: "Blue", fontSize: "48px", textTransform: "uppercase" }}>
    <header className="header">
      <h1>The Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  //const pizzas=[];
  const numpizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      {numpizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisines are available. Let's have a look at our
            speciality.
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaobj={pizza} />
            ))}
          </ul>
        </>
      ) : (
        <p>We'r working on menu.</p>
      )}

      {/*<Pizza
        name="Pizza Prosciutto"
        indgredients="Tomato, mozarella, ham, aragula, and burrata cheese"
        photoname="pizzas/prosciutto.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Salamino"
        indgredients="Tomato, mozarella, and pepperoni"
        photoname="pizzas/salamino.jpg"
        price={12}
      />*/}
    </main>
  );
}

function Pizza({ pizzaobj }) {
  /*instead of passing 'props', passing the the name of the prop(pizzaobj) directly */
  console.log(pizzaobj);
  if (pizzaobj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaobj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaobj.photoName} />
      <div>
        <h3>{pizzaobj.name}</h3>
        <p>{pizzaobj.ingredients}</p>

        <span>{pizzaobj.soldOut ? "SOLD OUT" : pizzaobj.price}</span>
        {/*alternate option- {pizzaobj.soldOut ? <span>"SOLD OUT"</span> : <span>pizzaobj.price</span>}*/}
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const open = 12;
  const close = 22;
  const isopen = hour >= open && hour <= close;
  console.log(isopen);
  //if (hour >= open && hour <= close) alert("Hello! We're Open.");
  //else alert("Sorry! We're close");
  return (
    <footer className="footer">
      {isopen ? (
        <Order close={close} />
      ) : (
        <p>
          We're happy to serve you between {open}:00 and {close}:00.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>We're open until {props.close}:00. Come! visit us or order online.</p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
