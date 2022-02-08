import React, { useState, useEffect } from "react";
import CheckBox from "./CheckBox";
import { items } from "./items";

function App() {
  const [isCheckedAll, setIsCheckedAll] = useState(false);
  const [isCheckedArr, setIsCheckedArr] = useState([]);
  const [list, setList] = useState([]);

  useEffect(() => {
    setIsCheckedAll(false);
    setList(items);
    if (isCheckedArr.length === list.length) {
      setIsCheckedAll(true);
    }
  }, [list, isCheckedArr, isCheckedAll]);

  const handleSelectAll = () => {
    setIsCheckedAll(!isCheckedAll);
    setIsCheckedArr(list.map((li) => li.id));
    if (isCheckedAll) {
      setIsCheckedArr([]);
    }
  };

  const handleCheck = (e) => {
    const id = e.target.id;
    const checked = e.target.checked;
    setIsCheckedArr([...isCheckedArr, id]);
    if (!checked) {
      setIsCheckedArr(isCheckedArr.filter((item) => item !== id));
    }
  };

  console.log(isCheckedArr);

  const itemList = list.map(({ id, name }) => {
    return (
      <>
        <CheckBox
          key={id}
          type="checkbox"
          name={name}
          id={id}
          onChange={handleCheck}
          isChecked={isCheckedArr.includes(id)}
        />
      </>
    );
  });

  return (
    <div className="App">
      <CheckBox
        name="Select all"
        id="selectAll"
        onChange={handleSelectAll}
        isChecked={isCheckedAll}
      />
      {itemList}
    </div>
  );
}

export default App;
