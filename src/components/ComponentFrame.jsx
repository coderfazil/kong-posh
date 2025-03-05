import FrameTemplate from "./FrameTemplate";

const ComponentFrame=({collectionData})=>{
  if (!collectionData || collectionData.length === 0) {
    return <p>No data available</p>; // Handle the case where data is empty
  }

  
  return(<div className="kashmiri-collection-section">
    <h3 className="kashmiri-collection-heading">{collectionData[0].category}</h3>
    <div className="kashmiri-collection">
      {collectionData.map((data)=>(
        <FrameTemplate data={data}></FrameTemplate>
      ))}
    </div>
  </div>
  );
}
export default ComponentFrame;