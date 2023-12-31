// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function Path14Icon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 25"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        d={
          "M2.395 2.859s.357 13.43-2.137 14.519C-2.235 18.466 14.15 25 14.15 25L17 19.918S13.794 1.77 14.507.318c.712-1.452-12.112 2.54-12.112 2.54z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default Path14Icon;
/* prettier-ignore-end */
