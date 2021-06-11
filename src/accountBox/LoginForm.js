import React from 'react'
import { BoldLink, BoxContainer, FormContainer, Input, MutedLink, SubmitButton } from './common'

const LoginForm = () => {
    return (
        <BoxContainer>
            <FormContainer>
                <Input type="email" placeholder="Email"></Input>
                <Input type="password" placeholder="Password"></Input>
                <MutedLink href="#">Forget Your Password</MutedLink>
                <SubmitButton type="submit">Sign In</SubmitButton>
            </FormContainer>
        </BoxContainer>
    )
}

export default LoginForm
