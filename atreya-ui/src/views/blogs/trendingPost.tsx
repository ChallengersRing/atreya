
const TrendingPost = () => {
  return (
    <section className="mt-8 xs:mt-0 mb-4 max-w-[1032px] sm:px-5 mx-auto border-box">
      <div className="flex flex-wrap mt-8 mx-[-12px]">
        <div className="w-full md:w-2/3 px-3 mb-4 md:mb-0">
          <div className="relative overflow-hidden">
            <a
              href="https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d?source=collection_home---4------0-----------------------"
              className="block h-[350px] xs:h-[170px] w-full float-left bg-cover bg-origin-border bg-gray-100 border border-gray-300"
              style={{
                backgroundImage:
                  'url("https://cdn-images-1.medium.com/max/1250/1*6AOJeVdbhmStpb9CRj30nw.png")',
                backgroundPosition: 'center center',
              }}
              aria-label="Java 21 Virtual Threads - Dude, Where’s My Lock?"
            >
              <span className="sr-only">Java 21 Virtual Threads - Dude, Where’s My Lock?</span>
            </a>
          </div>
        </div>
        <div className="w-full md:w-1/3 px-3 mb-8">
          <a
            href="https://netflixtechblog.com/java-21-virtual-threads-dude-wheres-my-lock-3052540e231d?source=collection_home---4------0-----------------------"
          >
            <h3 className="font-bold leading-tight xs:text-2xl text-4xl pt-1 pb-0.5">
              <div className="tracking-tight leading-tight overflow-hidden text-ellipsis line-clamp-4 text-2xl xs:text-2xl">
                Java 21 Virtual Threads - Dude, Where’s My&nbsp;Lock?
              </div>
            </h3>
            <div className="font-light leading-relaxed text-lg xs:text-base text-gray-700 mt-2">
              <div className="text-base tracking-tight leading-tight mt-1 text-gray-700">
                Getting real with virtual&nbsp;threads
              </div>
            </div>
          </a>
          <div className="clearfix mt-5">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <a
                  className="link accent-color"
                  href="https://netflixtechblog.com/@netflixtechblog"
                >
                  <img
                    src="https://cdn-images-1.medium.com/fit/c/45/45/1*BJWRqfSMf9Da9vsXG9EBRQ.jpeg"
                    alt="Netflix Technology Blog"
                    className="rounded-full w-9 h-9 xs:w-8 xs:h-8"
                  />
                </a>
              </div>
              <div className="flex-grow ml-3">
                <a
                  className="font-semibold text-gray-900 hover:text-gray-700"
                  href="https://netflixtechblog.com/@netflixtechblog"
                >
                  Netflix Technology Blog
                </a>
                <div className="text-gray-600 text-sm">
                  <time dateTime="2024-07-29T18:03:30.765Z">Jul 29</time>
                  <span className="mx-2">•</span>
                  <span>10 min read</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendingPost;
