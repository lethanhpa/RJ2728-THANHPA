import Styles from "./BlockUI1.module.css";
import CommonStyles from "../../../../until/styles/CommonStyles.module.css";

interface IProps {
  title: string;
  bgTitle: string;
  bgProcess: string;
  percent: number;
}

const BlockUI1: React.FC<IProps> = (props) => {
  const { title, bgTitle, bgProcess, percent } = props;
  return (
    <div className="pt-5">
      <div className="d-flex w-50 m-auto border text-white">
        <div className={Styles.w__100} style={{ backgroundColor: bgTitle }}>
          {title}
        </div>
        <div className={`${Styles.w__500} ${CommonStyles.font__16}`}>
          <div style={{ width: `${percent}%`, backgroundColor: bgProcess, height: 50}}>
            {percent}%
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlockUI1;
