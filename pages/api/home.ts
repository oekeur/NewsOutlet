import type { NextApiRequest, NextApiResponse } from "next";
import Article from "../../interfaces/article";
import articles from "../../mock/articles";

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<Article>
) {
    res.status(200).json({
        ...articles.data,
    });
}
