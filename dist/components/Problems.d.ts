/// <reference types="react" />
import * as React from "react";
import { File } from "../model";
import { ITree } from "../monaco-extra";
export interface ProblemsProps {
}
export declare class Problems extends React.Component<ProblemsProps, {}> {
    constructor(props: ProblemsProps);
    tree: ITree;
    contextViewService: any;
    contextMenuService: any;
    container: HTMLDivElement;
    private setContainer(container);
    private ensureTree();
    lastClickedTime: number;
    onClickFile(file: File): void;
    componentDidMount(): void;
    componentWillReceiveProps(props: ProblemsProps): void;
    render(): JSX.Element;
}
