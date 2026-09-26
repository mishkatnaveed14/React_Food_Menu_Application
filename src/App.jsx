import "./App.css";
import FoodList from "./components/foodlist";
import HeadingComponent from "./components/headingcomponent";

function App() {
  return (
    <div>
      <HeadingComponent />
      <FoodList />
      <Footer/>
    </div>
  );
}

export default App;
function Footer() {
  return(
      <div style={
      {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        
      }
    }>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam, aut!</p>
    <button style={{
      backgroundColor: 'yellow',
      border:'2px solid white'
    }}>Order Now!</button>
  </div>
  )

}