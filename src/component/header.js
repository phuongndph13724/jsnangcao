import {
  reRender
} from "../untils";

const Header = {
  render() {
    return /* html */ `
        <header class="pb-4">
          <div class="relative bg-white overflow-hidden">
        <div class="max-w-7xl mx-auto">
          <div class="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <svg class="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
              fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
              <polygon points="50,0 100,0 50,100 0,100" />
            </svg>

            <div>
              <div class="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav class="relative flex items-center justify-between sm:h-10 lg:justify-start" aria-label="Global">
                  <div class="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div class="flex items-center justify-between w-full md:w-auto">
                      <a href="#">
                        <span class="sr-only">Workflow</span>
                        <img class="h-8 w-auto sm:h-10" src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg">
                      </a>
                    </div>
                  </div>
                  <div class="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a href="/" class="font-medium text-gray-500 hover:text-gray-900">Home</a>

                    <a href="/about" class="font-medium text-gray-500 hover:text-gray-900">About</a>

                    <a href="/product" class="font-medium text-gray-500 hover:text-gray-900">Product</a>

                    <a href="/contact" class="font-medium text-gray-500 hover:text-gray-900">Contact</a>
                    ${localStorage.getItem('user') ? `
                      <div class="flex list-none">
                        <li>Xin chào<a href="" id="email1" class="pl-3 font-medium text-indigo-600 hover:text-indigo-500"></a></li>
                        <li><a href="" id="logout" class="pl-4 font-medium text-red-600 hover:text-indigo-500">Đăng xuất</a></li>
                      </div>
                    `: ""}
                  </div>
                  <div class="">
                    <a href="/signin"
                      class="block w-full px-5 py-3 text-center font-medium text-red-600 bg-gray-50 hover:bg-gray-100">
                      Log
                      in </a>
                  </div>
                </nav>
              </div>
            </div>
            
            <div class="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div class="sm:text-center lg:text-left">
                <h1 class="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span class="block xl:inline">Welcome to</span>
                  <span class="block text-indigo-600 xl:inline">Phuong's website</span>
                </h1>
                <p
                  class="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet
                  fugiat veniam occaecat fugiat aliqua.</p>
              </div>
            </div>
          </div>
        </div>
        <div class="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img class="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
            src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
            alt="">
        </div>
      </div>
      </header>
        `;
  },
  afterRender() {
    console.log(1);
    const email1 = document.querySelector("#email1");
    if (email1) {
      email1.innerHTML = JSON.parse(localStorage.getItem('user')).email;
    }
    if (logout) {
      logout.addEventListener('click', function () {
        localStorage.removeItem('user');
        reRender(Header, "#header");
        toastr.success("Logout thành công")
      })
    }
  }
};
export default Header;