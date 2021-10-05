import styled from "styled-components";

export const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items:center;
  justify-content: center;
  flex-direction: column;
`

export const Card = styled.div`
  background: #fff;
  width: 550px;
  padding: 20px;
  margin-top: 15px;
  border-radius: 8px;
  box-shadow: 0 6px 10px 0 rgba(0,0,0,0.20);

  h2 {
    font-size: 22px;
    color: #392D2D;
    margin-bottom: 10px;
  }
`

export const Templates = styled.div`
  width: 100%;
  height: 90px;
  background: #eee;
  border-radius: 8px;
  overflow-x: auto;
  display: flex;
  align-items: center;
  padding: 0 15px;
  margin-bottom: 30px;

  button {
    border: 2px solid transparent;
    background: transparent;
    margin-right: 10px;
    &.selected {
    border-color: #4395D8;
  }
  }

  

  img {
    width: 53px;
    height: 53px
  }
`

export const Form = styled.form`
  input {
    width: 100%;
    height: 40px;
    border-radius: 8px;
    border: 1px solid #DBDBDB;
    padding: 0 15px;
    font-size: 14px;
    margin-bottom: 10px;
  }

`

export const Button = styled.button`
  width: 100%;
  background: #4395d8;
  height: 40px;
  border: 0;
  font-weight: bold;
  color: #fff;
  font-size: 14px;
  border-radius: 8px;
  margin-top: 10px;
  transition: background .2s ease-in;
  
  &:hover {
    background: #3672A3;
  }
`