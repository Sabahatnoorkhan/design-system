import * as React from 'react';
import { BaseProps, SingleOrArray } from "../../../utils/types";
import { FontVariationType } from "../../../common.type";
interface TabInfo {
    label: string;
    activeIndex: number;
    currentTabIndex: number;
}
export interface TabConfig {
    label: string;
    count?: number;
    icon?: string;
    disabled?: boolean;
    className?: string;
    isDismissible?: boolean;
    onDismiss?: (tabInfo: TabInfo) => void;
    iconVariations?: FontVariationType;
}
export interface TabsProps extends BaseProps {
    activeIndex?: number;
    withSeparator?: boolean;
    tabs: TabConfig[];
    children?: SingleOrArray<React.ReactElement>;
    onTabChange?: (tabIndex: number) => void;
    headerClassName?: string;
}
export declare const Tabs: {
    (props: TabsProps): JSX.Element;
    displayName: string;
    defaultProps: {
        withSeparator: boolean;
        tabs: never[];
    };
};
export default Tabs;
