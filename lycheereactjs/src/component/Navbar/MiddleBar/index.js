import { useState } from "react";
import { Fragment } from "react";
import Cart from "../Cart";
import Category from "./Category";
import FunctionBar from "./FunctionBar";
import SearchBar from "./SearchBar";

function MiddleBar() {
  const [focusSearchBar, setFocusSearchBar] = useState(false);
  return (
    <Fragment>
      {!focusSearchBar && <Category />}
      <SearchBar
        focusSearchBar={focusSearchBar}
        setFocusSearchBar={setFocusSearchBar}
      />
      <FunctionBar />
      {!focusSearchBar && <Cart />}
    </Fragment>
  );
}
export default MiddleBar;
