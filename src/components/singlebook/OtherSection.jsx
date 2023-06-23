import Circle from './Circle';

const OtherSection = () => (
  <section className="flex justify-end items-center">
    {/* progress */}
    <div className="flex justify-between w-auto items-center pr-[2.938rem]">
      <Circle />
      <div className="flex flex-col justify-center items-start">
        <h3 className="font-montserat text-text-color text-[2rem] font-normal -mb-[0.7rem]">
          63%
        </h3>
        <p className="font-montserat text-sm text-gray-400 font-normal">
          Completed
        </p>
      </div>
    </div>
    {/* book info */}
    <div className="pl-[3.688rem] border-l">
      <h3 className="text-gray-400 uppercase text-small font-roboto-slab">
        Current Chapter
      </h3>
      <p className="text-text-color text-small font-light font-roboto-slab">
        Chapter 3: Lessons learned
      </p>
      <button
        type="button"
        className="uppercase mt-[1.438rem] text-sm rounded-sm text-white py-[0.438rem] px-[1.375rem] font-roboto-slab font-light bg-primary-blue"
      >
        update progress
      </button>
    </div>
  </section>
);
export default OtherSection;
