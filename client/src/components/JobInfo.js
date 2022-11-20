import Wrapper from "../assets/wrappers/JobInfo";

const JobInfo = ({ icon, text, onClick }) => {
  return (
    <Wrapper onClick={onClick}>
      <span className="icon">{icon}</span>
      <span className="text">{text}</span>
    </Wrapper>
  );
};

export default JobInfo;
