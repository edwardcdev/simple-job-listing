import StyledStatus from "./index.styled";

export interface IStatusProps {
  type: string;
}

const Status: React.FC<IStatusProps> = ({ type }) => {
  return <StyledStatus type={type}>{type.toUpperCase()}</StyledStatus>;
};

export default Status;
