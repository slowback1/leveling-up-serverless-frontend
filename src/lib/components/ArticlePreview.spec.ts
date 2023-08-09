import { render, type RenderResult } from "@testing-library/svelte";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TestBlogArticleListResponse } from "../../test-helpers/test-api-responses";
import ArticlePreview from "./ArticlePreview.svelte";

describe("ArticlePreview", () => {
    let result: RenderResult<ArticlePreview>;

    beforeEach(() => {
        result = render(ArticlePreview, { article: TestBlogArticleListResponse.data[0] });
    })

    afterEach(() => {
        result.unmount();
    })

    it("can render successfully", () => {
        let article = result.getByTestId("article");

        expect(article).toBeTruthy();
    })

    it("contains the article title", () => {
        let title = result.getByTestId("article__title");

        expect(title).toBeTruthy();
        expect(title.textContent).toContain(TestBlogArticleListResponse.data[0].attributes.Title);
    })

    it("contains the created date", () => {
        let createdDate = result.getByTestId("article__created-date");

        expect(createdDate).toBeTruthy();
        expect(createdDate.textContent).toContain("8/8/2023");
    })

    it("is a link to the article page", () => {
        let container = result.getByTestId("article");

        expect(container.getAttribute("href")).toEqual("/blog/1");
    })
})