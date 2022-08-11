const Header = (props) => {
  return (
    <div className="header">
      <div className="titleContainer">
        <h1 className="title">Formula Memory Game</h1>
        <h3 className="rules">
          Get points by clicking on an image but don't click on any more than
          once!
        </h3>
      </div>
      <div className="scoreboard">
        <div>Score: {props.currentScore}</div>
        <div>Best Score: {props.highestScore}</div>
      </div>
    </div>
  );
};

export default Header;
