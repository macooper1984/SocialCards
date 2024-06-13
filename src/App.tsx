import './App.css';
import SocialCard from './components/social-card/socialCard'
import portrait from "./components/social-card/portrait.jpg";


function App() {
  const defaultComments1 = [
    {
      id: 1,
      name: 'Ryan Robinson',
      time: '2:00pm',
      body: 'Is that the a first edition of Clean Code?',
    },
    {
      id: 2,
      name: 'Dave Williams (Tech)',
      time: '2:15pm',
      body: 'It\'s The Tale of Mrs. Tiggy-Winkle, my favourite',
    },
  ];

  const defaultComments2 = [
    {
      id: 1,
      name: 'Simon Cragg',
      time: '2:10pm',
      body: 'You can probably delete half of that',
    },
    {
      id: 1,
      name: 'Ryan Robinson',
      time: '2:15pm',
      body: 'Maybe you could rewrite it in dotnet while you\'re at it?',
    },
  ];

  const defaultComments3 = [
    {
      id: 1,
      name: 'Chris Powers',
      time: '2:20pm',
      body: 'Remember, Bring beauty back!',
    }
  ];

  return (
    <div className="social-cards-container">
      <SocialCard
        postId='1'
        portrait={portrait}
        body="Look at this cute hedgehog!"
        firstName="Dave"
        surname="Williams (Tech)"
        mainImage="https://t3.ftcdn.net/jpg/05/53/71/56/360_F_553715658_13GcX5js3knq0jaLUxw1HglMF7m1KB3q.jpg"
        time="11:00pm"
        comments={defaultComments1}
      />
      <SocialCard
        postId='2'
        portrait="https://cleancoders.com/images/portraits/chris-powers.jpg"
        body="Help!!! I've lost control of social cards!!!"
        firstName="Chris"
        surname="Powers"
        mainImage="https://miro.medium.com/v2/resize:fit:1200/1*mCMY-LDuqcIFr8wjzIZfxw.png"
        time="1:45pm"
        comments={defaultComments2}
      />
      <SocialCard
        postId='3'
        portrait="https://miro.medium.com/v2/resize:fit:1400/0*dOgGPrNTDRRg0aF5.jpg"
        body="There once was a lad named Chris Powers,
          Music stretched his videos to almost nine hours.
          To copy the Hobbit with three,
          He made SOLID into seven with glee,
          But still, It's the money he makes me which matters."
        firstName="Uncle"
        surname="Bob"
        mainImage="https://d26o5k45lnmm4v.cloudfront.net/5c95164d-1342-412f-93ee-c9e6bf598344"
        time="1:45pm"
        comments={defaultComments3}
      />
    </div>
  );
}

export default App;