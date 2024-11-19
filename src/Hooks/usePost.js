import { useMemo } from "react";
import useSession from "./useSession";
import PostService from "./../Services/post.service";

function usePost() {
  const [session] = useSession();
  const $Post = useMemo(() => new PostService(session.token), [session.token]);

  return $Post;
}

export default usePost;
