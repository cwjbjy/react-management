// import useAnalysis from './useAnalysis.js';
import useVersion from './useVersion.js';

export default function Global() {
  useVersion();
  // 数据埋点
  // useAnalysis()
  return null;
}
