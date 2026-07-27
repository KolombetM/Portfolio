export interface TerminalAPIInterface {
    clearOutput: () => void;
    openUrl: (url: string) => void;
    downloadFile: (path: string, url: string) => void;
    write: (output: React.ReactNode) => void;
    executeCommand: (command: string) => void;
    inputCommand: (command: string) => Promise<void>;
    replayCommands: (commandHistory: string[]) => void;
}