import Login from "./pages/Login";
import Select from "./pages/Select";
import Table from "./pages/Table";
import themeProvider from "./helper/themeProvider";

export default function _() {
  var mode = "join";
  var theme = themeProvider();
  var pages = [
    <Login theme={theme} mode={mode}></Login>,
    <Select theme={theme}></Select>,
    <Table theme={theme}></Table>,
  ];
  var page = 2;

  return pages[page];
}
