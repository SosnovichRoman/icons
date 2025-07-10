// Необходимо для того, чтобы typescript мог импортировать svg

declare module "*.svg" {
  import React from "react";
  import { SvgProps } from "react-native-svg";
  const content: React.FC<SvgProps>;
  export default content;
}

// declare module "*.svg" {
//   import * as React from "react";
//   const content: React.JSX.Element;
//   export default content;
// }

// declare module "*.svg?url" {
//   const content: any;
//   export default content;
// }
