import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneLight, oneDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import sql from "react-syntax-highlighter/dist/cjs/languages/prism/sql";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import rangeParser from 'parse-numeric-range'
import rehypeRaw from "rehype-raw";
import {alpha, css, useTheme} from "@mui/material";
import {Global} from "@emotion/react";

// Setting up the supported languages
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('python', python)

export const Markdown = (props) => {
  const {
    content
  } = props;

  const theme = useTheme();

  // The syntax highlighter
  const MarkdownComponents = {
    code({node, inline, className, ...props}) {

      const syntaxTheme = oneDark;

      const match = /language-(\w+)/.exec(className || '')
      const hasMeta = node?.data?.meta

      const applyHighlights = (applyHighlights) => {
        if (hasMeta) {
          const RE = /{([\d,-]+)}/
          const metadata = node.data.meta?.replace(/\s/g, '')
          const strlineNumbers = RE?.test(metadata)
            ? RE?.exec(metadata)[1]
            : '0'
          const highlight = rangeParser(strlineNumbers)
          const data = highlight.includes(applyHighlights)
            ? 'highlight'
            : null
          return {data}
        } else {
          return {}
        }
      }

      return match ? (
        <SyntaxHighlighter
          style={syntaxTheme}
          language={match[1]}
          PreTag="div"
          className="codeStyle"
          showLineNumbers={true}
          wrapLines={hasMeta}
          useInlineStyles={true}
          lineProps={applyHighlights}
          {...props}
        />
      ) : (
        <code className={className} {...props} />
      )
    },
  }

  return (
    <>
      <Global
        styles={css`
          .post *:not(span) {
            font-family: "PT Serif", "Times New Roman", Georgia, Cambria, Times, serif;
            color: ${theme.palette.text.main};
          }

          .post h1 {
            font-family: "Raleway", sans-serif;
            font-weight: bolder;
            font-size: 2.6em;
          }

          .post h1, .post h2, .post h3, .post h4, .post h5, .post h6 {
            margin: 1em 0;
          }

          .post p, li, table {
            font-size: 1.1em;
            line-height: 1.6em;
            opacity: 0.8;
          }

          .post table {
            border: 2px solid ${alpha(theme.palette.text.main, 0.3)};
            border-radius: 0.5em;
            padding: 0.5em;
            margin-top: 1.5em;
            margin-bottom: 1.5em;
          }

          .post table th {
            border-bottom: 2px solid ${alpha(theme.palette.text.main, 0.3)};
          }

          .post table td {
            padding-top: 0.5em;
            padding-right: 2.5em;
          }

          .post  hr {
            display: block;
            height: 1px;
            border: 0;
            border-top: 1px solid ${alpha(theme.palette.text.main, 0.15)};
            margin: 2em 0;
            padding: 0;
          }

          .post span[data="highlight"] {
            background-color: ${alpha(theme.palette.secondary.main, 0.2)};
          }

          .post code {
            transform: translateZ(0);
            min-width: 100%;
            float: left;
          }

          .post code > span[data="highlight"] {
            display: block;
            border-left: 4px solid ${theme.palette.secondary.main};
          }

          .post mark {
            padding: 0 0.5em;
            border-radius: 0.3em;
          }
        `}
      />
      <ReactMarkdown
        components={MarkdownComponents}
        className="post"
        remarkPlugins={[
          remarkGfm,
          remarkGemoji
        ]}
        rehypePlugins={[
          rehypeRaw
        ]}
      >
        {content}
      </ReactMarkdown>
    </>
  );
}