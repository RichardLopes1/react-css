import styled from "styled-components";

export const HeaderCabec = styled.header`

    background-color: royalblue;
    padding: 20px;
    width: 100%;
    min-height: 10vh;
    display: flex;
    justify-content: center;
    align-items: center;

    h1{
        color: #fff;
        text-align: center;
    }
`

export const FooterRod = styled.footer`

    width: 100vw;
    min-height: 8vh;
    background-color: #222;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: #fff;
        text-align: center;
    }
`

export const MainCorpo = styled.main`
    flex-grow:1;
    display: flex;
    justify-content: space-evenly;
    padding: 20px;
    gap: 10px;
`

export const SectionMat1 = styled.section`
    width: 350px;
    min-height: 300px;
    padding: 10px;
    border: 1px solid black;

    h2{
        text-align: center;
    }

    p{
        text-align: justify;
    }
`

export const SectionMat2 = styled.section`
    width: 350px;
    flex-grow: 1;
    min-height: 300px;
    padding: 10px;
    border: 1px solid black;

    h2{
        text-align: center;
    }

    form{
        border: 1px solid orange;
        width: 60%;
        padding: 10px;
        margin: auto;
    }

        input{
            padding: 10px;
            border-radius: 5px;
            margin-right: 10%;
        }
`