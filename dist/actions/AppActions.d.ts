import { File, Directory, Project } from "../model";
export declare enum AppActionType {
    ADD_FILE_TO = "ADD_FILE_TO",
    LOAD_PROJECT = "LOAD_PROJECT",
    INIT_STORE = "INIT_STORE",
    UPDATE_FILE_NAME_AND_DESCRIPTION = "UPDATE_FILE_NAME_AND_DESCRIPTION",
    DELETE_FILE = "DELETE_FILE",
    LOG_LN = "LOG_LN",
}
export interface AppAction {
    type: AppActionType;
}
export interface AddFileToAction extends AppAction {
    type: AppActionType.ADD_FILE_TO;
    file: File;
    parent: Directory;
}
export declare function addFileTo(file: File, parent: Directory): void;
export interface LoadProjectAction extends AppAction {
    type: AppActionType.LOAD_PROJECT;
    project: Project;
}
export declare function loadProject(project: Project): void;
export declare function initStore(): void;
export interface UpdateFileNameAndDescriptionAction extends AppAction {
    type: AppActionType.UPDATE_FILE_NAME_AND_DESCRIPTION;
    file: File;
    name: string;
    description: string;
}
export declare function updateFileNameAndDescription(file: File, name: string, description: string): void;
export interface DeleteFileAction extends AppAction {
    type: AppActionType.DELETE_FILE;
    file: File;
}
export declare function deleteFile(file: File): void;
export interface LogLnAction extends AppAction {
    type: AppActionType.LOG_LN;
    message: string;
    kind: ("" | "info" | "warn" | "error");
}
export declare function logLn(message: string, kind?: "" | "info" | "warn" | "error"): void;
