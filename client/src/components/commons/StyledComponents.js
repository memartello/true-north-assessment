import styled from "styled-components"

export const TNHeader = styled.div`
  height:100px;
  display:flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 4px 8px 0 rgba(0,0,0,0.75);
  background-color:white;
`
export const TitleText = styled.label`
  font-family: "Cinzel", serif;
  font-size: 1.2rem;
  line-height: 5rem;
  font-weight: bold;
`

export const Container = styled.div`
padding:100px;
color: white;
`
export const Main = styled.div`
margin: 0
paddgin: 0
`

export const SubTitle = styled.label`
    font-size: 2rem;
    line-height: 2.5rem;
    font-family: 'Archivo', sans-serif;
`;

export const Card = styled.div`
    box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    height: 20px;
    padding: 50px;
    margin-bottom: 1em;
    background-color: white;
    color: black;
    cursor: pointer;
    &:hover{
        background-color: rgb(53 59 69);
        color:#1fc4db;
        transform: translate(0%, -5%);
        transition: 0.3s ease-out;
    }
`
export const TaskInfo = styled.label`
    font-family: 'Vollkorn', serif;
    font-size: 1.2rem;
    line-height: 2rem;
`
