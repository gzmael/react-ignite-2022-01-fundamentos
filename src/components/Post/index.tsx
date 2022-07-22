import dayjs from "dayjs";
import "dayjs/locale/pt-br";
import relativeTime from "dayjs/plugin/relativeTime";
import { nanoid } from "nanoid";
import { LinkMarkdown, ParagraphMarkdown, Post } from '../../utils/posts';
import { Link } from '../atoms/Link';
import { Paragraph } from '../atoms/Paragraph';
import { Avatar } from '../Avatar';
import Comment from '../Comment';
import styles from './Post.module.css';

dayjs.extend(relativeTime)

interface PostProps {
  post: Post
}

interface MarkdownProps {
  item: ParagraphMarkdown | LinkMarkdown
}

const MarkdownItem = ({ item }: MarkdownProps) => {
  if(item.type === 'link') {
    return <Link children={item.children} url={item.url} />
  }

  if(item.type === "paragraph") {
    return <Paragraph children={item.children} />
  }

  return null;
}

const PostItem = ({ post }: PostProps) => {
  
  const publishedDateFormatted = dayjs(post.publishedAt)
    .locale('pt-br')
    .format('d [de] MMMM [às] HH:mm[h]')
  
  const publishedDateRelativeToNow = dayjs(post.publishedAt)
    .locale('pt-br')
    .fromNow()

  return (
    <article className={styles.post}>
      <header>
        <div className={styles.author}>
          <Avatar src={post.author.avatarUrl} />
          <div className={styles.authorInfo}>
            <strong>{post.author.name}</strong>
            <span>{post.author.rule}</span>
          </div>
        </div>

        <time title={publishedDateFormatted} dateTime={post.publishedAt.toUTCString()}>Publicado {publishedDateRelativeToNow}</time>
      </header>

      <div className={styles.content}>
        {post.content.map(item => (
          <MarkdownItem item={item} key={nanoid()} />
        ))}
      </div>

      <form className={styles.commentForm}>
        <strong>Deixe seu feedback</strong>

        <textarea
          placeholder="Deixe um comentário"
        />

        <footer>
          <button type="submit">Publicar</button>
        </footer>
      </form>

      <div className={styles.commentList}>
        <Comment />
        <Comment />
        <Comment />
      </div>
    </article> 
  )
}
export default PostItem
