import styled from "styled-components";
import {Header, PolicyHeader, SuccessModal, UserFormModal} from '../../';
import {useEffect, useState} from "react";


interface Props{


}


function PolicyPage ({}:Props){

    const [windowWidth, setWindowWidth] = useState(window.innerWidth);

    const [modalWindowFlag, setModalWindowFlag] = useState(false);
    const [successModalWindowFlag, setSuccessModalWindowFlag] = useState(false);

    function resizeHandler(){
        setWindowWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener("resize", resizeHandler);
        return () => {
            window.removeEventListener("resize", resizeHandler);
        };
    }, []);





    return(
        <>
            {
                !modalWindowFlag ?
                    null
                    :
                    successModalWindowFlag ?
                        <SuccessModal changeModalSuccessFlag={setSuccessModalWindowFlag} changeModalFlag={setModalWindowFlag}/>
                        :
                        <UserFormModal changeModalSuccessFlag={setSuccessModalWindowFlag} changeModalFlag={setModalWindowFlag}/>
            }
            <ExternalWrapper>

                <PolicyHeader changeModalFlag={setModalWindowFlag} windowWidth={windowWidth}/>
                <MainContent>
                    <PolicyTitleText>Политика конфиденциальности</PolicyTitleText>
                    <ParagraphWrapper>
                        <SecondSizeTypeText>1. Общие положения</SecondSizeTypeText>
                        <ThirdSizeTypeText>
                            1. 1.1. Настоящая Политика конфидициальности определяет общие условия сбора и обработки<br/>
                            персональных данных пользователей сайта fermastudio.com, принадлежащего ООО «Ферма»
                        </ThirdSizeTypeText>
                        <ThirdSizeTypeText>
                            2. (далее - ФЕРМА)
                        </ThirdSizeTypeText>
                        <ThirdSizeTypeText>
                            3. 1.2. ФЕРМА осуществляет обработку следующих персональных данных:
                        </ThirdSizeTypeText>
                        <ParagraphOptionsList>
                            <ParagraphOptionElem>полное имя;</ParagraphOptionElem>
                            <ParagraphOptionElem>адрес электронной почты</ParagraphOptionElem>
                            <ParagraphOptionElem>номер мобильного телефона</ParagraphOptionElem>
                        </ParagraphOptionsList>
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <SecondSizeTypeText>2. Цели обработки персональных данных</SecondSizeTypeText>
                        <ThirdSizeTypeText>1. 2.1. Оператор ФЕРМА обрабатывает персональные данные пользователей с целью:</ThirdSizeTypeText>
                        <ParagraphOptionsList>
                            <ParagraphOptionElem>предоставления услуг</ParagraphOptionElem>
                        </ParagraphOptionsList>
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <SecondSizeTypeText>3. Доступ третьих лиц к персональным данным</SecondSizeTypeText>
                        <ThirdSizeTypeText>1. 3.1. Оператор ФЕРМА может передать персональные данные пользователей третьей стороне</ThirdSizeTypeText>
                        <ThirdSizeTypeText>2. в следующих случаях:</ThirdSizeTypeText>
                        <ParagraphOptionsList>
                            <ParagraphOptionElem>если передача персональных данных необходима для услуги;</ParagraphOptionElem>
                            <ParagraphOptionElem>если пользователь дал согласие на осуществление передачи своих данных третьей стороне</ParagraphOptionElem>
                        </ParagraphOptionsList>
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <SecondSizeTypeText>4. Обязанности оператора ФЕРМА по защите персональных данных</SecondSizeTypeText>
                        <ThirdSizeTypeText>
                            1. 4.1. Оператор ФЕРМА обязан принимать необходимые организационные и технические меры для<br/>
                            обеспечения конфиденциальности, целостности и доступности персональных данных пользователей.
                        </ThirdSizeTypeText>
                        <ThirdSizeTypeText>
                            2. 4.2. Оператор ФЕРМА обязан своевременно производить оценку соответствия требованиям<br/>
                            законодательства РФ в области защиты информации
                        </ThirdSizeTypeText>
                    </ParagraphWrapper>
                    <ParagraphWrapper>
                        <SecondSizeTypeText>5. Обратная связь</SecondSizeTypeText>
                        <ThirdSizeTypeText>1. 5.1. Все предложения и вопросы по использованию сайта следует направлять в службу поддержки</ThirdSizeTypeText>
                        <ThirdSizeTypeText>
                            2. по адресу электронной почты
                            <br/>
                            <UnderlineTextLink href={"mailto:mail@htmlacademy.ru"}>support@ferma.agency</UnderlineTextLink>
                        </ThirdSizeTypeText>
                    </ParagraphWrapper>
                </MainContent>
            </ExternalWrapper>
        </>
    )
}


const ExternalWrapper = styled.div`
    font-family: 'Muller';
    color: black;
`

const MainContent = styled.div`
    padding-left: 204px;
    padding-top: 44px;
    @media(max-width: 1440px){
        padding-left: 134px;
    }
    @media(max-width: 1200px){
        padding-left: 60px;
    }
    @media(max-width: 850px){
        padding-left: 30px;
        padding-right: 30px;
    }
    @media(max-width: 520px){
        padding-top: 25px;
    }
    @media(max-width: 510px){
        padding-left: 20px;
        padding-right: 20px;
    }
`

const PolicyTitleText = styled.h1`
    font-size: 40px;
    font-weight: 700;
    margin-bottom: 22px;
    @media(max-width: 700px){
        font-size: 28px;
    }
    @media(max-width: 520px){
        font-size: 18px;
        margin-bottom: 20px;
    }
`
const ParagraphWrapper = styled.div`
    margin-bottom: 20px;
    @media(max-width: 520px){
        
        margin-bottom: 5px;
    }
    
`
const SecondSizeTypeText = styled.p`
    font-size: 24px;
    font-weight: 500;
    margin-bottom: 18px;
    @media(max-width: 520px){
        font-size: 10px;
    }
    @media(max-width: 520px){
        margin-bottom: 5px;
    }
   
    
`
const ThirdSizeTypeText = styled.p`
    font-size: 20px;
    font-weight: 400;
    margin-left: 7px;
    @media(max-width: 700px){
        font-size: 16px;
    }
    @media(max-width: 520px){
        font-size: 9px;
    }
    
`

const ParagraphOptionsList = styled.ul`
    font-size: 20px;
    font-weight: 400;
    list-style: disc inside none;
    margin-left: 40px;
    @media(max-width: 520px){
        margin-left: 20px;
    }
    
`
const ParagraphOptionElem = styled.li`
    list-style: none;
    &:before{
        content:"·";
        font-size: 40px;
        vertical-align: middle;
        line-height: 10px;
    }
    @media(max-width: 700px){
        font-size: 16px;
    }
    @media(max-width: 520px){
        font-size: 9px;
        &:before{
            font-size: 20px;
        }
    }
    
`

const UnderlineTextLink = styled.a`
    text-decoration: underline;
    color: black;
    font-family: 'Muller';
    
`



export default PolicyPage;