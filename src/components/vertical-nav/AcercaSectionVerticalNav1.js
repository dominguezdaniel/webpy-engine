import React from 'react';

export default function AcercaSectionVerticalNav1() {
    return (
        <React.Fragment>
            <>
                <section className="relative bg-white">
  <nav className="flex xl:hidden items-center justify-between py-3.5 px-7 bg-light">
    <div className="w-full xl:w-auto px-2 xl:mr-10">
      <div className="flex items-center justify-between">
        <a className="inline-flex items-center h-7" href="#">
          <img src="https://static.shuffle.dev/uploads/files/7f/7f3918b0400a23547951ffe20b9a8e7013e43f84/imageedit-8-7454790519.png" alt className="w-1/2" />
        </a>
        <div className="xl:hidden">
          <button className="text-gray-400 hover:text-gray-300 focus:outline-none">
            <svg width={20} height={12} viewBox="0 0 20 12" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 2H19C19.2652 2 19.5196 1.89464 19.7071 1.70711C19.8946 1.51957 20 1.26522 20 1C20 0.734784 19.8946 0.48043 19.7071 0.292893C19.5196 0.105357 19.2652 0 19 0H1C0.734784 0 0.48043 0.105357 0.292893 0.292893C0.105357 0.48043 0 0.734784 0 1C0 1.26522 0.105357 1.51957 0.292893 1.70711C0.48043 1.89464 0.734784 2 1 2ZM19 10H1C0.734784 10 0.48043 10.1054 0.292893 10.2929C0.105357 10.4804 0 10.7348 0 11C0 11.2652 0.105357 11.5196 0.292893 11.7071C0.48043 11.8946 0.734784 12 1 12H19C19.2652 12 19.5196 11.8946 19.7071 11.7071C19.8946 11.5196 20 11.2652 20 11C20 10.7348 19.8946 10.4804 19.7071 10.2929C19.5196 10.1054 19.2652 10 19 10ZM19 5H1C0.734784 5 0.48043 5.10536 0.292893 5.29289C0.105357 5.48043 0 5.73478 0 6C0 6.26522 0.105357 6.51957 0.292893 6.70711C0.48043 6.89464 0.734784 7 1 7H19C19.2652 7 19.5196 6.89464 19.7071 6.70711C19.8946 6.51957 20 6.26522 20 6C20 5.73478 19.8946 5.48043 19.7071 5.29289C19.5196 5.10536 19.2652 5 19 5Z" fill="currentColor" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  </nav>
  <div className="relative z-50 hidden xl:flex xl:flex-col">
    <div className="fixed xl:hidden inset-0 bg-gray-800 opacity-10" />
    <div className="fixed inset-0 max-w-xss bg-light border-r">
      <div className="flex flex-wrap items-center justify-between px-7 py-6 pb-0">
        <div className="w-4/5">
          <a className="inline-block" href="#">
            <img src="https://static.shuffle.dev/uploads/files/7f/7f3918b0400a23547951ffe20b9a8e7013e43f84/imageedit-6-4711124916.png" alt />
          </a>
        </div>
        <div className="w-auto">
          <a className="text-neutral-400 hover:text-neutral-500" href="#">
            <svg width={18} height={14} viewBox="0 0 18 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="hidden">
              <path d="M6.97927 13.3637C7.27217 13.6566 7.74704 13.6566 8.03993 13.3637C8.33283 13.0708 8.33283 12.5959 8.03993 12.303L6.97927 13.3637ZM1.67627 7.00002L1.14594 6.46969C0.853046 6.76258 0.853046 7.23746 1.14594 7.53035L1.67627 7.00002ZM8.03993 1.69702C8.33283 1.40412 8.33283 0.92925 8.03993 0.636357C7.74704 0.343464 7.27217 0.343464 6.97927 0.636357L8.03993 1.69702ZM16.6763 7.75002C17.0905 7.75002 17.4263 7.41423 17.4263 7.00002C17.4263 6.58581 17.0905 6.25002 16.6763 6.25002V7.75002ZM8.03993 12.303L2.2066 6.46969L1.14594 7.53035L6.97927 13.3637L8.03993 12.303ZM2.2066 7.53035L8.03993 1.69702L6.97927 0.636357L1.14594 6.46969L2.2066 7.53035ZM1.67627 7.75002L16.6763 7.75002V6.25002L1.67627 6.25002L1.67627 7.75002Z" fill="currentColor" />
            </svg>
          </a>
        </div>
      </div>
      <div className="flex-1 flex flex-col justify-between py-8 overflow-x-hidden overflow-y-auto">
        <div className="flex flex-col flex-wrap px-7 mb-8 -m-2.5">
          <div className="w-auto p-2.5 hidden">
            <a className="flex flex-wrap items-center" href="#">
              <img className="mr-3" src="dashy-assets/images/home-2.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Dashboard</p>
            </a>
          </div>
          <div className="hidden w-auto p-2.5">
            <p className="text-xs text-neutral-400 font-medium uppercase mb-4">User</p>
            <a className="flex flex-wrap items-center mb-3.5" href="#">
              <img className="mr-3" src="dashy-assets/images/gear.svg" alt />
              <p className="hover:text-neutral-700 font-medium">People &amp; Settings</p>
            </a>
            <div className="ml-8">
              <div className="flex flex-wrap -m-1">
                <div className="w-full p-1"><a className="block px-3 py-1 font-medium text-neutral-500 hover:text-neutral-600 bg-white rounded-lg" href="#">Help with Sketch</a></div>
                <div className="w-full p-1"><a className="block px-3 py-1 font-medium text-neutral-500 hover:text-neutral-600 bg-transparent rounded-lg" href="#">All Documents</a></div>
                <div className="w-full p-1"><a className="block px-3 py-1 font-medium text-neutral-500 hover:text-neutral-600 bg-transparent rounded-lg" href="#">Shared with Me</a></div>
                <div className="w-full p-1"><a className="block px-3 py-1 font-medium text-neutral-500 hover:text-neutral-600 bg-transparent rounded-lg" href="#">Libraries</a></div>
              </div>
            </div>
          </div>
          <div className="w-auto p-2.5">
            <p className="text-xs text-neutral-400 font-medium uppercase mb-4">EDITAR SECCIONES</p>
            <a className="flex flex-wrap items-center" href="/">
              <img className="mr-3" src="dashy-assets/images/loader-rec.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Página</p>
            </a>
          </div>
          <div className="w-auto p-2.5">
            <a className="flex flex-wrap items-center" href="/catalogo">
              <img className="mr-3" src="dashy-assets/images/lifebuoy.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Catálogo</p>
            </a>
          </div>
          <div className="w-auto p-2.5">
            <a className="flex flex-wrap items-center" href="/acerca">
              <img className="mr-3" src="dashy-assets/images/folder-open.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Acerca</p>
            </a>
          </div>
          <div className="w-auto p-2.5">
            <p className="text-xs text-neutral-400 font-medium uppercase mb-4">HERRAMIENTAS</p>
            <a className="flex flex-wrap items-center" href="/analytics">
              <img className="mr-3" src="dashy-assets/images/user-circle.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Analytics</p>
            </a>
          </div>
          <div className="w-auto p-2.5">
            <a className="flex flex-wrap items-center" href="#">
              <img className="mr-3" src="dashy-assets/images/link-2-rec.svg" alt />
              <p className="hover:text-neutral-700 font-medium">GPT</p>
            </a>
          </div>
          <div className="w-auto p-2.5 hidden">
            <a className="flex flex-wrap items-center" href="#">
              <img className="mr-3" src="dashy-assets/images/list-unordered-3-rec.svg" alt />
              <p className="hover:text-neutral-700 font-medium">My Drafts</p>
            </a>
          </div>
          <div className="w-auto p-2.5 hidden">
            <a className="flex flex-wrap items-center" href="#">
              <img className="mr-3" src="dashy-assets/images/trash.svg" alt />
              <p className="hover:text-neutral-700 font-medium">Trash</p>
            </a>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-between px-7 -m-2">
          <div className="w-auto p-2">
            <div className="flex flex-wrap -m-1.5">
              <div className="w-auto p-1.5 hidden">
                <img src="dashy-assets/images/avatar.png" alt />
              </div>
              <div className="w-auto p-1.5">
                <h3 className="font-heading font-semibold text-sm">Dawid Jonson</h3>
                <p className="text-xs text-neutral-500">dawid.j@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="w-auto p-2">
            <a className="text-neutral-400 hover:text-neutral-500" href="#">
              <svg width={18} height={17} viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M5.46015 2.98571L5.8504 2.34523L5.46015 2.98571ZM7.60386 2.09776L6.87503 1.92082L7.60386 2.09776ZM3.48571 4.96015L2.84523 5.3504L3.48571 4.96015ZM2.59776 7.10386L2.42082 6.37503L2.59776 7.10386ZM2.59776 9.89614L2.77469 9.16731L2.59776 9.89614ZM3.48571 12.0398L2.84523 11.6496L3.48571 12.0398ZM5.46016 14.0143L5.8504 14.6548L5.46016 14.0143ZM7.60386 14.9022L8.33269 14.7253L7.60386 14.9022ZM10.3961 14.9022L11.125 15.0792L10.3961 14.9022ZM12.5398 14.0143L12.1496 14.6548L12.5398 14.0143ZM14.5143 12.0398L15.1548 11.6496L14.5143 12.0398ZM15.4022 9.89614L15.5792 10.625L15.4022 9.89614ZM15.4022 7.10386L15.2253 7.83269L15.4022 7.10386ZM14.5143 4.96015L15.1548 5.3504L14.5143 4.96015ZM12.5398 2.98571L12.1496 2.34523L12.5398 2.98571ZM10.3961 2.09776L9.66732 2.27469L10.3961 2.09776ZM5.06991 3.62618C6.33455 4.39674 7.98332 3.7138 8.33269 2.27469L6.87503 1.92082C6.76531 2.37275 6.24754 2.58722 5.8504 2.34523L5.06991 3.62618ZM4.12618 4.56991C3.75159 3.95513 4.45513 3.25159 5.06991 3.62618L5.8504 2.34523C3.89271 1.15239 1.65239 3.39271 2.84523 5.3504L4.12618 4.56991ZM2.77469 7.83269C4.2138 7.48332 4.89674 5.83455 4.12618 4.56991L2.84523 5.3504C3.08722 5.74754 2.87275 6.26531 2.42082 6.37503L2.77469 7.83269ZM2.77469 9.16731C2.0751 8.99748 2.0751 8.00252 2.77469 7.83269L2.42082 6.37503C0.193058 6.91585 0.193061 10.0841 2.42082 10.625L2.77469 9.16731ZM4.12618 12.4301C4.89674 11.1655 4.2138 9.51668 2.77469 9.16731L2.42082 10.625C2.87275 10.7347 3.08722 11.2525 2.84523 11.6496L4.12618 12.4301ZM5.06991 13.3738C4.45513 13.7484 3.75159 13.0449 4.12618 12.4301L2.84523 11.6496C1.65239 13.6073 3.89271 15.8476 5.8504 14.6548L5.06991 13.3738ZM8.33269 14.7253C7.98332 13.2862 6.33455 12.6033 5.06991 13.3738L5.8504 14.6548C6.24754 14.4128 6.76531 14.6273 6.87503 15.0792L8.33269 14.7253ZM9.66732 14.7253C9.49748 15.4249 8.50252 15.4249 8.33269 14.7253L6.87503 15.0792C7.41586 17.3069 10.5841 17.3069 11.125 15.0792L9.66732 14.7253ZM12.9301 13.3738C11.6655 12.6033 10.0167 13.2862 9.66732 14.7253L11.125 15.0792C11.2347 14.6273 11.7525 14.4128 12.1496 14.6548L12.9301 13.3738ZM13.8738 12.4301C14.2484 13.0449 13.5449 13.7484 12.9301 13.3738L12.1496 14.6548C14.1073 15.8476 16.3476 13.6073 15.1548 11.6496L13.8738 12.4301ZM15.2253 9.16731C13.7862 9.51668 13.1033 11.1655 13.8738 12.4301L15.1548 11.6496C14.9128 11.2525 15.1273 10.7347 15.5792 10.625L15.2253 9.16731ZM15.2253 7.83269C15.9249 8.00252 15.9249 8.99748 15.2253 9.16731L15.5792 10.625C17.8069 10.0841 17.8069 6.91585 15.5792 6.37503L15.2253 7.83269ZM13.8738 4.56991C13.1033 5.83455 13.7862 7.48332 15.2253 7.83269L15.5792 6.37503C15.1273 6.26531 14.9128 5.74754 15.1548 5.3504L13.8738 4.56991ZM12.9301 3.62618C13.5449 3.25159 14.2484 3.95513 13.8738 4.56991L15.1548 5.3504C16.3476 3.39271 14.1073 1.15239 12.1496 2.34523L12.9301 3.62618ZM9.66732 2.27469C10.0167 3.7138 11.6655 4.39674 12.9301 3.62618L12.1496 2.34523C11.7525 2.58722 11.2347 2.37275 11.125 1.92082L9.66732 2.27469ZM11.125 1.92082C10.5841 -0.306939 7.41586 -0.306942 6.87503 1.92082L8.33269 2.27469C8.50252 1.5751 9.49748 1.5751 9.66732 2.27469L11.125 1.92082ZM10.75 8.5C10.75 9.4665 9.9665 10.25 9 10.25V11.75C10.7949 11.75 12.25 10.2949 12.25 8.5H10.75ZM9 10.25C8.0335 10.25 7.25 9.4665 7.25 8.5H5.75C5.75 10.2949 7.20507 11.75 9 11.75V10.25ZM7.25 8.5C7.25 7.5335 8.0335 6.75 9 6.75V5.25C7.20507 5.25 5.75 6.70507 5.75 8.5H7.25ZM9 6.75C9.9665 6.75 10.75 7.5335 10.75 8.5H12.25C12.25 6.70507 10.7949 5.25 9 5.25V6.75Z" fill="currentColor" />
              </svg>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="mx-auto xl:ml-xss xl:pl-4"><section className="py-4 overflow-hidden">  <div className="container px-4 mx-auto">    <form abframeid="iframe.0.8081622365649037" abineguid="471B55FFC176441E8E6060F6A288C0EA">      <div className="flex items-center justify-between mt-6">        <h2 className="text-2xl font-bold mb-6">Editar Acerca</h2>        <button type="submit" className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">Preview</button>    </div>  </form></div>  <section className="py-4 overflow-hidden">    <div className="container px-4 mx-auto">      <div className="p-6 bg-white border rounded-xl">        <div className="flex flex-wrap justify-between -m-2">          <div className="w-full sm:w-1/2 p-2">            <h3 className="font-heading text-sm font-semibold">Mostrar Sección</h3>        </div>          <div className="w-full sm:w-1/2 p-2">            <div className="flex flex-wrap -m-2.5">              <div className="w-auto p-2.5">                <div className="flex items-center">                  <input className="absolute opacity-0 w-4 h-4" id="default-radio-1" type="radio" defaultValue name="default-radio" />                  <div className="mr-3 p-px bg-transparent border border-neutral-200 rounded-full">                    <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full">                      <div className="bg-transparent w-2.5 h-2.5 rounded-full" />                  </div>                </div>                  <label className="text-sm" htmlFor="default-radio-1">Si</label>              </div>            </div>              <div className="w-auto p-2.5">                <div className="flex items-center">                  <input className="absolute opacity-0 w-4 h-4" id="default-radio-2" type="radio" defaultValue name="default-radio" />                  <div className="mr-3 p-px bg-transparent border border-neutral-200 rounded-full">                    <div className="flex items-center justify-center w-4 h-4 bg-white rounded-full">                      <div className="bg-transparent w-2.5 h-2.5 rounded-full" />                  </div>                </div>                  <label className="text-sm" htmlFor="default-radio-2">No</label>              </div>            </div>          </div>        </div>      </div>    </div>  </div></section>  <div className="container px-4 mx-auto">    <div className="p-6 bg-white border rounded-xl">      <div className="flex flex-wrap justify-between -m-2" id="abId0.6649098324662555">        {/*Inputs*/}        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Imágen de Cover</h3>      </div>        <div className="w-full sm:w-1/2 p-2">          <div className="flex items-center justify-end sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600">            <input className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" id="imageUpload" type="file" accept="image/*" />        </div>          <div className="mt-4">            <picture>              <source srcSet="https://static.bookinghealth.com/assets/images/placeholder_256.webp" type="image/jpg" />              <img id="imagePreview" src="placeholder.jpg" alt="Image Preview" style={{width: '60%'}} className="w-full h-[200px] object-cover rounded-lg" />          </picture>        </div>      </div>        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Título de la Sección 1</h3>      </div>        <div className="w-full sm:w-1/2 p-2" id="abId0.5422483288598052">          <div className="flex items-center justify-end sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600" id="abId0.54502705656631">            <input className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" type="text" placeholder />        </div>      </div>        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Párrafo de la Sección 1</h3>      </div>        <div className="w-full sm:w-1/2 p-2">          <div className="flex items-center justify-between sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600"><textarea className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" placeholder defaultValue={""} /></div>      </div>        {/*end*/}        {/*Inputs*/}        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Título de la Sección 2</h3>      </div>        <div className="w-full sm:w-1/2 p-2" id="abId0.5422483288598052">          <div className="flex items-center justify-end sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600" id="abId0.54502705656631">            <input className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" type="text" placeholder />        </div>      </div>        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Párrafo de la Sección 2</h3>      </div>        <div className="w-full sm:w-1/2 p-2">          <div className="flex items-center justify-between sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600"><textarea className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" placeholder defaultValue={""} /></div>      </div>        {/*end*/}        {/*Inputs*/}        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Título de la Sección 3</h3>      </div>        <div className="w-full sm:w-1/2 p-2" id="abId0.5422483288598052">          <div className="flex items-center justify-end sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600" id="abId0.54502705656631">            <input className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" type="text" placeholder />        </div>      </div>        <div className="w-full sm:w-1/2 p-2">          <h3 className="font-heading text-sm font-semibold">Párrafo de la Sección 3</h3>      </div>        <div className="w-full sm:w-1/2 p-2">          <div className="flex items-center justify-between sm:max-w-md overflow-hidden hover:bg-gray-50 border border-neutral-200 rounded-lg focus-within:border-neutral-600"><textarea className="py-2.5 pl-2 pr-3.5 text-sm w-full bg-transparent outline-none placeholder-neutral-400" placeholder defaultValue={""} /></div>      </div>        {/*end*/}    </div>  </div></div></section>
  </div>
</section>


            </>
        </React.Fragment>
    );
}

