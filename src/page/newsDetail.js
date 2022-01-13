import data from "../data";

const NewsDetailPage = {
    render(id) {
        const result = data.find((post) => post.id === id);

        return /* html */`
            <div class="grid grid-cols-2">
            <div>
                <img src="${result.img}"/>
            </div>
            <div class="px-3 py-3">
               <h1 class="text-4xl text-ellipsis">${result.title}</h1><br>
                <p class="px-1 italic">${result.desc}</p> 
            </div>
            </div>
            
        `;
    },
};
export default NewsDetailPage;