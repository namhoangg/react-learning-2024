import Player from './components/Player.jsx';
import TimerChallenge from './components/TImerChallenge.jsx';

function App() {
  return (
    <>
      <Player />
      <div id="challenges">
        <TimerChallenge title="Easy" targetTime={1} />
        <TimerChallenge title="Medium" targetTime={5} />
        <TimerChallenge title="Hard" targetTime={10} />
        <TimerChallenge title="Asian" targetTime={25} />
      </div>
    </>
  );
}

export default App;
