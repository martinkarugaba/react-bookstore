import '../styles/circle.css';

const Circle = () => (
  <div className="box border relative w-[300px] h-auto flex justify-center items-center">
    <div className="percent w-auto h-auto relative rotate-[270deg]">
      <svg className="w-[100px] h-[100px] border border-red-500 relative flex justify-center items-center">
        <circle
          className="w-full h-full fill-none stroke-[5] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
          cx="40"
          cy="40"
          r="40"
        />
        <circle
          className="w-full h-full fill-none stroke-[5] stroke-primary-blue translate-y-[5px] translate-x-[5px]"
          cx="40"
          cy="40"
          r="40"
        />
      </svg>
    </div>
  </div>
);
export default Circle;
