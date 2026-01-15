hexo.extend.helper.register("request_cheatsheet", function () {
    return `https://github.com/amriunix/askhacker/issues/new?title=Cheatsheet+request%3A+&labels=request`;
});

hexo.extend.helper.register("contributing", function () {
    return `https://github.com/amriunix/askhacker`;
});


hexo.extend.helper.register("edit_page", function () {
    let postPage = this.page['layout'] === 'post';
    let url = "https://github.com/amriunix/askhacker";
    if (postPage) {
        url += `/blob/main/source/_posts/${this.page.slug}.md`;
    }
    return url;
});