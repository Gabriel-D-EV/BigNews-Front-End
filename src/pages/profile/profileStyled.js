import styled from "styled-components";

export const ProfileContainer = styled.h1`
   
    padding: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-top: 100px;
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
    box-shadow: 5px 20px 15px rgba(0, 0, 0, 0.70), 5px 12px 30px rgba(0, 0, 0, 0.70);
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
    width: 300px;
    height: 300px;
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
    height: 60%;
    z-index: -1;
    border-radius: 10px 10px 0 0;
`;

export const UserP = styled.div`
    padding: 4rem;
    cursor: pointer;

    h2 {
        font-size: 3rem;
    }
    h3 {
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

export const ImgLuffyg5 = styled.img`
    position: absolute;
    left: 40%;
    width: 25%;
    top: 48%;
`; 

export const ProfileNews = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 2rem;
    margin: 1rem, auto;
    flex-wrap: wrap;
    padding: 80px 20px;

    h2 {
        grid-column: 1 / -1;
        text-align: center;
        font-weight: bold;
        margin-top: 2rem;
        color: aquamarine;
    }
`;

export const ImgLuffy = styled.img`
    position: absolute;
    width: 15%;
    left: 12%;
    bottom: -30%;
`;
