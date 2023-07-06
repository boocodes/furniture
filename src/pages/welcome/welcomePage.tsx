import styled from "styled-components";
import {useEffect, useState} from "react";
import {SuccessModal,
        UserFormModal,
        Header,
        Offer,
} from '../../';

interface Props{

}


function WelcomePage({}:Props){

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



    console.log(modalWindowFlag)


    return (
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

            <ExternalWrapper windowWidth={windowWidth}>
                <Header changeModalFlag={setModalWindowFlag} windowWidth={windowWidth}/>
                <MainContent>
                    <Offer windowWidth={windowWidth} changeModalFlag={setModalWindowFlag}/>
                </MainContent>

            </ExternalWrapper>
        </>
    )
}

interface IExternalWrapper{
    windowWidth: number;
}

const ExternalWrapper = styled.div<IExternalWrapper>`
    background-color: #151922;
    background: url('./images/${props=> props.windowWidth <= 600 ? "mobile" : props.windowWidth <= 1024 ? "tablet" : props.windowWidth <= 1440 ? "laptop" : "desktop"}Background.png');
    width: 100vw;
    min-height: 100vh;
    position: relative;
    background-position: 50% 0%;
    background-size: 100%;
    background-repeat: no-repeat;
    @media(max-width: 1650px){
        background-position: 40% 10%;
    }
    @media(max-width: 1200px){
        background-position: 75% 10%;
    }
    @media(max-width: 900px){
        background-position: 0% 10%;
    }    
    @media(max-width: 600px){
        background-position: 0% 40%;
    }  
    @media(max-width: 530px){
        background-position: 0% 80%;
    }
    @media(max-width: 500px){
        background-position: 30% 95%;
    }      
    @media(max-width: 400px){
        background-position: 30% 100%;
    }  
    
`
const MainContent = styled.div`
    padding-left: 204px;
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
    @media(max-width: 510px){
        padding-left: 20px;
        padding-right: 20px;
    }
`



export default WelcomePage;