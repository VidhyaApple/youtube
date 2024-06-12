


export const YOUTUBE_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=50&key=" + process.env.REACT_APP_GOOGLE_API_KEY

export const YOUTUBE_VIDEO_DETAIL_API = "https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=Ks-_Mh1QhMc&regionCode=IN&key=" + process.env.REACT_APP_GOOGLE_API_KEY

export const YOUTUBE_SEARCH_AUTOSUGGEST_API = "http://suggestqueries.google.com/complete/search?client=firefox&ds=yt&q="

export const YOUTUBE_FILTERED_VIDEOS_API = "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=50&key=" + process.env.REACT_APP_GOOGLE_API_KEY + "&q="

export const commentsData = [
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: []
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: [
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: [
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: [
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: [
                                    {
                                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                        replies: []
                                    },
                                    {
                                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                        replies: []
                                    },
                                    {
                                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                        replies: []
                                    }
                                ]
                            },
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: []
                            },
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: []
                            }
                        ]
                    },
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: []
                    },
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: []
                    }
                ]
            },
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: []
            },
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: []
            }
        ]
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: []
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: [
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: []
            },
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: []
            },
            {
                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                replies: [
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: [
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: []
                            },
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: []
                            },
                            {
                                img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                                text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                                replies: []
                            }
                        ]
                    },
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: []
                    },
                    {
                        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
                        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
                        replies: []
                    }
                ]
            }
        ]
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: []
    },
    {
        img: "https://t3.ftcdn.net/jpg/05/53/79/60/360_F_553796090_XHrE6R9jwmBJUMo9HKl41hyHJ5gqt9oz.jpg",
        text: "Lorem ipsum, dolor sit amet consectetur adipisicing elit",
        replies: []
    },
]