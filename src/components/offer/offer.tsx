import styled from "styled-components";
import {OfferBanner} from '../../';



interface Props{
    changeModalFlag: (flag: boolean) => void;
    windowWidth: number;
}


function Offer({changeModalFlag, windowWidth}:Props){
    return(
        <ExternalWrapper>
            <OfferTitle>
                Нужны заявки
                <br/>
                для
                мебельного магазина?
            </OfferTitle>
            <OfferSubTitle>
                Первые обращения через 7 дней
            </OfferSubTitle>
            <OfferBanner changeModalFlag={changeModalFlag}/>

        </ExternalWrapper>
    )
}


const ExternalWrapper = styled.div`
    font-family: 'Muller';
    color: #5C6D08;
    margin-top: 80px;
    padding-bottom: 20px;
    @media(max-width: 850px){
        margin-top: 60px;
    }
    @media(max-width: 1024px){
        margin-top: 40px;
    }
    @media(max-width: 540px){
        margin-top: 0px;
    }
    
    
`

const OfferTitle = styled.h1`
    font-size: 74px;
    font-weight: 500;
    margin-bottom: 30px;
    @media(max-width: 1700px){
        font-size: 56px;
        margin-bottom: 20px;
    }
    @media(max-width: 1200px){
        font-size: 42px;
    }
    @media(max-width: 540px){
        font-size: 60px;
        margin-bottom: 10px;
        
    }
    
    @media(max-width: 530px){
        font-size: 34px;
    }
`
const OfferSubTitle = styled.h3`
    font-size: 42px;
    font-weight: 400;
    @media(max-width: 1700px){
        font-size: 32px;
    }
    @media(max-width: 1200px){
        font-size: 24px;
    }
    @media(max-width: 540px){
        font-size: 30px;
    }
    @media(max-width: 530px){
        font-size: 20px;
    }
`


export default Offer;