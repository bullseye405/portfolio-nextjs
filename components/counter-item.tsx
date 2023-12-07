interface ICounterItem {
  title: string;
  counter: JSX.Element;
  measurement?: string;
}

const CounterItem = ({ title, counter, measurement }: ICounterItem) => {
  return (
    <div className="mb-20 sm:mb-0">
      <h2
        className="
        text-4xl text-center mb-2
      text-secondary-dark dark:text-secondary-light
      "
      >
        {counter} {measurement}
      </h2>
      <span
        className="
        block text-md text-center 
        text-ternary-dark dark:text-ternary-light
        "
      >
        {title}
      </span>
    </div>
  );
};

export default CounterItem;
