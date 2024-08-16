import styled from 'styled-components';

export const StyledNav = styled.nav`
  background-color: #1e1e2195;
  color: white;
  border-radius: 10px 0 0 10px;
  box-sizing: border-box;
  button{
    border-radius: 10px;
    border: none;
    min-width: 50px;
    min-height: 50px;
    box-sizing: border-box;
  }
   button:hover {
	background-color: #FFFFFF90;
}
  height: 100vh;
  width: 15%;
`
export const UpNavButtons = styled.div`
    padding: 10px;
    margin: 20px;
    display: flex;
    justify-content: center;
`

export const Downbutton = styled.button`
  padding: 3px;
  background-color: transparent;
  color: white;
  margin-top: 5px;
  align-self: flex-start;
   font-size: 20px;
   padding-right: auto;
   width: 80%;
   span{
   width: 10%;
   }
`

export const Writebutton = styled.button`
  margin-right:7px;
  width: auto;
  min-height: 50px;
   font-size: 20px;

`

export const NavButtons = styled.div`
  flex-direction: column;
  margin: 20px;
    min-height:30px; 
    min-width: 120px;
     justify-content: flex-start;
    align-items: flex-start;
    align-self: flex-start;
    flex-direction: column;
    box-sizing: content-box;
    width: 90%;
`
