import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer>
      <p>Contact: hshyeon86@gmail.com</p>
      <p>Copyright 2024. Sohyeon. All rights reserved.</p>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  height: 200px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  color: #7e7e7e;
  display: flex;
  flex-direction: column;
  background-color: #cdcdcd;
`;

export default Contact;
