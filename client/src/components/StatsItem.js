import Wrapper from "../assets/wrappers/StatItem";

const StatsItem = ({ count, title, icon, color, bcg }) => {
  return (
    <Wrapper color={color} bcg={bcg}>
      <header>
        <span className="count">{count}</span>
        <span className="icon">{icon}</span>
      </header>
      <h3 className="title">{title}</h3>
    </Wrapper>
  );
};

export default StatsItem;
