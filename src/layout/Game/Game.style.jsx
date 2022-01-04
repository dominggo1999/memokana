import tw, { styled } from 'twin.macro';

export const GameContainer = styled.div`
  ${tw`
    w-full 
    h-screen 
    min-h-[600px] 
    bg-primary 
    text-accent 
    flex 
    items-center 
    justify-center
  `}
`;

export const Main = styled.div`
  ${tw`
    h-full 
    flex  
    flex-col 
    justify-center
  `}
`;

export const WordWrapper = styled.div`
  ${tw`
    flex 
    items-center 
    justify-center
    flex-col 
    mb-10
  `}
`;

export const Word = styled.p`
  ${tw`
    text-5xl
  `}
`;

export const InputField = styled.div`
  ${tw`
  `}

  input {
    ${tw`
      bg-transparent 
      text-accent
      rounded-2xl
      px-5 
      py-2 
      outline-none 
      text-4xl 
      text-center
    `}
  }

  input::placeholder{
    ${tw`
      text-accent
    `}
  }
`;
