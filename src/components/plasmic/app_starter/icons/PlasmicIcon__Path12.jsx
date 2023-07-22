// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path12Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 21 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M18.942 2.257S10.563-2.167 8.8 1.372c0 0 1.322 10.618-3.97 11.945-5.291 1.327-7.496 10.618 0 11.502 7.497.885 12.348-1.77 14.994-1.77 2.646 0 0-9.29 0-9.29l-.882-11.502z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path12Icon;
/* prettier-ignore-end */
