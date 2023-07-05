<template>
    <div class="fixed inset-0 flex items-center justify-center z-50">
      <div class="absolute inset-0 bg-gray-500 opacity-75"></div>
      <div class="relative bg-white rounded-md shadow-md p-8">
        <button
          class="absolute top-0 right-0 p-2 text-gray-500 hover:text-gray-700"
          @click="closePopup"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            class="w-6 h-6"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
        <!-- หน้า popup ที่เปลี่ยนแปลง -->
        <div class="flex">
          <div
            class="bg-blue-800 p-8 md:hover:scale-y-110 rounded-md transition md:block"
            id="contact_info"
          >
            <div class="flex justify-between">
              <h2 class="text-white text-xl">Contact Information</h2>
            </div>
            <div class="mt-6 flex flex-row">
              <div>
                <!-- icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-slate-200 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-slate-200 text-xs">Name</h2>
                <p class="text-white -text-xs">Kin</p>
              </div>
            </div>
            <div class="mt-6 flex flex-row">
              <div>
                <!-- icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-slate-200 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    d="M16.5 12a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zm0 0c0 1.657 1.007 3 2.25 3S21 13.657 21 12a9 9 0 10-2.636 6.364M16.5 12V8.25"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-slate-200 text-xs">Email</h2>
                <p class="text-white -text-xs">63201171@kmitl.ac.th</p>
              </div>
            </div>
            <div class="mt-6 flex flex-row">
              <div>
                <!-- icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-slate-200 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-slate-200 text-xs">Phone</h2>
                <p class="text-white -text-xs">064-020-1771</p>
              </div>
            </div>
            <div class="mt-6 flex flex-row">
              <div>
                <!-- icon -->
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="w-8 h-8 text-slate-200 mr-2"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
                  />
                </svg>
              </div>
              <div>
                <h2 class="text-slate-200 text-xs">Adress</h2>
                <p class="text-white -text-xs">
                  Lorem ipsum dolor sit amet consectetur adipisicing.
                </p>
              </div>
            </div>
          </div>
          <!-- ... -->
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    methods: {
      closePopup() {
       
      },
    },
  };
  </script>
  