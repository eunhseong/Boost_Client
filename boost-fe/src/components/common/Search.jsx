import React, { useState,useEffect } from "react";
import search from "../../assets/search.svg";
import * as S from "./Styled";

const Search = () => {
    const [isPublic, setIsPublic] = useState(true);  // 공개 상태
    const [keyword, setKeyword] = useState("");      // 검색어 상태
  
    const handleKeywordChange = (e) => setKeyword(e.target.value);
  
    const handleKeyword = (e) => {
      if (e.key === "Enter") {
        console.log("검색어:", keyword);
      }
    };
  
  return (
    <S.ButtonContainer>
      <S.ToggleButton active={isPublic} onClick={() => setIsPublic(true)}>
        공개
      </S.ToggleButton>
      <S.ToggleButton active={!isPublic} onClick={() => setIsPublic(false)}>
        비공개
      </S.ToggleButton>

      <S.SearchContainer>
        <S.SearchBar
          value={keyword}
          onChange={handleKeywordChange}
          placeholder="검색어를 입력하세요"
          onKeyUp={handleKeyword}
        />
        <S.Icon src={search} alt="검색" />
      </S.SearchContainer>

      <S.Dropdown>
        <option>최신순</option>
        <option>댓글순</option>
        <option>공감순</option>
      </S.Dropdown>
    </S.ButtonContainer>
  );
};

export default Search;
