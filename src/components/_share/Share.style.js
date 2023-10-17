import { Link } from "react-router-dom";
import { styled } from "styled-components";

export const Logo = styled.img`
    width: 238px;
`;

export const SubText = styled.p`
    font-size: 14px;
    line-height: 20px;
    color: var(--white);
`;

export const FormWrapper = styled.div`
    width: 100%;
    height: 100%;
    background-color: var(--white);
    padding: 36px 34px;

    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const FormTitle = styled.h1`
    font-size: 20px;
    line-height: 24px;
    font-weight: 500;
    color: var(--black);
`;

export const Input = styled.input`
    width: 100%;
    padding: 8px 0;
    font-size: 14px;
    color: var(--black);
    border: none;
    border-bottom: 1px solid var(--gray-02);

    &::placeholder {
        color: var(--gray-02);
    }

    &:-webkit-autofill,
    &:-webkit-autofill:hover,
    &:-webkit-autofill:focus,
    &:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
        -webkit-transition: background-color 9999s ease-out;
        -webkit-box-shadow: 0 0 0px 1000px 'var(--orange-300);' inset !important;
        -webkit-text-fill-color: 'var(--orange-300);' !important;
    }
`;

export const FormBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
    gap: 30px;
    margin-top: 41px;
    margin-bottom: 21px;
`;

export const InputLabel = styled.label`
    font-size: 12px;
    line-height: 14px;
    color: var(--gray-01);
    font-weight: 500;
`;

export const SmallLink = styled(Link)`
    color: var(--gray-01);
    font-size: 12px;
    line-height: 14px;

    & + & {
        margin-left: 28px;
        position: relative;
    }

    & + &::after {
        content: "";
        width: 1px;
        height: 12px;
        background-color: var(--gray-01);
        position: absolute;
        top: 1px;
        left: -14px;
    }

`;

export const Button = styled.button`
    width: ${props => props.width || '100%'};
    border-radius: 44px;
    background-color: var(--main-color-01);
    color: var(--white);
    font-size: 14px;
    font-weight: var(--medium);
    padding: 13px 0;
    
    &:disabled {
        background-color: var(--main-color-02);
    }
`;

