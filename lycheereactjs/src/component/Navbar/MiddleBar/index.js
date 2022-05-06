import { useState } from "react";
import { Fragment } from "react";
import Cart from "../Cart";
import Category from "./Category";
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
      {!focusSearchBar && <Cart />}
    </Fragment>
  );
}
export default MiddleBar;
