import styled from "styled-components";
import {Button} from '../../../';

interface Props{
    changeModalFlag: (flag: boolean) => void;

}

function OfferBanner({changeModalFlag}:Props){

    return(
        <ExternalWrapper>
            <TitleText>
                Ответье на несколько вопросов и получите:
            </TitleText>
            <ElemList>
                <Elem>Бесплатный аудит рекламной компании и сайта</Elem>
                <Elem>Расчет бюджета для эффективной рекламной компании</Elem>
                <Elem>Рекомендации по повышению конверсии</Elem>
            </ElemList>
            <ContactButtonWrapper onClick={()=>changeModalFlag(true)}>
                <Button text={"Получить"}/>
            </ContactButtonWrapper>
        </ExternalWrapper>
    )
}



const ExternalWrapper = styled.div`
    background: linear-gradient(180deg, rgba(255, 255, 255, 0.4) 0%, rgba(255, 255, 255, 0.1) 100%);
    box-shadow: 0px 4px 24px -1px rgba(0, 0, 0, 0.2);
    display: flex;
    flex-direction: column;
    padding: 36px 36px 32px 36px;
    font-family: 'Muller';
    width: 530px;
    color: #5C6D08;
    border-radius: 20px;
    backdrop-filter: blur(2px);
    margin-top: 50px;
    @media(max-width: 1700px){
        margin-top: 50px;
    }
    @media(max-width: 1200px){
        width: 360px;
        padding: 20px 20px 20px 20px;
    }   
    @media(max-width: 850px){
        width: 460px;
        padding: 35px 30px 35px 30px;
    }
    @media(max-width: 700px){
        width: 100%;
        margin-top: 45px;
    }
    @media(max-width: 540px){
        padding: 20px;
    }
    @media(max-width: 510px){
        padding: 15px;
        width: 290px;
        border-radius: 16px;
    }
    @media(max-width: 460px){
        margin-top: 20px;
        padding: 20px 25px 18px 25px;
    }
    @media(max-width: 400px){
        width: 100%;
        padding: 12px;
    }
    @media(max-width: 360px){
        margin-top: 20px;
        
        padding: 18px 12px 18px 12px;
    }
`

const TitleText = styled.p`
    font-size: 32px;
    font-weight: 500;
    @media(max-width: 1440px){
        font-size: 28px;
    }
    @media(max-width: 1200px){
        font-size: 20px;
    }
    @media(max-width: 850px){
        font-size: 26px;
        width: 328px;
    }
    @media(max-width: 700px){
        width: 320px;
    }
    @media(max-width: 540px){
        font-size: 40px;
        width: 100%;
    }
    @media(max-width: 530px){
        font-size: 22px;
        
    }
    
`
const ElemList = styled.ul`
    list-style-type: decimal;
    margin: 25px 0px 24px 25px;
    @media(max-width: 1440px){
        margin: 25px 0px 20px 30px;
    }
    @media(max-width: 1200px){
        margin: 20px 0px 20px 20px;
    }
    @media(max-width: 850px){
        margin: 20px 0px 20px 25px;
    }
    @media(max-width: 540px){
        margin: 20px 0px 20px 40px;
    }
    @media(max-width: 510px){
        margin: 16px 0px 16px 20px;
    }
    
    
    
`
const Elem = styled.li`
    font-size: 20px;
    font-weight: 400;
    margin-bottom: 20px;
    &:last-child{
        margin-bottom: 0px;
    }
    @media(max-width: 1440px){
        font-size: 18px;
        line-height: 1.2;
        margin-bottom: 10px;
    }
    @media(max-width: 1200px){
        font-size: 14px;
        line-height: 1;
    }
    @media(max-width: 850px){
        font-size: 18px;
        width: 365px;
    }
    @media(max-width: 540px){
        width: 95%;
        font-size: 24px;
        
        margin-bottom: 15px;
    }
    @media(max-width: 530px){
        font-size: 14px;
    }
`
const ContactButtonWrapper = styled.div`
    position: relative;
    width: 100%;
   
`




export default OfferBanner;