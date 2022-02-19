const NewsList = {
    render() {
        const API = "http://localhost:3001/posts";
        return fetch(API).then((response) => response.json()).then((data) =>/* html */ `
            <h2 class="text-3xl font-bold my-4">Tin tức học tập</h2>
                <div class="bg-white">
                    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
                            <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                            ${data.map((post) => /* html */`
                                <a href="/news/${post.id}" class="group">
                                    <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                                    <img src="${post.img}"
                                        alt="Tall slender porcelain bottle with natural clay textured body and cork stopper."
                                        class = "w-full h-full object-center object-cover group-hover:opacity-75">
                                    </div>
                                    <p class="mt-1 text-lg font-medium text-gray-900">${post.title}</p>
                                    <h3 class="mt-4 text-sm text-gray-700">${post.desc}</h3>
                                </a>
                            `).join("")}
                            </div>
                    </div>
                </div>
        `);
    },
};
export default NewsList;