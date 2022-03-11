import React from "react";
import { FontSize } from "@ds.a/foundation";
export interface TextProps {
    size?: keyof typeof FontSize;
}
declare const Text: React.FC<TextProps>;
export default Text;
