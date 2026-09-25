import "./App.css";

function App() {
  return (
    <div>
      <h1 id="heading">Our fod menu Application</h1>
      <h3 style={
        {
          textAlign: "center",
          color:"AccentColor"
        }
      }>Our Menu</h3>
      <p className="para">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum laborum
        vero deleniti ipsum sequi ex sed illum! Eius, consectetur vero?
      </p>
      <ul id="foodlist">
        <div>
          <li>
            <div id="imageArea">
              <img
                src="https://static.vecteezy.com/system/resources/thumbnails/080/772/437/small_2x/premium-chicken-biryani-with-grilled-drumsticks-photo.jpg"
                alt=""
              />
            </div>
            <h4>Biryani</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus,
              blanditiis!
            </p>
            <p>Quantity: 0</p>
          </li>
        </div>
        {/* <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li>
        <li>
          <div>
            <img src="" alt="" />
          </div>
          <h4></h4>
          <p></p>
          <p>Quantity: </p>
        </li> */}
      </ul>
    </div>
  );
}

export default App;
