import remarkGfm from "remark-gfm";
import remarkGemoji from "remark-gemoji";
import {Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import {oneDark} from "react-syntax-highlighter/dist/cjs/styles/prism";
import ReactMarkdown from "react-markdown";
import style from './Markdown.module.css';

export const Markdown = (props) => {
  const {
    content
  } = props;

  // Uses the react syntax highlighter in extended code blocks
  const code = ({node, inline, className, children, ...props}) => {
    const match = /language-(\w+)/.exec(className || '')
    return !inline && match ? (
        <SyntaxHighlighter
            children={String(children).replace(/\n$/, '')}
            style={oneDark}
            language={match[1]}
            PreTag="div"
            {...props}
        />
    ) : (
        <code className={className} {...props}>
          {children}
        </code>
    )
  }

  return (
      <ReactMarkdown
          children={content}
          className={style.reactMarkDown}
          remarkPlugins={[
              remarkGfm,
              remarkGemoji
          ]}
          components={{
            code
          }}
      />
  );
}