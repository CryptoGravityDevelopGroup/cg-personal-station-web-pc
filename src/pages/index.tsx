import { useEffect } from "react";
import Main from "./main/index.tsx";
const App = function () {
  // 自适应
  useEffect(() => {
    window.onload = function () {
        getRem(1440, 1)
    };
    window.onresize = function () {
        getRem(1440, 1)
    };
    
    function getRem(pwidth, prem) {
        const html = document.getElementsByTagName("html")[0];
        const oWidth = document.body.clientWidth || document.documentElement.clientWidth;
        html.style.fontSize = oWidth / pwidth * prem + "px";
    }
  })
  
  return (
    <>
      <Main/>
    </>
  );
};

export default App;
