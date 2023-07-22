// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path18Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 16 11"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M12.922 4.939S1.927-2.778.156 1.08c-1.77 3.859 12.04 12.547 14.947 9.147 2.907-3.4-2.18-5.288-2.18-5.288z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path18Icon;
/* prettier-ignore-end */
