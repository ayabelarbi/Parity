// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path20Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 56 69"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M49.18 0l-4.667 1.81L32.308 23.9 0 63.369s4.308 6.88 7.897 5.43c3.59-1.448 30.513-31.864 30.513-31.864L56 9.415 49.18 0z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path20Icon;
/* prettier-ignore-end */
