// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconSocialInstagramIcon(props) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"none"}
      viewBox={"0 0 17 16"}
      height={"1em"}
      width={"1em"}
      className={classNames("plasmic-default__svg", className)}
      style={style}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path
        fillRule={"evenodd"}
        clipRule={"evenodd"}
        d={
          "M5.01 0h6.013a5.006 5.006 0 015.01 5v6c0 2.761-2.243 5-5.01 5H5.01A5.006 5.006 0 010 11V5c0-2.761 2.244-5 5.01-5zm6.013 14.5A3.508 3.508 0 0014.53 11V5c0-1.93-1.573-3.5-3.507-3.5H5.01A3.508 3.508 0 001.503 5v6c0 1.93 1.573 3.5 3.507 3.5h6.013zM4.008 8c0-2.209 1.795-4 4.009-4a4.004 4.004 0 014.008 4c0 2.209-1.795 4-4.008 4a4.004 4.004 0 01-4.009-4zm1.503 0a2.506 2.506 0 005.01 0 2.505 2.505 0 00-5.01 0zm7.349-4.3a.534.534 0 11-1.067-.001.534.534 0 011.067.001z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramIcon;
/* prettier-ignore-end */
