import styled from 'styled-components';

export const Container = styled.div`
background: rgb(239,248,253);
background: linear-gradient(90deg, rgba(239,248,253,1) 0%, rgba(150,214,242,1) 50%, rgba(150,214,242,1) 100%);
height: 100vh;
display: flex;
justify-content: flex-end;
`;

export const Form = styled.form`
width: 300px;
height: 100%;
display: flex;
justify-content: flex-start;
flex-direction: column;
padding: 20px;
`

export const Title = styled.h1`
color: #2388C5;
font-weight: 400;
`

export const Image = styled.img`
height: 90px;
`

export const FormContainer = styled.div`

height: 500px;
width: 100;
margin-top: 20px;
background-color: rgba(255, 255, 255, 0.5);
border-radius: 10px;
box-shadow: 2px 2px 2px 1px rgba(0, 0, 0, 0.4);
display: flex;
justify-content: flex-start;
align-items: flex-start;
flex-direction: column;
padding: 10px 30px;
;
`

export const Titleform = styled.h5`
font-size: 15px ;
`

export const InputTitle = styled.span`
margin-top :20px;`
export const Input = styled.input`
width: 100%;
height: 25px;
`

export const Button = styled.button`
width:70px ;
margin-top: 10px;
`

export const Link = styled.a`
text-decoration: underline;
color: #2388C5;
margin-top: 10px;
font-size: 12px;
`
export const TitleAdvisement = styled(Titleform)`
margin: 10px 0;
color: #31708f;
`
export const Advisement = styled.div`
margin-top: 10px;
border: 1px solid transparent;
background-color: #d9edf7;
    border-color: #bce8f1;
font-size:13px;
padding: 10px;
color: #31708f;
border-radius: 10px;
`