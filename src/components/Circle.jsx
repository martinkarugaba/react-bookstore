import '../styles/circle.css';

const Circle = () => {
  return (
    <div className="box border relative w-[300px] h-[400px] flex justify-center items-center">
      <div className="percent w-[150px] h-[150px] relative rotate-[270deg]">
        <svg className="w-[150px] h-[150px] relative">
          <circle
            className="w-[150px] h-[150px] fill-none stroke-[10] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
            cx="70"
            cy="70"
            r="50"
          />
          <circle
            className="w-[150px] h-[150px] fill-none stroke-[10] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
            cx="70"
            cy="70"
            r="50"
          />
        </svg>
      </div>
    </div>
  );
};
export default Circle;
