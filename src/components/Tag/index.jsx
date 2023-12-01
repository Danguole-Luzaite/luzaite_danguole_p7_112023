import styled from "styled-components";

const StyledTag = styled.li`
  background-color: #ff6060;
  border-radius: 10px;
  min-height: 25px;
  min-width: 115px;
  text-align: center;
  margin: 10px 0;
  margin-right: 20px;
    @media (max-width: 600px) {
      margin-right: 10px;
      max-height: 20px;
      max-width: 90px;
      font-size: 14px;
      font-weight: 500;
    }
`;

const StyledTagText = styled.p`
  color: #ffffff;
  font-size: 0.95em;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
  padding: 5px 10px;
    @media (max-width: 600px) {
      line-height: 17px;
      padding: 5px 5px;
    }
`;

function Tag({tags}) {

  //console.log("TAGS", tags)
  return(
    tags?.map((tags, index)=> (
      <StyledTag key={index}>
        <StyledTagText>{tags}</StyledTagText>
      </StyledTag>
    ))
  )
};

export default Tag