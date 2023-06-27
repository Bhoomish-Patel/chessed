import React, { useRef, useState } from 'react'
import PlayerName from '../PlayerName/PlayerName'
import Tile from '../Tile/Tile'
import './Chessboard.css'
import Referee from '../../referee/Referee'
import {
  VERTICAL_AXIS,
  HORIZONTAL_AXIS,
  GRID_SIZE,
  Piece,
  initialBoardState,
  Position,
  PieceType,
  TeamType,
  samePosition,
} from '../../Constants'

export default function Chessboard() {
  const [activePiece, setActivePiece] = useState<HTMLElement | null>(null)
  const [grabPosition, setGrabPosition] = useState<Position>({ x: -1, y: -1 })
  const [pieces, setPieces] = useState<Piece[]>(initialBoardState)
  const chessboardRef = useRef<HTMLDivElement>(null)
  const referee = new Referee()

  // Function when player grabs a  piece
  function grabPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current
    const element = e.target as HTMLElement

    if (element.classList.contains('chess-piece') && chessboard) {
      const grabX = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE)
      const grabY = Math.abs(
        Math.abs(
          Math.ceil((e.clientY - chessboard.offsetTop - 700) / GRID_SIZE)
        )
      )
      setGrabPosition({ x: grabX, y: grabY })

      const x = e.clientX - GRID_SIZE / 2
      const y = e.clientY - GRID_SIZE / 2

      element.style.position = 'absolute'
      element.style.left = `${x}px`
      element.style.top = `${y}px`
      setActivePiece(element)
    }
  }

  // Function when player tries to move a piece
  function movePiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const leftX = chessboard.offsetLeft - 4
      const midleftX =
        chessboard.offsetLeft + (chessboard.clientWidth / 14) * 3 - 4
      const topY = chessboard.offsetTop - 4
      const midtopY =
        chessboard.offsetTop + (chessboard.clientHeight / 14) * 3 - 4
      const rightX = chessboard.offsetLeft + chessboard.clientWidth - 46
      const midrightX =
        chessboard.offsetLeft -
        (chessboard.clientWidth / 14) * 3 +
        chessboard.clientWidth -
        46
      const bottomY = chessboard.offsetTop + chessboard.clientHeight - 46
      const midbottomY =
        chessboard.offsetTop -
        (chessboard.clientHeight / 14) * 3 +
        chessboard.clientHeight -
        46
      const x = e.clientX - GRID_SIZE / 2
      const y = e.clientY - GRID_SIZE / 2
      activePiece.style.position = 'absolute'

      // Restricting the x position
      if (x < leftX) {
        activePiece.style.left = `${leftX}px`
      } else if (x > rightX) {
        activePiece.style.left = `${rightX}px`
      } else {
        activePiece.style.left = `${x}px`
      }

      // Restricting the y position
      if (y < topY) {
        activePiece.style.top = `${topY}px`
      } else if (y > bottomY) {
        activePiece.style.top = `${bottomY}px`
      } else {
        activePiece.style.top = `${y}px`
      }

      if ((x < midleftX && y > midbottomY) || (x < midleftX && y < midtopY)) {
        activePiece.style.left = `${midleftX}px`
      } else if (
        (x > midrightX && y > midbottomY) ||
        (x > midrightX && y < midtopY)
      ) {
        activePiece.style.left = `${midrightX}px`
      }
    }
  }

  // Function when player drops a piece
  function dropPiece(e: React.MouseEvent) {
    const chessboard = chessboardRef.current
    if (activePiece && chessboard) {
      const x = Math.floor((e.clientX - chessboard.offsetLeft) / GRID_SIZE)
      const y = Math.abs(
        Math.ceil((e.clientY - chessboard.offsetTop - 700) / GRID_SIZE)
      )

      const currentPiece = pieces.find((p) =>
        samePosition(p.position, grabPosition)
      )

      // Checking the validity of the move made by player
      if (currentPiece) {
        const validMove = referee.isValidMove(
          grabPosition,
          { x, y },
          currentPiece.type,
          currentPiece.team,
          pieces
        )

        if (validMove) {
          // Updating the position of the piece
          // If a piece is attacked then remove it
          const updatedPieces = pieces.reduce((results, piece) => {
            if (samePosition(piece.position, grabPosition)) {
              piece.position.x = x
              piece.position.y = y

              if (piece.type === PieceType.PAWN) {
                if (piece.team === TeamType.RED && y === 7) {
                  console.log('Red Pawn is ready for promotion')
                } else if (piece.team === TeamType.YELLOW && y === 6) {
                  console.log('Yellow Pawn is ready for promotion')
                } else if (piece.team === TeamType.BLUE && x === 7) {
                  console.log('Blue Pawn is ready for promotion')
                } else if (piece.team === TeamType.GREEN && x === 6) {
                  console.log('Green Pawn is ready for promotion')
                }
              }

              results.push(piece)
            } else if (!samePosition(piece.position, { x, y })) {
              results.push(piece)
            }
            return results
          }, [] as Piece[])

          setPieces(updatedPieces)
        } else {
          // Resets the piece position
          activePiece.style.position = 'relative'
          activePiece.style.removeProperty('top')
          activePiece.style.removeProperty('left')
        }
      }
      setActivePiece(null)
    }
  }

  let board = []

  for (let j = VERTICAL_AXIS.length - 1; j >= 0; j--) {
    for (let i = 0; i < HORIZONTAL_AXIS.length; i++) {
      const num_i = i
      const num_j = j
      const piece = pieces.find((p) => samePosition(p.position, { x: i, y: j }))
      let image = piece ? piece.image : undefined

      // Made chessboard with all the 'useful' squares
      board.push(
        <Tile key={`${i},${j}`} num_i={num_i} num_j={num_j} image={image} />
      )
    }
  }

  return (
    <>
      <div
        onMouseMove={(e) => movePiece(e)}
        onMouseDown={(e) => grabPiece(e)}
        onMouseUp={(e) => dropPiece(e)}
        id='chessboard'
        ref={chessboardRef}
      >
        {board}
        <PlayerName />
      </div>
    </>
  )
}
