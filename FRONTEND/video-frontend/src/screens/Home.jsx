import { Loader, VideoPostCard } from "../components";
import InfiniteScroll from "react-infinite-scroller";
import axios from "axios"
import { useEffect } from "react";

const Home = () => {
useEffect(async() => {
  const response=await axios.get("http://localhost:8000/api/v1/video/get-videos")
}, [])
const data=response.data;

  return (
    <>
      {isLoading || isFetching ? (
        <Loader className="w-full h-full flex justify-center items-center" />
      ) : (
        <InfiniteScroll
          className="w-full"
          loadMore={fetchNextPage}
          hasMore={hasNextPage}
          pageStart={1}>
          <div
            id="home__page"
            className="w-full h-full overflow-x-hidden overflow-y-auto p-3">
            {videoData?.pages?.map((page, index) => (
              <div
                key={index}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
                {page?.data?.videos.map((video) => (
                  <VideoPostCard key={video._id} video={video} />
                ))}
              </div>
            ))}

            {isFetching && hasNextPage && (
              <Loader className="flex justify-center items-center" />
            )}
            {!hasNextPage && (
              <p className="text-center text-dark-2 dark:text-light-2 text-sm mt-5">
                No more data!!
              </p>
            )}
          </div>
        </InfiniteScroll>
      )}
    </>
  );
};

export default Home;