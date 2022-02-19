import Footer from "../component/footer";
import Header from "../component/header";

const SignUp = {
    render() {
        return /* html */ `
        ${Header.render()}
        <form>
        <div class="shadow overflow-hidden sm:rounded-md">
          <div class="px-4 py-5 bg-white sm:p-6">
            <div class="grid grid-cols-6 gap-6">
              <div class="sm:col-span-3">
                <label for="last-name" class="block text-sm font-medium text-gray-700">Họ và tên</label>
                <input type="text" name="last-name" id="name" autocomplete="family-name" class="bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md">
              </div>

              <div class="col-span-6 sm:col-span-4">
                <label for="email-address" class="block text-sm font-medium text-gray-700">Email address</label>
                <input type="text" name="email-address" id="email-address" autocomplete="email" class="bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md">
              </div>
              <div class="sm:col-span-3">
                <label for="password" class="block text-sm font-medium text-gray-700">Password</label>
                <input type="password" name="password" id="password" autocomplete="family-name" class="bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md">
              </div>
              <div class="sm:col-span-3">
              <label for="phone-number" class="block text-sm font-medium text-gray-700">Phone</label>
              <input type="text" name="phone-number" id="phone-number" autocomplete="family-name" class="bg-gray-100 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md">
            </div>
              <div class="col-span-6 sm:col-span-3">
                <label for="country" class="block text-sm font-medium text-gray-700">Quốc Tịch</label>
                <select id="country" name="country" autocomplete="country-name" class="bg-gray-100 px-2 mt-1 block w-full py-2 ml-2 border border-slate-900 bg-white rounded-md shadow-sm focus:outline-none focus:ring-slate-900 focus:border-slate-900 sm:text-sm">
                  <option>United States</option>
                  <option>Việt Nam</option>
                  <option>Canada</option>
                  <option>Mexico</option>
                  <option>Mỹ</option>
                  <option>Anh</option>
                  <option>Trung Quốc</option>
                  <option>Nga</option>
                </select>
              </div>

              <div class="col-span-6">
                <label for="street-address" class="block text-sm font-medium text-gray-700">Địa chỉ</label>
                <input type="text" name="street-address" id="street-address" autocomplete="street-address" class="bg-gray-50 px-2 py-2 mt-1 focus:ring-slate-900 focus:border-slate-900 block w-full shadow-sm sm:text-sm border-slate-900 rounded-md">
              </div>
            </div>
          </div>
          <div class="px-4 py-3 bg-gray-50 text-right sm:px-6">
            <button type="submit" class="py-2 inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900">
              Đăng ký
            </button>
          </div>
        </div>
      </form>
      ${Footer.render()}
        `;
    },
};
export default SignUp;