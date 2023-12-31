// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Oval2Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 445 28"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M222.5 28C345.383 28 445 21.732 445 14S345.383 0 222.5 0 0 6.268 0 14s99.617 14 222.5 14z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Oval2Icon;
/* prettier-ignore-end */
