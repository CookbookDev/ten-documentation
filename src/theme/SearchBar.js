import React from 'react';
import SearchBar from '@theme-original/SearchBar';
import AskCookbook from '@cookbookdev/docsbot/react'
import BrowserOnly from '@docusaurus/BrowserOnly';
/** It's a public API key, so it's safe to expose it here */
const COOKBOOK_PUBLIC_API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiI2NmZhZjQ4ODBkYmQ2MTkwYjgzYTYzMGQiLCJpYXQiOjE3Mjc3MjI2MzIsImV4cCI6MjA0MzI5ODYzMn0.W-VnPX_CatblVmMX2nCDXqRvbi-Y9vDtLk2SbHky0wg";
export default function SearchBarWrapper(props) {
  return (
    <>
      <SearchBar {...props} />
      <BrowserOnly>{() => <AskCookbook apiKey={COOKBOOK_PUBLIC_API_KEY} /> }</BrowserOnly>
    </>
  );
}
