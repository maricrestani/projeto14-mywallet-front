import { ThreeDots } from "react-loader-spinner";
import styled from "styled-components";

export default function Loading() {
  return (
    <>
      <Page>
        <ThreeDots color="#FFFFFF" />
      </Page>
    </>
  );
}

const Page = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
