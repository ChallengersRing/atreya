import {useParams} from "@tanstack/react-router";

const PostDetail = () => {
    const { postId } = useParams({ strict: false })
    return (
        <div className="max-w-screen-lg mx-auto">

            {/* Main Content */}
            <main className="mt-10">
                <div className="mb-4 md:mb-0 w-full mx-auto relative">
                    <div className="px-4 lg:px-0">
                        <h2 className="text-4xl font-semibold text-gray-800 leading-tight">
                            Pellentesque a consectetur velit, ac molestie ipsum. Donec sodales, massa et auctor.
                        </h2>
                        <a
                            href="#"
                            className="py-2 text-green-700 inline-flex items-center justify-center mb-2"
                        >
                            Cryptocurrency
                        </a>
                    </div>

                    <img
                        src="https://images.unsplash.com/photo-1587614387466-0a72ca909e16?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                        className="w-full object-cover lg:rounded"
                        style={{ height: '28em' }}
                        alt="Post Cover"
                    />
                </div>

                <div className="flex flex-col lg:flex-row lg:space-x-12">
                    <div className="px-4 lg:px-0 mt-12 text-gray-700 text-lg leading-relaxed w-full lg:w-3/4">
                        <p className="pb-6">Advantage old had otherwise sincerity dependent additions. It in adapted natural hastily is justice...</p>
                        <p className="pb-6">Difficulty on insensible reasonable in. From as went he they...</p>
                        <p className="pb-6">Adieus except say barton put feebly favour him...</p>

                        <div className="border-l-4 border-gray-500 pl-4 mb-6 italic rounded">
                            Sportsman do offending supported extremity breakfast by listening. Decisively advantages nor expression unpleasing she led met...
                        </div>

                        <p className="pb-6">Exquisite cordially mr happiness of neglected distrusts...</p>
                        <h2 className="text-2xl text-gray-800 font-semibold mb-4 mt-4">Uneasy barton seeing remark happen his has</h2>
                        <p className="pb-6">Guest it he tears aware as. Make my no cold of need...</p>
                        <p className="pb-6">Dashwood contempt on mr unlocked resolved provided of of...</p>
                        <p className="pb-6">Breakfast agreeable incommode departure it an...</p>
                        <p className="pb-6">Detract yet delight written farther his general...</p>
                    </div>

                    <div className="w-full lg:w-1/4 m-auto mt-12 max-w-screen-sm">
                        <AuthorCard />
                    </div>
                </div>
            </main>

            {/* Footer */}
            <Footer />
        </div>
    );
};

const AuthorCard = () => {
    return (
        <div className="p-4 border-t border-b md:border md:rounded">
            <div className="flex py-2">
                <img
                    src="https://randomuser.me/api/portraits/men/97.jpg"
                    className="h-10 w-10 rounded-full mr-2 object-cover"
                    alt="Author"
                />
                <div>
                    <p className="font-semibold text-gray-700 text-sm">Mike Sullivan</p>
                    <p className="font-semibold text-gray-600 text-xs">Editor</p>
                </div>
            </div>
            <p className="text-gray-700 py-3">
                Mike writes about technology. Yourself required no at thoughts delicate landlord it be. Branched dashwood do is whatever it.
            </p>
            <button className="px-2 py-1 text-gray-100 bg-green-700 flex w-full items-center justify-center rounded">
                Follow
                <i className="bx bx-user-plus ml-2"></i>
            </button>
        </div>
    );
};

const Footer = () => {
    return (
        <footer className="border-t mt-12 pt-12 pb-32 px-4 lg:px-0">
            <div>
                <img
                    src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80"
                    className="h-12 w-12"
                    alt="logo"
                />
            </div>
            <div className="flex flex-wrap">
                <div className="w-full lg:w-2/5">
                    <p className="text-gray-600 hidden lg:block mt-4 p-0 lg:pr-12">
                        Boisterous he on understood attachment as entreaties ye devonshire. In mile an form snug were been sell...
                    </p>
                </div>
                <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                    <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                    <ul>
                        <li><a href="" className="block text-gray-600 py-2">Team</a></li>
                        <li><a href="" className="block text-gray-600 py-2">About us</a></li>
                        <li><a href="" className="block text-gray-600 py-2">Press</a></li>
                    </ul>
                </div>
                <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                    <h6 className="font-semibold text-gray-700 mb-4">Content</h6>
                    <ul>
                        <li><a href="" className="block text-gray-600 py-2">Blog</a></li>
                        <li><a href="" className="block text-gray-600 py-2">Privacy Policy</a></li>
                        <li><a href="" className="block text-gray-600 py-2">Terms & Conditions</a></li>
                        <li><a href="" className="block text-gray-600 py-2">Documentation</a></li>
                    </ul>
                </div>
                <div className="w-full mt-6 lg:mt-0 md:w-1/2 lg:w-1/5">
                    <h6 className="font-semibold text-gray-700 mb-4">Company</h6>
                    <ul>
                        <li><a href="" className="block text-gray-600 py-2">Team</a></li>
                        <li><a href="" className="block text-gray-600 py-2">About us</a></li>
                        <li><a href="" className="block text-gray-600 py-2">Press</a></li>
                    </ul>
                </div>
            </div>
        </footer>
    );
};

export default PostDetail;
