import { Piece } from './models/Piece'
import { Position } from './models/Position'
import { PieceType, TeamType } from './Types'
import { Board } from './models/Board'

// Axes
export const VERTICAL_AXIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]
export const HORIZONTAL_AXIS = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14]

// Grid Size
export const GRID_SIZE = 50

// InitialBoardState
export const initialBoard: Board = new Board(
  [
    // Red Pieces
    new Piece(new Position(3, 0), PieceType.ROOK, TeamType.RED),
    new Piece(new Position(4, 0), PieceType.KNIGHT, TeamType.RED),
    new Piece(new Position(5, 0), PieceType.BISHOP, TeamType.RED),
    new Piece(new Position(6, 0), PieceType.QUEEN, TeamType.RED),
    new Piece(new Position(7, 0), PieceType.KING, TeamType.RED),
    new Piece(new Position(8, 0), PieceType.BISHOP, TeamType.RED),
    new Piece(new Position(9, 0), PieceType.KNIGHT, TeamType.RED),
    new Piece(new Position(10, 0), PieceType.ROOK, TeamType.RED),
    // Pawns
    new Piece(new Position(3, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(4, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(5, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(6, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(7, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(8, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(9, 1), PieceType.PAWN, TeamType.RED),
    new Piece(new Position(10, 1), PieceType.PAWN, TeamType.RED),

    // Yellow Pieces
    new Piece(new Position(3, 13), PieceType.ROOK, TeamType.YELLOW),
    new Piece(new Position(4, 13), PieceType.KNIGHT, TeamType.YELLOW),
    new Piece(new Position(5, 13), PieceType.BISHOP, TeamType.YELLOW),
    new Piece(new Position(6, 13), PieceType.KING, TeamType.YELLOW),
    new Piece(new Position(7, 13), PieceType.QUEEN, TeamType.YELLOW),
    new Piece(new Position(8, 13), PieceType.BISHOP, TeamType.YELLOW),
    new Piece(new Position(9, 13), PieceType.KNIGHT, TeamType.YELLOW),
    new Piece(new Position(10, 13), PieceType.ROOK, TeamType.YELLOW),
    // Pawns
    new Piece(new Position(3, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(4, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(5, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(6, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(7, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(8, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(9, 12), PieceType.PAWN, TeamType.YELLOW),
    new Piece(new Position(10, 12), PieceType.PAWN, TeamType.YELLOW),

    // BLUE Pieces
    new Piece(new Position(0, 3), PieceType.ROOK, TeamType.BLUE),
    new Piece(new Position(0, 4), PieceType.KNIGHT, TeamType.BLUE),
    new Piece(new Position(0, 5), PieceType.BISHOP, TeamType.BLUE),
    new Piece(new Position(0, 6), PieceType.QUEEN, TeamType.BLUE),
    new Piece(new Position(0, 7), PieceType.KING, TeamType.BLUE),
    new Piece(new Position(0, 8), PieceType.BISHOP, TeamType.BLUE),
    new Piece(new Position(0, 9), PieceType.KNIGHT, TeamType.BLUE),
    new Piece(new Position(0, 10), PieceType.ROOK, TeamType.BLUE),
    // Pawns
    new Piece(new Position(1, 3), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 4), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 5), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 6), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 7), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 8), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 9), PieceType.PAWN, TeamType.BLUE),
    new Piece(new Position(1, 10), PieceType.PAWN, TeamType.BLUE),

    // Green Pieces
    new Piece(new Position(13, 3), PieceType.ROOK, TeamType.GREEN),
    new Piece(new Position(13, 4), PieceType.KNIGHT, TeamType.GREEN),
    new Piece(new Position(13, 5), PieceType.BISHOP, TeamType.GREEN),
    new Piece(new Position(13, 6), PieceType.KING, TeamType.GREEN),
    new Piece(new Position(13, 7), PieceType.QUEEN, TeamType.GREEN),
    new Piece(new Position(13, 8), PieceType.BISHOP, TeamType.GREEN),
    new Piece(new Position(13, 9), PieceType.KNIGHT, TeamType.GREEN),
    new Piece(new Position(13, 10), PieceType.ROOK, TeamType.GREEN),
    // Pawns
    new Piece(new Position(12, 3), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 4), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 5), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 6), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 7), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 8), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 9), PieceType.PAWN, TeamType.GREEN),
    new Piece(new Position(12, 10), PieceType.PAWN, TeamType.GREEN),
  ],
  1
)
