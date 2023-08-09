import { render, type RenderResult } from '@testing-library/svelte';
import { afterEach, beforeEach, describe, expect, it } from "vitest";
import { TestBlogArticleListResponse } from "../test-helpers/test-api-responses";
import Page from "./+page.svelte";

describe("Home Page", () => {
    let result: RenderResult<Page>;

    beforeEach(() => {
        result = render(Page, {
            props: {
                data: {
                    articles: TestBlogArticleListResponse.data
                }
            }
        })
    })

    afterEach(() => {
        result.unmount();
    })

    it("can render without breaking", () => {
        expect(result).toBeTruthy();
    })

    it("contains a heading", () => {
        let heading = result.getByTestId("heading");

        expect(heading).toBeTruthy();
        expect(heading.textContent).toEqual("My cool heading");
    })

    it("contains exactly one article section", () => {
        let articles = result.getAllByTestId("article");

        expect(articles).toHaveLength(1);
    })
})