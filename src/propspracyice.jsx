export default function PropsPractice() {
  return(
   <div>
     <Mybtn/>
    <Mybtn/>
    <Mybtn/>
    <Mybtn/>
   </div>
  );
}
function Mybtn() {
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
        A
      </button>
    </div>
  );
}
