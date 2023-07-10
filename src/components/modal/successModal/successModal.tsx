import styled from "styled-components";


interface Props{
    changeModalSuccessFlag: (flag: boolean) => void;
    changeModalFlag: (flag: boolean) => void;
}


function SuccessModal({changeModalSuccessFlag, changeModalFlag}:Props){


    function closeSuccessModal(){
        changeModalFlag(false);
        changeModalSuccessFlag(false);
    }



    return(
        <>
            <Overlay onClick={closeSuccessModal}/>
            <ExternalWrapper>
                <MainContent>
                    <ModalHeader>
                        <CloseIcon onClick={closeSuccessModal} src={"./images/closeIcon.svg"}/>
                    </ModalHeader>
                    <SuccessImageWrapper>
                        <SuccessImage src={"./images/successSendIcon.svg"}/>
                    </SuccessImageWrapper>
                    <SuccessTextWrapper>
                        <SuccessText>
                            Спасибо, что отправили заявку!<br/>
                            Мы с вами свяжемся в ближайшее время
                        </SuccessText>
                    </SuccessTextWrapper>
                </MainContent>
            </ExternalWrapper>
        </>
    )
}

const ExternalWrapper = styled.div`
    position: fixed;
    left:50%;
    top:50%;
    transform:translate(-50%,-50%);
    padding: 40px 30px;
    border-radius: 20px;
    background-color: white;
    z-index: 5;
    font-family: 'Muller';
    z-index: 4;
    width: 500px;
    @media(max-width: 980px){
        width: 450px;
    }
    @media(max-width: 500px){
        width: 350px;
    }
    @media(max-width: 350px){
        width: 300px;
    }
`

const Overlay = styled.div`
    position: fixed;
    width: 100%;
    height: 100vh;
    top: 0;
    left: 0;
    background-color: gray;
    opacity: 0.5;
    z-index: 3;
`

const MainContent = styled.div`
    
`

const ModalHeader = styled.div`
    display: flex;
    justify-content: flex-end;
`
const CloseIcon = styled.img`
    cursor: pointer;
`
const SuccessImageWrapper = styled.div`
    display: flex;
    justify-content: center;
`

const SuccessImage = styled.img`
    width: 150px;
`
const SuccessTextWrapper = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 40px;
`

const SuccessText = styled.p`
    text-align: center;
    font-size: 32px;
    font-weight: 700;
    @media(max-width: 500px){
        font-size: 15px;
    }
`

export default SuccessModal;