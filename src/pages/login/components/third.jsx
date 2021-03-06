import QQ from "@/assets/images/login/QQ.png";
import WB from "@/assets/images/login/wb.png";
import WX from "@/assets/images/login/wx.png";
import { message } from "antd";
import "./third.scss";

const thirdLogin = () => {
  message.warning({
    content: "功能未开发，请使用用户注册",
    className: "custom-message",
  });
};

const LoginOther = () => {
  return (
    <>
      <div className="other-acc">
        <h3>第三方账号登录</h3>
      </div>
      <div className="img_list">
        <div className="icon" onClick={thirdLogin}>
          <img src={QQ} alt="加载失败" />
        </div>
        <div className="icon" onClick={thirdLogin}>
          <img src={WB} alt="加载失败" />
        </div>
        <div className="icon" onClick={thirdLogin}>
          <img src={WX} alt="加载失败" />
        </div>
      </div>
    </>
  );
};

export default LoginOther;
