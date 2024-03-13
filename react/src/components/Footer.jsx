export default (props) => {
  const { data, setData, jsonData } = props;

  return (
    <>
      <hr />
      <div className="mt-3 pb-3 text-center text-slate-3000">
        <h2 className="underline underline-offset-4">word counts</h2>
        <div className="w-52 mx-auto my-3 border-t-2 border-b rounded-xl p-3 shadow-md">
          {data.langLevelList?.map((item, index) => (
            <p key={index}>
              {item} level :{Object.keys(jsonData[data.lang][item]).length}
            </p>
          ))}
        </div>
        <small>
          developed by
          <a
            href="https://endwall.pw"
            rel="nofollow"
            target="_blank"
            title="developed by EWT"
            className="ml-1"
          >
            EWT
          </a>
        </small>
      </div>
    </>
  );
};
