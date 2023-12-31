// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function PathIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 117 177"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M24.108 65.957C-7.599 114.834 1.088 177 1.088 177s60.096-17.08 91.804-65.957C124.599 62.165 115.91 0 115.91 0S55.816 17.08 24.108 65.957z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default PathIcon;
/* prettier-ignore-end */
