import { Card,Progress } from "antd";
import './progressCard.scss'
import React from 'react'

const format = (percent)=>{
    if (percent >= 90) {
        return "精通";
      } else if (percent >= 80) {
        return "熟练";
      } else if (percent >= 70) {
        return "一般";
      } else {
        return "了解";
      }
}

const ProgressCard = () => {
  return (
    <Card  title="语言详情" hoverable  className="user">
    Vue<Progress percent={98} strokeColor="#42b983" format={format}/>
    Uni-app<Progress percent={89} strokeColor="#f1e05a" format={format}/>
    React<Progress percent={88}  format={format}/>
    Nuxt<Progress percent={87} strokeColor="#f56c6c" format={format}/>
    </Card>
  );
};

export default React.memo(ProgressCard);
