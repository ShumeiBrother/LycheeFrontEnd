import { useState } from "react";
import { Fragment } from "react";
import CartButton from "./CartButton";
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
      {!focusSearchBar && <CartButton />}
    </Fragment>
  );
}
export default MiddleBar;
