const Header = {
    render() {
        return /* html */`<div class="bg-blue-800 py-4">
        <a class="my-8" href="#">
          <img src="images/logo2.png" alt="" class="mx-auto" width="150px" height="50px" />
        </a>
      </div>
      <nav class="flex bg-amber-500">
        <ul class="flex">
          <li class="news-menu"><a href="/">Trang chủ</a></li>
          <li class="news-menu"><a href="/about">Tuyển sinh</a></li>
          <li class="news-menu"><a href="/product">Chương trình đào tạo</a></li>
          <li class="news-menu"><a href="">Góc sinh viên</a></li>
          <li class="news-menu"><a href="/gioithieu">Giới Thiệu</a></li>
        </ul>
        <div class="news-search">
          <input class="news-input" type="text">
          <button class="news-button">TÌM KIẾM</button>
        </div>
      </nav>`;
    },
};
export default Header;