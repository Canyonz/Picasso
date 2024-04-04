import { useGetPostDetailsQuery } from "@/entities/post/model/api/fetchPostsList"
import { PostDetails } from "@/entities/post/ui/postDetails/PostDetails"
import { getRoutePosts } from "@/shared/const/routes"
import { AppLink } from "@/shared/ui/appLink/AppLink"
import { Text } from "@/shared/ui/text/Text"
import { Page } from "@/widgets/page"
import { useParams } from "react-router-dom"

export const PostPage = () => {
  const { id } = useParams<{ id: string }>()

  const { data, isLoading, isSuccess } = useGetPostDetailsQuery(id as string)

  if (isLoading) return <div>...Загрузка</div>

  if (!data && !isSuccess) {
    return (
      <div className="min-h-screen flex flex-col gap-4 justify-center items-center">
        <Text title="Запрашиваемый пост не найден!" size="lg" />
        <AppLink href={getRoutePosts()} text="Назад" size="lg" />
      </div>
    )
  }

  return (
    <Page>
      {data && <PostDetails post={data} />}
    </Page>
  )
}