import React from "react";

export function Blog() {
    const posts = [
        {
            "id": 1,
            "title": "5 Best Crypto Performers During The 2022 Market Flop",
            "slug": "5-best-crypto-performers-during-the-2022-market-flop",
            "category": "Crypto News",
            "updatedAt": "21 hours ago"
        },
        {
            "id": 2,
            "title": " Top crypto funding stories of 2022  ",
            "slug": "top-crypto-funding-stories-of-2022",
            "category": "New Year Special",
            "updatedAt": "a day ago"
        },
        {
            "id": 3,
            "title": " 2023 will see the death of play-to-earn gaming ",
            "slug": "2023-will-see-the-death-of-play-to-earn-gaming",
            "category": " Opinion",
            "updatedAt": "a day ago"
        },
        {
            "id": 4,
            "title": " US lawmakers under pressure following FTX collapse: Report  ",
            "slug": "us-lawmakers-under-pressure-following-ftx-collapse-report",
            "category": " News",
            "updatedAt": "2 days ago"
        },
        {
            "id": 5,
            "title": "A Crypto Holiday Special: Past, Present, And Future With Material Indicators",
            "slug": "a-crypto-holiday-special-past-present-and-future-with-material-indicators",
            "category": "Interviews",
            "updatedAt": "2 days ago"
        }
    ]
    return (
        <>
            <div className="container">
                <div style={{textAlign: "center"}}>
                    <h1><b>List Posts</b></h1>
                </div>
                <table className="table table-hover">
                    <thead className="table-dark">
                    <tr>
                        <th>ID</th>
                        <th>TITLE</th>
                        <th>CATEGORY</th>
                        <th>TIME</th>
                    </tr>
                    </thead>
                    <tbody>
                    {posts.map((post, index) => (
                        <tr key={post.id}>
                            <td><b>{index + 1}</b></td>
                            <td style={{color: "blue"}}>{post.title}</td>
                            <td><b>{post.category}</b></td>
                            <td><b>{post.updatedAt}</b></td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </>

    )

}