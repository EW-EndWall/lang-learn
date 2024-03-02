export default ({ dataKey, dataVal }) => {
  return (
    <div className="flex gap-2 justify-center max-sm:flex-col max-sm:text-center text-slate-300">
      <p className="bg-slate-500 p-3 rounded-xl border-teal-100 dark:bg-teal-900 border-t-2 border-b-2 border-l-4 border-r-4">
        {dataKey}
      </p>
      <p className="p-3">=</p>
      <p className="bg-slate-500 p-3 rounded-xl border-teal-100 dark:bg-teal-900 border-t-2 border-b-2 border-l-4 border-r-4">
        {dataVal}
      </p>
    </div>
  );
};
