import { useEffect } from "react/cjs/react.development";
import Drag from "./drag";

const Toast = () => {
  useEffect(() => {
    Drag.init("ant-modal-content").DragStart();
  }, []);

  return <div>我是一个可以拖拽的模式框！</div>;
};

export default Toast;
