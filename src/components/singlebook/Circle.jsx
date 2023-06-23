import '../../styles/circle.css';

const Circle = () => (
  <div className="box relative w-auto h-auto flex justify-center items-center">
    <div className="percent w-auto h-auto relative rotate-[270deg]">
      <svg className="w-[100px] h-[100px] border-red-500 relative flex justify-center items-center">
        <circle
          className="w-full h-full fill-none stroke-[5] stroke-primary-blue translate-y-[20px] translate-x-[20px]"
          cx="30"
          cy="30"
          r="30"
        />
        <circle
          className="w-full h-full fill-none stroke-[5] stroke-primary-blue translate-y-[20px] translate-x-[20px]"
          cx="30"
          cy="30"
          r="30"
        />
      </svg>
    </div>
  </div>
);
export default Circle;
