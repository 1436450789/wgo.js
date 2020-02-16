import { PartialRecursive } from '../utils/makeConfig';
import CanvasBoard, { FieldObject } from '../CanvasBoard';
import PlayerBase from './PlayerBase';
import { CanvasBoardTheme } from '../CanvasBoard/types';
import { DrawHandler } from '../CanvasBoard/drawHandlers';
import MarkupHandler from './boardPropertyHandlers/MarkupHandler';
import MarkupLineHandler from './boardPropertyHandlers/MarkupLineHandler';
import MarkupLabelHandler from './boardPropertyHandlers/MarkupLabelHandler';
import ViewportHandler from './boardPropertyHandlers/ViewportHandler';
import MoveHandlerWithMark from './boardPropertyHandlers/MoveHandlerWithMark';
export interface PlainPlayerConfig {
    boardTheme: CanvasBoardTheme;
    currentMoveBlackMark: DrawHandler;
    currentMoveWhiteMark: DrawHandler;
    enableMouseWheel: boolean;
    enableKeys: boolean;
}
export declare const defaultPlainPlayerConfig: PlainPlayerConfig;
export default class PlainPlayer extends PlayerBase {
    static propertyHandlers: {
        CR: MarkupHandler;
        DD: MarkupHandler;
        MA: MarkupHandler;
        SL: MarkupHandler;
        SQ: MarkupHandler;
        TR: MarkupHandler;
        LB: MarkupLabelHandler;
        AR: MarkupLineHandler;
        LN: MarkupLineHandler;
        VW: ViewportHandler;
        B: MoveHandlerWithMark;
        W: MoveHandlerWithMark;
        SZ: import("./basePropertyHandlers/BoardSizeHandler").default;
        RU: import("./basePropertyHandlers/RulesHandler").default;
        HA: import("./basePropertyHandlers/HandicapHandler").default;
        AW: import("./basePropertyHandlers/SetupHandler").default;
        AB: import("./basePropertyHandlers/SetupHandler").default;
        AE: import("./basePropertyHandlers/SetupHandler").default;
        PL: import("./basePropertyHandlers/SetTurnHandler").default;
    };
    element: HTMLElement;
    config: PlainPlayerConfig;
    board: CanvasBoard;
    stoneBoardsObjects: FieldObject[];
    _mouseWheelEvent: EventListenerOrEventListenerObject;
    _keyEvent: EventListenerOrEventListenerObject;
    constructor(element: HTMLElement, config?: PartialRecursive<PlainPlayerConfig>);
    init(): void;
    destroy(): void;
    protected updateStones(): void;
}
