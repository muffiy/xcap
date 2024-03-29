/* eslint-disable no-param-reassign */
import parse, {
  DOMNode,
  Element,
  HTMLReactParserOptions,
} from 'html-react-parser';
import DOMPurify from 'isomorphic-dompurify';

export const hashCode = (str: string): string => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    const char = str.charCodeAt(i);
    hash = (hash << 5) - hash + char;
    hash &= hash; // Convert to 32bit integer
  }
  return hash.toString();
};

/**
 * sanitize string of HTML & parse it into jsx elements
 * */
export const safelyParseContent = (content: string) => {
  const clean = DOMPurify.sanitize(content);
  const options: HTMLReactParserOptions = {
    replace: (domNode: DOMNode) => {
      const element = domNode as Element;
      if (element.attribs?.href) {
        element.attribs.target = '_blank';
        element.attribs.title = `Opens new tab to ${element.attribs.href}`;
        element.attribs.class = 'external-link';
      }
    },
  };

  const parsed = parse(clean, options);
  return parsed;
};

/**
 * Takes a string of HTML elements, sanitizes it,
 * applies classNames to the elements & returns parsed HTML as
 * `JSX.Element | JSX.Element[] | string` */
export const safelyParseTextForTyping = (
  content: string,
): JSX.Element | JSX.Element[] | string => {
  const clean = DOMPurify.sanitize(content);
  const options = {
    replace: (domNode: DOMNode) => {
      const element = domNode as Element;
      if (element.type === 'tag' && element.children.length > 0) {
        if (element.parent === null) {
          element.attribs.class = 'typing-text';
        }
        if (element.attribs?.href) {
          element.attribs.target = '_blank';
          element.attribs.title = `Opens new tab to ${element.attribs.href}`;
          element.attribs.class = 'external-link';
        }
      }
    },
  };

  const parsed = parse(clean, options);
  return parsed;
};

/**
 * @description Takes a string of HTML elements , sanitizes it,
 * applies some `chakra-ui` classNames to the elements & returns parsed HTML as
 * `JSX.Element | JSX.Element[] | string`
 * I am not using `safelyParseTextForTyping` because that handles the text & classes for the onboarding game
 * @returns `JSX.Element | JSX.Element[] | string`
 * */
export const safelyParseNChakrifyHtml = (
  content: string,
): JSX.Element | JSX.Element[] | string => {
  if (content === '') return '';
  const clean = DOMPurify.sanitize(content);
  const options = {
    replace: (domNode: DOMNode) => {
      const element = domNode as Element;

      if (element.type === 'tag' && element.children.length > 0) {
        if (element.name === 'p') {
          element.attribs.class = 'chakra-text';
        }
        if (
          element.name === 'h1' ||
          element.name === 'h2' ||
          element.name === 'h3' ||
          element.name === 'h4' ||
          element.name === 'h5' ||
          element.name === 'h6'
        ) {
          element.attribs.class = 'chakra-heading';
        }
        if (element.name === 'a') {
          element.attribs.class = 'chakra-link';
        }
        if (element.attribs?.href) {
          element.attribs.target = '_blank';
          element.attribs.title = `Opens new tab to ${element.attribs.href}`;
          element.attribs.class = 'external-link';
        }
      }
    },
  };

  const parsed = parse(clean, options);
  return parsed;
};
