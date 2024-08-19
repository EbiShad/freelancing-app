import { useSearchParams } from "react-router-dom";

function Filter({ filterField, options }) {
  const [searchParams, setSearchParams] = useSearchParams();

  const currentFilter = searchParams.get(filterField) || options.at(0).value;

  function handleClick(value) {
    searchParams.set(filterField, value);
    setSearchParams(searchParams);
  }

  return (
    <div className="flex items-center gap-x-2 text-sm">
      <span>وضعیت</span>
      <div className="flex gap-x-2">
        {options.map((item) => {
          const isActive = item.value === currentFilter
          return (
            <button
              key={item.value}
              disabled={isActive}
              onClick={() => handleClick(item.value)}
              className={`border border-secondary-400 px-3 py-1 rounded-lg ${isActive ? "bg-secondary-400":""}`}
            >
              {item.label}
            </button>
          );
        })}
      </div>
    </div>
  );
}

export default Filter;
