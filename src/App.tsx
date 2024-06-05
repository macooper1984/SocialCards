import "./App.css";
import SocialCard from "./components/social-card/socialCard";
import portrait from "./components/social-card/portrait.jpg";
import mainImage from "./components/social-card/hedgehog.jpeg";

function App() {
  return (
    <>
      <div>
        <SocialCard
          portrait={portrait}
          body="Look at this cute hedgehog!"
          firstName="Dave"
          surname="Williams"
          mainImage={mainImage}
          time="1:45pm"
        />
      </div>
    </>
  );
}

export default App;
