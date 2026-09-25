import "./App.css";

function App() {
  const dummydata = [
    {
      title: "Biryani",
      img: "https://static.vecteezy.com/system/resources/thumbnails/080/772/437/small_2x/premium-chicken-biryani-with-grilled-drumsticks-photo.jpg",
      paragraph: "Bhut mazedar biryani hai",
      quantity: 7,
    },
    {
      title: "Chicken Karahi",
      img: "https://images.unsplash.com/photo-1601050690597-df0568f70950",
      paragraph: "Spicy aur tasty chicken karahi",
      quantity: 0,
    },
    {
      title: "Chicken Tikka",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
      paragraph: "Juicy grilled chicken tikka",
      quantity: 8,
    },
    {
      title: "Beef Burger",
      img: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd",
      paragraph: "Cheesy aur juicy beef burger",
      quantity: 0,
    },
    {
      title: "Pizza",
      img: "https://images.unsplash.com/photo-1565299624946-b28f40a0ae38",
      paragraph: "Fresh cheese aur delicious pizza",
      quantity: 6,
    },
    {
      title: "Chicken Roll",
      img: "https://images.unsplash.com/photo-1626700051175-6818013e1d4f",
      paragraph: "Crispy aur spicy chicken roll",
      quantity: 9,
    },
    {
      title: "Nihari",
      img: "https://images.unsplash.com/photo-1601050690117-94f5f6fa8bd7",
      paragraph: "Traditional Pakistani style nihari",
      quantity: 4,
    },
    {
      title: "Seekh Kebab",
      img: "https://images.unsplash.com/photo-1599487488170-d11ec9c172f0",
      paragraph: "Soft aur flavorful seekh kebab",
      quantity: 12,
    },
    {
      title: "Chicken Pulao",
      img: "https://images.unsplash.com/photo-1599043513900-ed6fe01d3833",
      paragraph: "Simple aur tasty chicken pulao",
      quantity: 7,
    },
    {
      title: "French Fries",
      img: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877",
      paragraph: "Crispy golden french fries",
      quantity: 15,
    },
  ];

  return (
    <div>
      <h1 id="heading">Our fod menu Application</h1>
      <h3
        style={{
          textAlign: "center",
          color: "AccentColor",
        }}
      >
        Our Menu
      </h3>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum
        vero deleniti ipsum sequi ex sed illum! Eius, consectetur vero?
      </p>
      <ul id="foodlist">
        {dummydata.map((foodItem) => {
          return (
            <li>
              <div id="imageArea">
                <img
                  src={foodItem.img}
                  alt=""
                />
              </div>
              <div id="con-2">
                <h4>{foodItem.title} </h4>
                <p>
                 {foodItem.paragraph}
                </p>
                <p> {foodItem.quantity == 0? 'sold out' : `Quantity: ${foodItem.quantity}`} </p>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
