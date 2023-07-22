// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export function IconSocialInstagramCopyIcon(props) {
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
          "M13.484 2.759c.961.054 1.433.196 1.868.968.453.77.681 2.099.681 4.438v.008c0 2.328-.228 3.666-.68 4.429-.435.772-.907.912-1.868.977-.961.055-3.375.088-5.466.088-2.096 0-4.51-.033-5.47-.09-.96-.064-1.432-.204-1.87-.976C.23 11.838 0 10.5 0 8.17v-.007c0-2.338.23-3.666.678-4.437.44-.773.912-.914 1.871-.97.96-.063 3.374-.09 5.47-.09 2.091 0 4.505.027 5.465.092zm-2.461 5.408l-5.01-3v6l5.01-3z"
        }
        fill={"currentColor"}
      ></path>
    </svg>
  );
}

export default IconSocialInstagramCopyIcon;
/* prettier-ignore-end */
