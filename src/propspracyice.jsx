export default function PropsPractice() {
    var color = 'yellow'
  return(
   <div>
     <Mybtn  bg='purple'/>
    <Mybtn  title="ahad" bg='brown'/>
    <Mybtn  title="laiba" bg={color} />
    <Mybtn  title="Meelad" bg='papayawhip'/>
   </div>
  );
}
function Mybtn({title,bg}) {
  
  return (
    <div>
      <button
        style={{
          width: "200px",
          height: "40px",
          backgroundColor: bg ,
          border: "2px solid black",
          borderRadius: "10px",
          margin:"30px"
        }}
      >
        {title || "No Data"}
      </button>
    </div>
  );
}
