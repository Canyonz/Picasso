import { FixedSizeList as List, ListOnItemsRenderedProps } from "react-window"
import { useEffect, useRef, useState } from "react"
import { useGetPostsQuery } from "../../model/api/fetchPostsList"
import { Post } from "../../model/types/post"
import { PostListItem } from "../postListItem/PostListItem"
import AutoSizer from "react-virtualized-auto-sizer"

interface PostListProps {
  className?: string
}

export const PostList = ({ className }: PostListProps) => {
  const [posts, setPosts] = useState<Post[]>([])
  const [page, setPage] = useState(1)

  const inited = useRef(false)

  const limit = 6

  const { data = [], isLoading, isFetching } = useGetPostsQuery({ page, limit })

  const onLoadNext = () => {
    if (!isFetching && data.length >= limit) {
      setPage(prevPage => prevPage + 1)
    }
  }

  const onItemsRendered = ({ visibleStopIndex }: ListOnItemsRenderedProps) => {
    if (visibleStopIndex >= posts.length - 1) {
      onLoadNext()
    }
  };

  useEffect(() => {
    if (!data.length) return

    if (!inited.current) {
      setPosts(data)
      inited.current = true
    } else {
      setPosts(prev => [...prev, ...data])
    }
  }, [data])

  if (isLoading) return <div>...</div>

  return (
    <AutoSizer className={className}>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={posts.length}
          itemSize={180}
          width={width}
          onItemsRendered={onItemsRendered}
        >
          {({ index, style }) => (
            <div key={index} style={style}>
              <PostListItem post={posts[index]} />
            </div>
          )}
        </List>
      )}
    </AutoSizer>
  )
}
