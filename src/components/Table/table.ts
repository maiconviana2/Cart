import styled from "styled-components";


export const Table = styled.table`
    width: 80%;
    padding: 2rem;
`

export const Aside = styled.aside`
    width: 20%;
    max-height:250px;
    display:flex;
    flex-direction: column;
    justify-content: space-between;
    padding:2rem;
    border: 1px solid #EEE;
`

export const PayButton = styled.button`
    margin:0.5rem 0;
    padding:1rem;
    font-size: 1rem;
    font-weight:bold;
    background: #18eb18;
    color:#FFF;
    border:none;
    border-radius:0.5rem;
    &&:hover {
        background-color: #16c516;
    }
`

export const Td = styled.td`
    padding:0.5rem;
`

export const Tr = styled.tr`
    margin: 0.5rem 0;
  &&:hover{
    background-color: #474747;
  }
`