import useAnalysis from './useAnalysis.js';
import useVersion from './useVersion.js'

export default function Global() {
  useVersion()
  useAnalysis()
  return null;
}
