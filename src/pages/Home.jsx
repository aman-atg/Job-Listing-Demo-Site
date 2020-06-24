import React, { useState } from "react";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

import Data from "../assets/data.json";

import Card from "../components/Card";
import SearchBar from "../components/SearchBar";

const Home = () => {
  const [terms, setTerms] = useState([]);
  const [data, setData] = useState(Data);
  const addTerm = term => {
    setTerms([...new Set([...terms, term])]);
  };

  const clear = term => {
    if (term === "") setTerms([]);
    else setTerms(terms.filter(t => t !== term));
  };

  const getCardStyles = (isDragging, styles) => {
    if (isDragging)
      return {
        ...styles,
        boxShadow: "5px 5px 5px hsla(180, 29%, 50%,0.1)",
      };
  };
  const Cards = data.map((card, i) => {
    const cardWithDraggable = (
      <Draggable key={card.id} draggableId={card.logo} index={i}>
        {(provided, snapshot) => (
          <div
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            style={getCardStyles(
              snapshot.isDragging,
              provided.draggableProps.style
            )}
          >
            <Card
              index={i}
              addTerm={term => addTerm(term)}
              key={card.id}
              {...card}
            />
          </div>
        )}
      </Draggable>
    );

    if (terms.length === 0) {
      return cardWithDraggable;
    }

    ///
    let flg = 1;
    const { role, level, languages, tools } = card;
    const allTerms = [role, level, ...languages, ...tools];

    terms.forEach(t => {
      if (allTerms.filter(term => t === term).length === 0) flg = 0;
    });

    return flg ? cardWithDraggable : null;
  });

  const reorder = (list, startIndex, endIndex) => {
    const result = Array.from(list);
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
  };

  const onDragEnd = result => {
    console.log("dragEnd");
    if (!result.destination) return;
    setData(reorder(data, result.source.index, result.destination.index));
  };

  return (
    <div className="Home">
      <div className="header"></div>
      <div className="body">
        <SearchBar terms={terms} clear={clear} />
        <DragDropContext onDragEnd={onDragEnd}>
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div {...provided.droppableProps} ref={provided.innerRef}>
                <div className="cardList">{Cards}</div>

                {provided.placeholder}
              </div>
            )}
          </Droppable>
        </DragDropContext>
      </div>
    </div>
  );
};

export default Home;
