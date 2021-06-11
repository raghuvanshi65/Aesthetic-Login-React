import React from 'react';
import styled from 'styled-components';
import LoginForm from './LoginForm';

const BoxContainer = styled.div`
    width: 300px;
    min-height: 550px;
    display: flex;
    flex-direction: column;
    border-radius: 19px;
    background-color: #fff;
    box-shadow: 0 0 2px rgba(15 , 15 ,15 , 0.28);
    position: relative;
    overflow: hidden;
`;

const TopContainer = styled.div`
    width: 100%;
    height: 200px;
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding: 0 1.8rem;
    padding-bottom: 5em ;
    z-index: -10px;
`;

const HeaderContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
`;

const HeaderText = styled.h1`
    margin: 10% 0 0 -2%;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.24;
    z-index: 10;
    color: #fff;
`;

const HeaderContent = styled.div`
    margin-left: -1%;
    font-family: 'Montserrat', sans-serif;
    line-height: 1.24;
    font-size: 15px;
    z-index: 10;
    color: #fff;
`;


const BackDrop = styled.div`
    z-index: -10px;
    width : 160%;
    height: 550px;
    position: absolute;
    top: -330px;
    left: -70px;
    transform: rotate(60deg);
    display: flex;
    flex-direction: column;
    border-radius: 50%;
    background : rgb(241 , 196 ,15);
    background: linear-gradient(
        58deg , rgba(241 , 196 ,15 , 1) 20% , rgba(243 , 172 ,18 , 1) 100%
    );
`;

const InnerContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding: 0 1.5rem;
`;

export const AccountBox = (props) => {
    return (
        <BoxContainer>
            <TopContainer>
                <BackDrop></BackDrop>
                <HeaderContainer>
                    <HeaderText>Welcome</HeaderText>
                    <HeaderContent>Please Sign in to continue <br /> We Value your Privacy</HeaderContent>
                </HeaderContainer>
            </TopContainer>
            <InnerContainer>
                <LoginForm></LoginForm>
            </InnerContainer>
        </BoxContainer>
    );
}