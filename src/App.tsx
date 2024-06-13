import './App.css';
import SocialCard from './components/social-card/socialCard'
import portrait from "./components/social-card/portrait.jpg";


function App() {
  const defaultComments = [
    {
      id: 1,
      name: 'Alice',
      time: '2:00pm',
      body: 'What a cute hedgehog!',
    },
    {
      id: 2,
      name: 'Bob',
      time: '2:15pm',
      body: 'I love hedgehogs!',
    },
  ];

  return (
    <div className="social-cards-container">
      <SocialCard
        postId='1'
        key={1}
        portrait={portrait}
        body="Look at this cute hedgehog!"
        firstName="Dave"
        surname="Williams (Tech)"
        mainImage="https://t3.ftcdn.net/jpg/05/53/71/56/360_F_553715658_13GcX5js3knq0jaLUxw1HglMF7m1KB3q.jpg"
        time="11:00pm"
        comments={defaultComments}
      />
      <SocialCard
        postId='2'
        key={2}
        portrait="https://cleancoders.com/images/portraits/chris-powers.jpg"
        body="Help!!! I've lost control of social cards!!!"
        firstName="Chris"
        surname="Powers"
        mainImage="https://miro.medium.com/v2/resize:fit:1200/1*mCMY-LDuqcIFr8wjzIZfxw.png"
        time="1:45pm"
        comments={defaultComments}
      />
    </div>
  );
}

export default App;
