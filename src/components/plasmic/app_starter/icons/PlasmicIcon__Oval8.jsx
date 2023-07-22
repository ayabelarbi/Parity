// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Oval8Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 31 18"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M15.5 18C24.06 18 31 13.97 31 9s-6.94-9-15.5-9C6.94 0 0 4.03 0 9s6.94 9 15.5 9z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval8Icon;
/* prettier-ignore-end */
