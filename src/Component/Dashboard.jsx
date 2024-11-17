const Dashboard = () => {
  return <div className="border-2 border-lime-600 ">
    {/* images */}
    <div>
      <div>
        <input type="file" onChange={(e)=>console.log(e.target.files[0])}/>
        {/* <img width={1024} height={100} src={file}/> */}
      </div>
      <div></div>
    </div>
    {/* inputs and Button */}
  </div>;
};

export default Dashboard;
