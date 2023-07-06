import styled from "styled-components";
import {useRef, useState, useEffect} from "react";
import React from "react";
import InputMask from 'react-input-mask';
import {Link} from "react-router-dom";

interface Props{
    changeModalSuccessFlag: (flag: boolean) => void;
    changeModalFlag: (flag: boolean) => void;

}


function UserFormModal({changeModalSuccessFlag, changeModalFlag}:Props){

    const formRef = useRef<HTMLFormElement>(null);
    const [usernameValue, setUsernameValue] = useState("");
    const [phoneValue, setPhoneValue] = useState("");
    const [buttonActiveFlag, setButtonActiveFlag] = useState(false);
    const [usernameInputErrorFlag, setUsernameInputErrorFlag] = useState(false);




    useEffect(()=>{
        setButtonActiveFlag(false);
        console.log(phoneValue);
        if(!!usernameValue.trim() && phoneValue.charAt(phoneValue.length-1) !== "_" && !!phoneValue.trim()){
            setButtonActiveFlag(true);
        }
        if(!!usernameValue.trim()){
            setUsernameInputErrorFlag(false);
        }
        else{
            setUsernameInputErrorFlag(true);
        }

    }, [usernameValue, phoneValue])

    useEffect(()=>{
        setUsernameInputErrorFlag(false);
    }, [])


    // @ts-ignore
    const phoneHandleInput = ({ target: { value } }) => {
        setPhoneValue(value)
    }
    // @ts-ignore
    const usernameHandleInput = ({ target: { value } }) => {
        console.log(1)
        setUsernameValue(value)
    }



    function handleFormSumbit(event: React.FormEvent<HTMLFormElement>){
        event.preventDefault();
        console.log(formRef);
        if(!buttonActiveFlag) return;
        changeModalSuccessFlag(true);
    }




    return(
        <>
            <Overlay onClick={()=>changeModalFlag(false)}/>
            <ExternalWrapper>
                <TitleWrapper>
                    <TitleText>
                        Получите медиаплан<br/> для продвижения автобизнеса
                    </TitleText>
                    <CloseIcon onClick={()=>changeModalFlag(false)} src={"./images/closeIcon.svg"}/>
                </TitleWrapper>
                <Form onSubmit={handleFormSumbit}>
                    <UsernameInput
                        usernameInputErrorFlag={usernameInputErrorFlag}
                        placeholder={"Представьтесь"}
                        value={usernameValue}
                        type={"text"}
                        onChange={usernameHandleInput}
                    />
                    {
                        usernameInputErrorFlag ?
                            <UsernameInputHelpWindow>
                                <UsernameInputHelpText>Обязательное поле</UsernameInputHelpText>
                            </UsernameInputHelpWindow>
                            :
                            null
                    }
                    <PhoneNumberInput
                        mask='+7 (999) 999-99-99'
                        placeholder={"+7 (___) ___-__-__"}
                        value={phoneValue}
                        onChange={phoneHandleInput}
                    />
                    <ActiveSubmitFormInput type={"submit"} value={"Получить"}/>
                </Form>
                <UnderFormDescription>
                    Нажимая кнопку «Получить», вы соглашаетесь<br/>
                </UnderFormDescription>
                <UnderlineDescriptionText to={"/policy"}>«Политикой конфиденциальности»</UnderlineDescriptionText>

            </ExternalWrapper>

        </>
    )
}


const ExternalWrapper = styled.div`
    position: absolute;
    
    left:50%;
    transform:translate(-50%, 50%);
    padding: 38px 28px;
    border-radius: 16px;
    background-color: white;
    z-index: 5;
    font-family: 'Muller';
    width: 450px;
    z-index: 4;
    @media(max-width: 480px){
        width: 350px;
        padding: 30px 15px;
    }
    @media(max-width: 360px){
        width: 300px;
    }
`
const Overlay = styled.div`
    position: fixed;
    width: 100vw;
    min-height: 100vh;
    top: 0;
    left: 0;
    background-color: gray;
    opacity: 0.5;
    z-index: 3;
`

const TitleWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

`

const TitleText = styled.p`
    font-size: 24px;
    font-weight: 700;
    color: black;
    margin-right: 20px;
    @media(max-width: 480px){
        font-size: 16px;
    }
    @media(max-width: 360px){
        font-size: 14px;
    }
    
`
const CloseIcon = styled.img`
    cursor: pointer;
`
const Form = styled.form`
    display: flex;
    flex-direction: column;
    margin-top: 18px;
    position: relative;
    width: 100%;
`


interface IUsernameInput{
    usernameInputErrorFlag: boolean;
}

const UsernameInput = styled.input<IUsernameInput>`
    border: 1px solid #000000;
    margin-bottom: 16px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    padding: 16px 0px 16px 30px;
    position: relative;
    width: 100%;
    border: 1px solid ${props => props.usernameInputErrorFlag ? "red" : "black"};
    @media(max-width: 430px){
        font-size: 16px;
    }
    @media(max-width: 360px){
        font-size: 14px;
    }
`
const PhoneNumberInput = styled(InputMask)`
    border: 1px solid #000000;
    margin-bottom: 15px;
    border-radius: 10px;
    outline: none;
    font-size: 20px;
    font-weight: 400;
    position: relative;
    width: 100%;
    padding: 16px 0px 16px 30px;
    @media(max-width: 480px){
        font-size: 16px;
    }
    @media(max-width: 360px){
        font-size: 14px;
    }
`
const ActiveSubmitFormInput = styled.input`
    font-size: 22px;
    font-weight: 500;
    background-color: #5C6D08;
    border: none;
    border-radius: 8px;
    color: white;
    cursor: pointer;
    
    position: relative;
    width: 100%;
    @media(max-width: 480px){
        font-size: 18px;
    }
    @media(max-width: 360px){
        font-size: 16px;
    }
    height: 52px;
`

const UsernameInputHelpWindow = styled.div`
    position: absolute;
    margin-top: 55px;
    margin-left: 20px;
    background-image: url('./images/helpMessage.svg');
    height: 35px;
    z-index: 5;
    background-repeat: no-repeat;
    padding: 5px 10px;
    @media(max-width: 500px){
        margin-top: 50px;
    }
`
const UsernameInputHelpText = styled.p`
    font-size: 12px;
    color: red;
    padding-top: 10px;
`
const UnderFormDescription = styled.div`
    font-size: 14px;
    color: #161A03;
    margin-top: 15px;
`
const UnderlineDescriptionText = styled(Link)`
    font-size: 14px;
    color: #161A03;
    
`


export default UserFormModal;