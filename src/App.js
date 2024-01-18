// import Chai from "./counter";
import Card from "./card";





function App() {

  const img = "https://images.pexels.com/photos/19791559/pexels-photo-19791559/free-photo-of-black-vase-with-decorative-golden-flowers.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"


  return (
    <>

      <div className="flex h-100 align-items-center">
        {/* <Chai /> */}
        <Card img={img} desc="Some quick example text to build on the card title and make up the bulk of the card's content." />
        <Card img={img} desc="Some quick example text to build on the card title and make up the bulk of the card's content." />

      </div>
    </>

  );
}

export default App;
