import styled from "styled-components";
// import PropTypes from "prop-types";
// import data from "../../data/logements.json";

const StyledTag = styled.div`
  background-color: #ff6060;
  border-radius: 10px;
  min-height: 25px;
  min-width: 115px;
  text-align: center;
  margin: 10px 0;
`;

const StyledTagText = styled.p`
  color: #ffffff;
  font-size: 1em;
  font-weight: 500;
  letter-spacing: 0;
  line-height: 20px;
  margin: 0;
  padding: 2px 10px;
`;

// { StyledTag, text = "data.tags" }
function Tag() {
  return(
    <StyledTag>
      {/* {data.text} */}
      <StyledTagText>text</StyledTagText>
    </StyledTag>
  )
};

// Tag.propTypes = {
//   text: PropTypes.string,
// };

export default Tag