import styled from "styled-components";
import { useMoveBack } from "../hooks/useMoveBack.jsx";
import Heading from "../ui/Heading.jsx";

const StyledPageNotFound = styled.main`
  height: 100vh;
  background-color: var(--color-grey-50);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 4.8rem;
`;

const Box = styled.div`
  /* box */
  background-color: var(--color-grey-0);
  border: 1px solid var(--color-grey-100);
  border-radius: var(--border-radius-md);

  padding: 4.8rem;
  flex: 0 1 96rem;
  text-align: center;

  & h1 {
    margin-bottom: 3.2rem;
  }
`;

function PageNotFound() {
  const moveBack = useMoveBack();

  return (
    // <StyledPageNotFound>
    //   <Box>
    //     <Heading as="h1">
    //       The page you are looking for could not be found 😢
    //     </Heading>
    //     <button onClick={moveBack} size="large">
    //       &larr; Go back
    //     </button>
    //   </Box>
    // </StyledPageNotFound>

    <main className="p-100 flex h-screen w-full items-center justify-center ">
      <div className="flex-grow-1 flex-shrink-0 basis-[96rem] flex-col gap-8 rounded-lg border-2 border-solid bg-red-50 p-16 text-center">
        <Heading as="h2">
          The page you are looking for could not be found 😢
        </Heading>
        <button onClick={moveBack} size="large">
          &larr; Go back
        </button>
      </div>
    </main>
  );
}

export default PageNotFound;
