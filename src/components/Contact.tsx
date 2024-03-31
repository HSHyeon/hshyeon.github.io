import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer>
      <TextContainer></TextContainer>
      <p>Copyright 2024. Sohyeon. All rights reserved.</p>
    </ContactContainer>
  );
}
const ContactContainer = styled.div`
  height: 200px;
  background-color: #dcdcdc;
`;
const TextContainer = styled.div``;
export default Contact;
