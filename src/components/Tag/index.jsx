import styled from "styled-components";

const StyledTag = styled.li`
  background-color: #ff6060;
  border-radius: 10px;
  min-height: 25px;
  min-width: 115px;
  text-align: center;
  margin: 10px 0;
  margin-right: 20px;
`;

const StyledTagText = styled.p`
  color: #ffffff;
  font-size: 0.95em;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
  padding: 5px 10px;
`;

function Tag({tags}) {

  //console.log("TAGS", tags)
  return(
    tags?.map((tags)=> (
      <StyledTag >
        <StyledTagText>{tags}</StyledTagText>
      </StyledTag>
    ))
  )
};

export default Tag