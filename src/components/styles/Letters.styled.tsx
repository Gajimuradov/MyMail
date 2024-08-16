import styled from 'styled-components';

export const AllLetters = styled.div`
  display: flex;
  flex-flow: column nowrap;
  width: 100%;
`;

export const OneLetter = styled.div`
  border: 1px solid #464648;
  box-sizing: border-box;
  width: 100%;
  align-items: flex-start;
`;

export const FirstBlock = styled.div`
  box-sizing: border-box;
  max-width: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-left: 5px;
  font-size: 20px; 
  input{
   
  }
  img {
    margin: 10px 15px 0 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
  }
  span{
    font-weight: bold;
  }
`;


export const SecondBlock = styled.div`
  box-sizing: border-box;
  max-width: 70%;
  margin-right: 7px;
   p{
    font-size: 20px; 
    color: #8e8e93;
    white-space: nowrap; 
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 5px;
  }
  span{
  font-weight: bold;
  white-space: nowrap; 
  font-size: 20px; 
  margin-right: 10px;
  margin-left: 10px;
  }
`;


export const FileBlock = styled.div`
 max-width: 10%;
 display: flex;
 justify-content: flex-end;
 align-self: center;
 div{
  flex-direction: column;
 }
`;

export const File = styled.div`
  box-sizing: border-box;
  min-height: 60px;
  min-width: 100px;
  justify-content: center;
  background-color: #353538;
  white-space: wrap; 
  overflow: hidden;
  text-overflow: ellipsis;
  border-radius: 10px;
  color: #fff;
  margin-right: 10px;
div{
    flex-direction: column;
    margin-left: 10px;
    max-width: 10px;
    max-height: 10%;
  }
`;

export const CountFiles = styled.div`
  background-color: #353538;
  border-radius: 5px;
  margin: 5px;
  max-width: 30px;
  height: 25px;


`;

export const UploadButton = styled.div`
  background-color: #353538;
  border-radius: 5px;
  margin: 5px;
  max-width: 30px;
  height: 25px;

`;
