import type { NextApiRequest, NextApiResponse } from "next";
import Article from "../../../interfaces/article";
import articles from "../../../mock/articles";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Article>
) {
    const { article } = req.query;

    const data = articles.data.filter((item) => {
        return item.id === article;
    });

    res.status(200).json({
        ...data[0],
    });
}
