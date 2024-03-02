export default (props) => {
  const { data, setData } = props;

  const randomButton = () => {
    // * unique id
    const numLength = data.langKey.length;
    let num = numLength > 0 ? Math.floor(Math.random() * numLength) : numLength;
    num =
      data.langId == num && numLength > 1 ? (num < 1 ? num + 1 : num - 1) : num;
    setData({ ...data, langId: num });
  };

  const backButton = () => {
    // * back id
    if (data.langId == 0) {
      setData({ ...data, langId: data.langKey.length - 1 });
    } else {
      setData({ ...data, langId: data.langId - 1 });
    }
  };
  const nextButton = () => {
    // * next id
    if (data.langId < data.langKey.length - 1) {
      setData({ ...data, langId: data.langId + 1 });
    } else {
      setData({ ...data, langId: 0 });
    }
  };

  return (
    <>
      <div className="flex justify-between font-medium text-slate-500">
        <button
          onClick={backButton}
          className="bg-teal-300 hover:bg-teal-200 hover:border-cyan-600 dark:bg-teal-900 dark:hover:bg-teal-800  transition-all delay-75 p-2 rounded-md border-x-2 uppercase"
        >
          BACK
        </button>
        <button
          onClick={randomButton}
          className="bg-teal-300 hover:bg-teal-200 hover:border-cyan-600 dark:bg-teal-900 dark:hover:bg-teal-800 transition-all delay-75 p-2 rounded-md border-x-2 uppercase"
        >
          random
        </button>
        <button
          onClick={nextButton}
          className="bg-teal-300 hover:bg-teal-200 hover:border-cyan-600 dark:bg-teal-900 dark:hover:bg-teal-800 transition-all delay-75 p-2 rounded-md border-x-2 uppercase"
        >
          NEXT
        </button>
      </div>
    </>
  );
};
