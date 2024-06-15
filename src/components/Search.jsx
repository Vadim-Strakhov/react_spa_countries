import styled from "styled-components";
import { IoSearch } from "react-icons/io5";

const InputContainer = styled.label`
  background-color: var(--colors-ui-base);
  padding: 1rem 2rem;
  display: flex;
  align-items: center;

  border-radius: var(--radius);
  box-shadow: var(--shadow);
  width: 100%;
  margin-bottom: 1rem;

  @media (min-width: 767px) {
    margin-bottom: 0;
    width: 280px;
  }
`;

const StyledIoSearch = styled(IoSearch)`
  font-size: 14px;
  min-width: 14px;
  color: var(--colors-text);
`;

const Input = styled.input.attrs({
  type: "search",
  placeholder: "Search for a country...",
})`
  margin-left: 2rem;
  border: none;
  outline: none;
  color: var(--colors-text);
  background-color: var(--colors-ui-base);
`;

const Search = ({ search, setSearch }) => {
  return (
    <InputContainer>
      <StyledIoSearch />
      <Input onChange={(e) => setSearch(e.target.value)} value={search} />
    </InputContainer>
  );
};
export default Search;
