import "./App.css";
import SocialCard from "./components/social-card/socialCard";
import portrait from "./components/social-card/portrait.jpg";
import mainImage from "./components/social-card/hedgehog.jpeg";

function App() {
  // Define default comments
  const defaultComments = [
    {
      id: 1,
      name: "Alice",
      time: "2:00pm",
      body: "What a cute hedgehog!",
    },
    {
      id: 2,
      name: "Bob",
      time: "2:15pm",
      body: "I love hedgehogs!",
    },
  ];

  return (
    <div>
      <SocialCard
        portrait={portrait}
        body="Look at this cute hedgehog!"
        firstName="Dave"
        surname="Williams"
        mainImage={mainImage}
        time="1:45pm"
        comments={defaultComments} // Pass the default comments
      />
    </div>
  );
}

export default App;