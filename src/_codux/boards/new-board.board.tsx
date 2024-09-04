import "./new-board.board.css";
import React from "react";
import { createBoard } from "@wixc3/react-board";

export default createBoard({
  name: "New Board",
  Board: () => (
    
    <ul className="navBar">
        <li className="navButton">Coffee</li>
        <li className="navButton">Tea</li>
        <li className="navButton">Milk</li>
    </ul>
  ),
  isSnippet: true,
  tags: ['nav']
});
