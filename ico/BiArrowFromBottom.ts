import { GenIcon, type IconBaseProps } from "../deps.ts";

export function BiArrowFromBottom(props: IconBaseProps) {
  return GenIcon({tag:"svg",attr:{viewBox:"0 0 24 24"},child:[{tag:"path",attr:{d:"M6 18h12v2H6zm6-14.414-6.707 6.707 1.414 1.414L11 7.414V16h2V7.414l4.293 4.293 1.414-1.414z"}}]})(props);
}
export default BiArrowFromBottom;
