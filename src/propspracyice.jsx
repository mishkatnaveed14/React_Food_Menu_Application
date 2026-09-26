export default function PropsPractice() {
  return(
   <div>
     <Mybtn title="jani"/>
    <Mybtn  title="ahad"/>
    <Mybtn  title="laiba"/>
    <Mybtn  title="Meelad"/>
   </div>
  );
}
function Mybtn(props) {
  return (
    <div>
      <button
        style={{
          width: "200px",
          backgroundColor: "papayawhip",
          border: "2px solid black",
          borderRadius: "10px",
        }}
      >
        {props.title}
      </button>
    </div>
  );
}
