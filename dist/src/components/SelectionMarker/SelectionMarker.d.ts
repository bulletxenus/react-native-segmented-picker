import React, { ReactNode } from 'react';
interface Props {
    backgroundColor: string;
    borderColor: string;
    SelectionComponent?: ReactNode;
}
declare const _default: ({ backgroundColor, borderColor, SelectionComponent, }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
/**
 * Horizontal bar used to indicate the current picker selections.
 */
export default _default;
