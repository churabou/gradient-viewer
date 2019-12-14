import React, { useState } from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";

const Wrapper = styled.div<{ background: string }>`
  height: 100vh;
  background: #f6f6f6;
  display: flex;
  justify-content: space-between;
  h1 {
    margin: 0px;
    width: 40vw;
    line-height: 100vh;
    font-size: 50px;
    color: white;
    text-align: center;
    background: ${props => props.background};
  }

  ol {
    width: 60vw;
    padding: 40px;
    overflow: scroll;
    list-style: none;
    li {
      display: inline-block;
      margin-bottom: 40px;
      margin-right: 40px;
      padding: 100px;
      background: white;
      border-radius: 20px;
      transition: 0.3s ease-in;
      :hover {
        transform: scale(1.05, 1.05);
      }
      span {
        display: inline-block;
        width: 250px;
        height: 250px;
        border-radius: 125px;
      }
    }
    ::-webkit-scrollbar {
      display: none; /* hide scroll bar Safari and Chrome */
    }
  }
`;

const randomColor = () =>
  `#${Math.floor(Math.random() * 16777215).toString(16)}`;

const colors = [...Array(99)].map(
  _ => `linear-gradient(${randomColor()},${randomColor()})`
);

const App = () => {
  const [background, setBackground] = useState("");

  return (
    <Wrapper background={background}>
      <h1>{background}</h1>

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
