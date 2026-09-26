export default function PropsPractice() {
  return(
   <div>
     <Mybtn title= "jani" bg='purple'/>
    <Mybtn  title="ahad" bg='brown'/>
    <Mybtn  title="laiba" bg='yellow'/>
    <Mybtn  title="Meelad" bg='papayawhip'/>
   </div>
  );
}
function Mybtn(props) {
  return (
    <div>
      <button
        style={{
          width: "200px",
          height: "40px",
          backgroundColor: props.bg ,
          border: "2px solid black",
          borderRadius: "10px",
          margin:"30px"
        }}
      >
        {props.title}
      </button>
    </div>
  );
}
