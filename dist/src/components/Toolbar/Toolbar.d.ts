import React from 'react';
interface Props {
    confirmText: string;
    titleText: string;
    confirmTextColor: string;
    toolbarBackground: string;
    toolbarBorderColor: string;
    onConfirm: () => void;
    onClose: () => void;
}
declare const _default: ({ confirmText, titleText, confirmTextColor, toolbarBackground, toolbarBorderColor, onConfirm, onClose, }: Props) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
/**
 * Top action bar that displays above the picker modal which allows a user to confirm
 * their selections and close the modal.
 */
export default _default;
