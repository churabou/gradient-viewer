import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div<{ background: string }>`
  padding: 40px;
  height: 100vh;
  background: ${props => props.background || "#f6f6f6"};
  transition: 0.2s ease-in-out;
  text-align: center;
  ol {
    width: 80%;
    padding: 0px;
    height: 50vh;
    bottom: 0px;
    overflow: scroll;
    list-style: none;
    display: inline-block;
    position: sticky;
    li {
      display: inline-block;
      margin-bottom: 40px;
      margin-right: 40px;
      padding: 100px;
      background: white;
      border-radius: 20px;
      span {
        display: inline-block;
        width: 250px;
        height: 250px;
        border-radius: 125px;
      }
      transition: 0.3s ease-in;
    }
    li:hover {
      transform: scale(1.05, 1.05);
    }
  }
`;

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const colors = [...Array(100)].map(
  _ => `linear-gradient(${randomColor()},${randomColor()})`
);

const App = () => {
  const [background, setBackground] = useState("");

  return (
    <Wrapper background={background}>
      <ol>
        {colors.map(background => {
          return (
            <li onMouseEnter={() => setBackground(background)}>
              <span
                style={{
                  background
                }}
              ></span>
              <p>{background}</p>
            </li>
          );
        })}
      </ol>
    </Wrapper>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
