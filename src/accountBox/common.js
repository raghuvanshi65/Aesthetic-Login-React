import styled from 'styled-components';

export const BoxContainer = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top :10px;
`;


export const FormContainer = styled.div`
    padding-top: 20%;
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const MutedLink = styled.a`
    font-size: 12px;
    color: rgba(200 , 200 ,200 ,1);
    font-weight: 500;
    text-decoration: none;
    padding: 4%;
`;

export const BoldLink = styled.a`
    font-size: 12px;
    color : rgb(241 , 196 ,15);
    font-weight: 500;
    text-decoration: none;
`;


export const Input = styled.input`
    border : 0px;
    width: 100%;
    height: 42px;
    outline: none;
    border: 1px solid rgba(200 , 200 , 200 , 0.4);
    padding: 0px 10px;
    margin: 4% 1%;
    border-bottom: 1.5px solid rgba(200 , 200 , 200 , 0.4);
    border-radius: 10px;

    &::placeholder{
        color: 1px solid rgba(200 , 200 , 200 , 1);
    }

    &:not(:last-of-type){
    }

    &:focus{
        outline: none;
        border: 1px solid rgba(200 , 200 ,200 ,0.7);
    }
`;


export const SubmitButton = styled.button`
    width: 100%;
    padding: 11px 40%;
    color: #fff;
    font-size: 15px;
    font-weight: 600;
    border: none;
    border-radius: 100px 100px 100px 100px;
    cursor: pointer;
    transition: all 240ms ease-in-out;

    background : rgb(241 , 196 ,15);
    background: linear-gradient(
        58deg , rgba(241 , 196 ,15 , 1) 20% , rgba(243 , 172 ,18 , 1) 100%
    );

    &:hover{
        filter: brightness(1.08);
    }
`; 