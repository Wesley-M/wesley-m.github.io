import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import {PrismLight as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneLight} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import style from './Markdown.module.css';
import java from "react-syntax-highlighter/dist/cjs/languages/prism/java";
import sql from "react-syntax-highlighter/dist/cjs/languages/prism/sql";
import python from "react-syntax-highlighter/dist/cjs/languages/prism/python";
import javascript from "react-syntax-highlighter/dist/cjs/languages/prism/javascript";
import rangeParser from 'parse-numeric-range'

// Setting up the supported languages
SyntaxHighlighter.registerLanguage('java', java)
SyntaxHighlighter.registerLanguage('sql', sql)
SyntaxHighlighter.registerLanguage('javascript', javascript)
SyntaxHighlighter.registerLanguage('python', python)

export const Markdown = (props) => {
  const {
    content
  } = props;

  return (
    <ReactMarkdown
      components={MarkdownComponents}
      className={style.reactMarkDown}
      remarkPlugins={[
        remarkGfm,
        remarkGemoji
      ]}
    >
      {content}
    </ReactMarkdown>
  );
}

// The syntax highlighter
const MarkdownComponents = {
  code({ node, inline, className, ...props }) {

    const syntaxTheme = oneLight;

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
        return { data }
      } else {
        return { }
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