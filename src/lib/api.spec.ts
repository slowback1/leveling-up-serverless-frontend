import { beforeEach, describe, expect, it, vi, type Mock } from "vitest";
import API from "./api";

describe("API", () => {
    let api = new API();
    let mockFetch: Mock;
    beforeEach(() => {
        mockFetch = vi.fn(() => {
            return new Promise(resolve => resolve({ json: () => ({}) }))
        });
        global.fetch = mockFetch;
    })

    it("exists", () => {
        expect(api).toBeTruthy();
    })

    it("calls the correct url to fetch blog articles", async () => {
        await api.getBlogArticles();

        let calledUrl = mockFetch.mock.lastCall[0];

        expect(calledUrl).toContain("api/blog-articles?populate=*");
    })

    it("calls the correct url to fetch a single blog article", async () => {
        await api.getBlogArticle(1);

        let calledUrl = mockFetch.mock.lastCall[0];

        expect(calledUrl).toContain("api/blog-articles/1?populate=*");
    })
})