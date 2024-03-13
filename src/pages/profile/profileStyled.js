import styled from "styled-components";

export const ProfileContainer = styled.h1`
    width: 85%;
    padding: 80px 50px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
    background-color: #0f0f0fc9;
    margin: auto;
`;

export const ProfileHeader = styled.header`
    width: 100%;
    margin-top: 2%;
    display: flex;
    justify-content: space-between;
    align-items: flex-end;
    position: relative;
    border-radius: 10px;
    z-index: 0;
    background-color: #0f0f0f;
    box-shadow: 5px 20px 15px rgba(0, 0, 0, 0.70), 5px 12px 10px rgba(0, 0, 0, 0.70);
`;

export const IconP = styled.i`
    position: absolute;
    top: 1rem;
    right: 1rem;
    color: aquamarine;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        color: blueviolet;
    }
`;

export const ImgP = styled.img`
    width: 20vw;
    border-radius: 50%;
    border: 10px solid #0f0f0f;
    object-fit: cover;
    object-position: center;
`;

export const BackgroundP = styled.img`
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    object-fit: cover;
    width: 100%;
    height: 55%;
    z-index: -1;
    border-radius: 10px 10px 0 0;
`;

export const UserP = styled.div`
    padding: 2rem;
    cursor: pointer;

    h2 {
        font-size: 3rem;
        border-bottom: 1px solid;
    }
    h3 {
        text-align: center;
        font-size: 1.5rem;
        color: blueviolet;
    }
`;

export const AddNews = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    color: aquamarine;
    cursor: pointer;
    transition: all 0.2s ease-in-out;

    :hover {
        color: blueviolet;
    }
`;

export const ImgZoro = styled.img`
    position: absolute;
    left: -6rem;
    width: 320px;
    bottom: 10.6rem;
`; 
