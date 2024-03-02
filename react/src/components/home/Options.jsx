export default (props) => {
  const { data, setData, setLangData, jsonData } = props;

  const langList = Object.keys(jsonData);

  const selectLangChange = (event) => {
    // * changle language
    const langValue = event.target.value;
    const langLevelValue = Object.keys(jsonData[langValue])[0];
    const langDataValue = jsonData[langValue][langLevelValue];

    setLangData(langDataValue);
    setData({
      ...data,
      lang: langValue,
      langLevel: langLevelValue,
      langId: 0,
      langKey: Object.keys(langDataValue),
      langLevelList: Object.keys(jsonData[langValue]),
    });
  };

  const selectLevelChange = (event) => {
    // * changle language level
    const langLevelValue = event.target.value;
    const langDataValue = jsonData[data.lang][langLevelValue];
    setLangData(langDataValue);
    setData({
      ...data,
      langLevel: langLevelValue,
      langId: 0,
      langKey: Object.keys(langDataValue),
    });
  };

  return (
    <>
      <div className="capitalize">
        <label className="block mb-2 text-sm font-medium">
          sellect language
        </label>
        <select
          id="countries"
          className="bg-teal-300 dark:bg-teal-900 border border-gray-300 outline-none text-sm rounded-lg block w-full p-2.5"
          value={data.lang}
          onChange={selectLangChange}
        >
          {langList.map((item, index) => {
            let languageName;
            switch (item) {
              case "tr":
                languageName = "Turkish";
                break;
              case "de":
                languageName = "German";
                break;
              case "ru":
                languageName = "Russian";
                break;
              default:
                languageName = item;
            }
            return (
              <option key={index} value={item}>
                {languageName}
              </option>
            );
          })}
        </select>
      </div>

      <div className="capitalize">
        <label className="block mb-2 text-sm font-medium">sellect level</label>
        <select
          id="countries"
          className="bg-teal-300 dark:bg-teal-900  border border-gray-300 outline-none text-sm rounded-lg block w-full p-2.5"
          value={data.langLevel}
          onChange={selectLevelChange}
        >
          {data.langLevelList.map((item, index) => (
            <option key={index} value={item}>
              {item}
            </option>
          ))}
        </select>
      </div>
    </>
  );
};
