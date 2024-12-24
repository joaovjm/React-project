import styled from 'styled-components'

export const Button = styled.button`
    font-style: italic;
    background-color: #11db11;
    height: 30px;
    padding: 5px 15px;
    border: none;
    border-radius: 5px;
    margin-left: 15px;
    cursor: pointer;

    &:hover{
        background-color: #086908;
    }
`
export const TrashButton = styled.button`
    background-color: transparent;
    border: 1px solid #550968;
    border-radius: 5px;
    margin-left: 8px;
    padding: 2px;
    cursor: pointer;

    &:hover{
        background-color: #550968;
    }
`

export const Container = styled.div`
    background-color: #930cb4;
    padding: 10px 15px;
    border-radius: 5px;

`

export const Products = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;
    margin-top: 10px;
    margin-left: 30px;
    border: none;
    padding: 5px;
    box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    background-color: #880ea7;
`