import { render, type RenderResult } from "@testing-library/svelte";
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TestBlogArticleListResponse } from "../../../test-helpers/test-api-responses";
import Page from "./+page.svelte";

const article = TestBlogArticleListResponse.data[0];

describe("Blog Article Page", () => {
    let result: RenderResult<Page>;

    beforeEach(() => {
        result = render(Page, { props: { data: { article } } })
    })

    afterEach(() => {
        result.unmount();
    })

    it("renders the blog title", () => {
        let title = result.getByTestId("blog__title");

        expect(title).toBeTruthy();
        expect(title.textContent).toEqual(article.attributes.Title);
    })

    it("renders the blog content", () => {
        let content = result.getByTestId("blog__content");

        expect(content).toBeTruthy();
        expect(content.textContent).toContain(article.attributes.Body);
    })

    it("contains a backlink to the main page", () => {
        let backlink = result.getByTestId("blog__back");

        expect(backlink).toBeTruthy();
        expect(backlink.getAttribute("href")).toEqual("/");
    })
})