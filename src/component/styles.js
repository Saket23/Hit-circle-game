import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  overflow: scroll;
`;

export const WrapperContainer = styled.div`
  margin: 20px;
  width: 50%;
  border: 1px solid grey;
  box-shadow: 10px 10px 17px 3px rgba(0, 0, 0, 0.75);
`;

export const Heading = styled.h4`
  width: 100%;
  text-align: center;
  font-size: 24px;
`;

export const SubHeading = styled.div`
  width: 100%;
  text-align: center;
`;

export const ScoreContainer = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 10px;

  @media (max-width: 414px) {
    justify-content: flex-start;
  }
`;

export const Score = styled.input`
  height: 25px;
  margin: 0px 20px;

  @media (max-width: 414px) {
    border: 1px solid grey;
    margin-left: 10px;
  }
`;

export const Circles = styled.div`
  border-top: 1px solid #e9e6f5;
  border-bottom: 1px solid #e9e6f5;
  padding: 20px 100px;
  margin: 20px;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr 1fr 1fr;

  @media (max-width: 414px) {
    grid-template-columns: 1fr 1fr 1fr 1fr;
    padding: 20px 20px;
    margin: 0px;
  }
`;

export const Circle = styled.div`
  margin: 10px;
  height: 20px;
  width: 20px;
  background-color: #bbb;
  border-radius: 50%;
  display: inline-block;
`;

export const Buttons = styled.div`
  padding: 20px 100px;
  margin: 20px;
  display: flex;
  justify-content: space-around;
`;

export const Play = styled.button`
  background-color: blue;
  color: white;
  padding: 15px 25px;
  font-weight: 600;
`;

export const Stop = styled.button`
  padding: 15px 25px;
  font-weight: 600;
`;
