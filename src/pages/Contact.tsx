import styled from "styled-components";

function Contact() {
  return (
    <ContactContainer>
      <FileContainer>
        <a href="./sohyeon_resume.pdf" className="download" download>
          Resume
        </a>
        |
        <a href="./sohyeon_portfolio.pdf" className="download" download>
          Portfolio
        </a>
      </FileContainer>
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
  background-color: #ebebeb;
`;
const FileContainer = styled.div`
  display: flex;
  margin-bottom: 10px;
  gap: 10px;
  font-weight: 500;
  font-size: 1rem;
  a {
    color: #6a1fc0;
  }
`;
export default Contact;
