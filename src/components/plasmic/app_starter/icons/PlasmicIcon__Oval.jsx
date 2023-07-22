// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function OvalIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 288 288"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M144 288c79.529 0 144-64.471 144-144S223.529 0 144 0 0 64.471 0 144s64.471 144 144 144z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default OvalIcon;
/* prettier-ignore-end */
