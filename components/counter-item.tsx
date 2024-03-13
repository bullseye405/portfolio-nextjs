interface ICounterItem {
  title: string;
  counter: JSX.Element;
  measurement?: string;
  currency?: string;
}

const CounterItem = ({
  title,
  counter,
  measurement,
  currency = '',
}: ICounterItem) => {
  return (
    <div className="mb-20 sm:mb-0">
      <h2
        className="
        text-4xl text-center mb-2
      text-secondary-dark dark:text-secondary-light
      "
      >
        {currency} {counter} {measurement}
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
