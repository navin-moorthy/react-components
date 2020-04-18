/** @jsx jsx */
import { useColorMode, Box, Link } from "@chakra-ui/core";
import { jsx } from "@emotion/core";
import NextLink from "next/link";

const LogoSvg = props => {
  const { colorMode } = useColorMode();

  return (
    <Box
      as="svg"
      height="8"
      width="auto"
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g fill-rule="evenodd">
        <path
          fill="#fc04bc"
          d="M294.63 2.46c-8.57 1.2-15.06 5.27-18.99 11.89-1.5 2.53-45.16 89.8-53.13 106.2-19.14 39.4-24.28 51.63-23.8 56.67 1.02 10.77 8.3 19.43 18.53 22.04 4.61 1.18 155.47 1.16 160-.02 9.72-2.53 16.28-9.67 18.2-19.8 1.2-6.32-1.3-12.82-19.7-50.92-6.5-13.48-55.07-110.28-56.99-113.6-4.87-8.4-15.15-13.72-24.12-12.46M23.78 3.54C13.26 5.46 7.55 9.98 5.28 18.19c-.87 3.16-1.02 160.9-.16 165.14 2.07 10.14 9.6 15.28 23.95 16.37 14.23 1.08 22.28-3.58 24.9-14.4.54-2.24.64-7.36.82-45.2L55 97.45l7.78 9.84a45463 45463 0 0061.62 78c9.32 11.73 13.91 14.4 24.86 14.45 15.2.07 23.98-4.65 27.09-14.54l.87-2.78-.07-80.23c-.07-71.4-.14-80.5-.66-82.78-2.45-10.74-11.84-16.43-27.16-16.44-11.77 0-18.62 4.88-21.07 15.04-.56 2.28-.64 7.06-.83 45.07l-.2 42.52-6.48-8.26A166273.58 166273.58 0 0066.12 27.6C52.52 10.2 51.32 8.94 45.35 6.08c-6.22-2.99-14.07-3.91-21.57-2.54m274.56 81c.59 1.27 3.97 8.23 7.52 15.46 3.54 7.23 7.24 14.81 8.22 16.85.97 2.04 4.71 9.7 8.31 17.04 8.12 16.53 7.74 15.73 7.53 15.94-.1.1-15 .13-33.13.08l-32.96-.1 3.73-7.6a44403.6 44403.6 0 0119.01-38.88 2775.5 2775.5 0 008.24-16.94c2.32-4.89 2.17-4.8 3.53-1.85"
        />
        <path
          fill="#43fc04"
          d="M33.7 202.25c-.7.17-1.9.4-2.64.49-.75.1-2.2.6-3.24 1.13-1.04.53-1.98.95-2.08.94-2.97-.2-10.62 8.53-12.04 13.72-.25.91-.63 2.04-.85 2.5-.97 2.06-.42 11.55.83 14.38.4.9.64 1.63.55 1.63-.3 0 1.22 2.74 2.38 4.26 3.32 4.37 4.28 5.1 15.3 11.6 4.06 2.4 7.7 4.52 10.55 6.14 1.4.8 2.62 1.57 2.73 1.71.1.15 1.26.8 2.59 1.47a17.5 17.5 0 012.59 1.47c.1.14 1.32.92 2.7 1.71 6.63 3.83 7.94 4.58 12 6.89 2.41 1.36 4.87 2.78 5.48 3.15 3.78 2.3 6.61 3.95 8.77 5.09 1.36.72 2.58 1.47 2.7 1.67.13.2 2.35 1.48 4.94 2.84 2.59 1.36 4.88 2.67 5.08 2.92.2.25 1.46 1 2.78 1.67 1.32.66 2.49 1.32 2.59 1.46.1.14 1.1.76 2.22 1.37 1.12.61 2.87 1.63 3.89 2.25 1.02.63 3.57 2.12 5.67 3.3l6.38 3.66 6.07 3.5c1.93 1.12 3.45 2.09 3.38 2.16-.12.12-3.39 1.35-7.09 2.66-1.03.37-2.6 1.04-3.47 1.48-.87.45-1.9.87-2.28.94-.38.08-1.65.54-2.83 1.04-1.17.5-3.46 1.43-5.1 2.1-1.62.65-4.05 1.67-5.4 2.26-1.33.6-2.6 1.08-2.81 1.08-.4 0-4.19 1.54-8.04 3.28-1.2.54-2.28.98-2.4.98-.21 0-2.07.73-7.08 2.77a1054.53 1054.53 0 01-7.4 2.98l-4.82 1.93c-1.53.6-3.86 1.55-5.19 2.12-3.41 1.47-6.24 2.6-7.96 3.2-.82.3-2.4.92-3.52 1.41-3.3 1.44-7.22 2.98-7.32 2.89-.05-.05-1.26.5-2.68 1.22-1.43.71-2.6 1.23-2.6 1.14 0-.1-1.1.33-2.47.95a29.71 29.71 0 01-3.05 1.25c-.32.07-2.42.9-4.66 1.85-2.24.95-5.07 2.11-6.3 2.58-8 3.05-12.94 7.17-15.96 13.27-6.38 12.93-.38 29.38 12.45 34.14.91.34 1.96.77 2.33.97 1.3.7 6.83 1.16 8.24.7.72-.25 1.68-.48 2.13-.54 1.26-.15 6.88-2.01 13.4-4.44l4.08-1.5c1.02-.36 2.94-1.07 4.26-1.58l4.35-1.62a75.99 75.99 0 004.03-1.62c1.15-.5 2.27-.92 2.5-.92.23 0 1.46-.5 2.73-1.1 1.28-.6 2.32-1.02 2.32-.94 0 .08 1.1-.34 2.44-.94a17.7 17.7 0 012.84-1.1c.22 0 1.5-.48 2.84-1.07 1.34-.59 3.77-1.6 5.4-2.25l5.74-2.3c1.52-.6 3.86-1.57 5.18-2.14 1.33-.57 3.66-1.55 5.19-2.16 4.63-1.86 9.35-3.79 11.1-4.53 1.7-.71 2.8-1.16 11.86-4.81 2.99-1.21 6.9-2.9 9.54-4.11a15.55 15.55 0 012.75-1.07c.44 0 3.79-1.41 8-3.37a15.5 15.5 0 012.74-1.08c.24 0 1.6-.51 3.05-1.14 4.83-2.12 7.42-3.2 10.4-4.4a225.3 225.3 0 005.37-2.23c1.33-.58 3.74-1.58 5.37-2.23a290.5 290.5 0 0010.4-4.4 24.48 24.48 0 012.92-1.15c.36 0 4.35-1.76 11.9-5.26 1.58-.73 5.94-4.85 7.09-6.7a42.9 42.9 0 011.75-2.64c.3-.4.83-1.56 1.17-2.6.34-1.03.76-2.07.95-2.3.19-.24.5-2 .7-3.9 1.2-11.63-3.39-20.23-14.1-26.38-3.83-2.2-7.19-4.23-7.64-4.62-.23-.2-1.48-.9-2.78-1.55a14.37 14.37 0 01-2.56-1.5c-.22-.33-3.93-2.5-7.83-4.56a13.97 13.97 0 01-2.7-1.7c-.14-.2-1.28-.9-2.53-1.53a15.2 15.2 0 01-2.48-1.43c-.1-.15-1.18-.8-2.4-1.45a45.2 45.2 0 01-3.34-1.94c-.61-.41-2.94-1.8-5.18-3.1a89.2 89.2 0 01-4.45-2.67c-.2-.17-2.54-1.55-5.18-3.06a112.86 112.86 0 01-5.93-3.55 29.6 29.6 0 00-2.96-1.78 109.3 109.3 0 01-5.19-3.04 140.14 140.14 0 00-5-2.98c-.91-.5-3-1.72-4.63-2.73-1.63-1-4.04-2.42-5.37-3.15a295.53 295.53 0 01-11.66-6.8c-.62-.41-2.2-1.35-3.52-2.08a331.1 331.1 0 01-9.3-5.42c-3.7-2.2-9.37-5.4-11.54-6.5a25.16 25.16 0 01-2.68-1.5c-.2-.18-1.45-.9-2.77-1.6a36.96 36.96 0 01-2.78-1.58c-.59-.48-9.81-5.43-15.38-8.26a93.5 93.5 0 01-5.18-2.76c-.1-.1-.77-.43-1.48-.71-.72-.28-2.13-.87-3.15-1.32-2.08-.9-6.65-1.37-8.7-.88m183.7 138.12c-14.28 1.41-21.12 9.57-21.1 25.19 0 15.68 6.42 23.15 21.02 24.46 8.51.76 156.4.27 159.52-.54 11.5-2.96 16.64-10.47 16.66-24.3.02-13.89-5.38-21.5-17.21-24.3-2.96-.7-152.15-1.18-158.9-.51"
        />
      </g>
    </Box>
  );
};

const Logo = props => (
  <NextLink href="/" passHref>
    <Link
      borderRadius="md"
      display="block"
      aria-label="Chakra UI, Back to homepage"
      {...props}
    >
      <LogoSvg />
    </Link>
  </NextLink>
);

export default Logo;
