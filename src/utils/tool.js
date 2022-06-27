// 连接钱包
export async function connectWallte() {
  if (typeof window.ethereum !== "undefined") {
    //监听钱包切换
    ethereum.on("accountsChanged", function (accounts) {
      console.log("钱包切换", accounts);
      // window.location.reload();
    });
    //监听链网络改变
    ethereum.on("chainChanged", () => {
      console.log("链切换");
      // window.location.reload();
    });

    let addr = await ethereum.request({ method: "eth_requestAccounts" }); //授权连接钱包
    console.log("用户钱包地址:", addr[0]);
  } else {
    console.log("未安装钱包插件！");
  }
}
// 获取钱包地址
export function getCurAddress() {
  if (window.ethereum && window.ethereum.selectedAddress) {
    return window.ethereum.selectedAddress;
  } else {
    window.location.pathname = "/";
  }
}
