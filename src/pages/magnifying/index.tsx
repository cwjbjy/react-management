import { Card } from "antd";
import { useEffect } from "react";
import Deer from "@/assets/images/magnifying/deer.jpg";
import "./index.scss";

const src = Deer;

const Magnifying = () => {
  useEffect(() => {
    const init = () => {
      var span = document.createElement("span");
      var box = document.getElementById("small_Box");
      var img = document.createElement("img");
      var boxWidth = box!.clientWidth;
      var boxHeight = box!.clientHeight;
      var scale = 2;
      span.style.position = "absolute";
      span.style.width = boxWidth / scale + "px"; //250px
      span.style.height = boxHeight / scale + "px"; //155px
      span.style.display = "none";
      span.style.overflow = "hidden";
      span.style.backgroundColor = "rgba(255, 255, 255, 0.5)";
      span.style.cursor = "pointer";
      box!.appendChild(span);
      img.setAttribute("src", src);
      img.setAttribute("alt", "加载失败");
      img.style.width = scale * boxWidth + "px";
      img.style.height = scale * boxHeight + "px";
      box!.onmouseover = function (e) {
        span.style.display = "block";
      };
      box!.onmousemove = function (e) {
        e = e || window.event;
        var x = e.clientX - (box!.offsetLeft + 266) - span.clientWidth / 2;
        var y = e.clientY - (box!.offsetTop + 104) - span.clientHeight / 2;
        if (x <= 0) {
          x = 0;
        }
        if (x >= box!.clientWidth - span.clientWidth) {
          x = box!.clientWidth - span.clientWidth;
        }
        if (y <= 0) {
          y = 0;
        }
        if (y >= box!.clientHeight - span.clientHeight) {
          y = box!.clientHeight - span.clientHeight;
        }
        span.style.left = x + "px";
        span.style.top = y + "px";
        img.style.marginLeft = -1 * span.offsetLeft * scale - x + "px";
        img.style.marginTop = -1 * span.offsetTop * scale - y + "px";
        span.appendChild(img);
      };
      box!.onmouseout = function (e) {
        span.style.display = "none";
      };
    };
    init();
  }, []);

  return (
    <section>
      <Card hoverable>
        <strong>
          请将鼠标移动到图片上，体验效果 <br />
          <br /> IE、Edge浏览器无法正常体验，请更换其他浏览器体验该效果{" "}
        </strong>
        <div className="block frontArea" id="small_Box">
          <img src={src} className="imageBox" alt="加载失败" />
        </div>
      </Card>
    </section>
  );
};

export default Magnifying;
