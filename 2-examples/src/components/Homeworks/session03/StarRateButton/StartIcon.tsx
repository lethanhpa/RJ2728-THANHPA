import React from "react";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";

interface IProps {
  selected: boolean;
  onClick: () => void;
}

const StarIcon: React.FC<IProps> = (props) => {
  const { selected, onClick } = props;
  return (
    <span onClick={onClick}>
      {selected ? <AiFillStar /> : <AiOutlineStar />}
    </span>
  );
};

export default StarIcon;
