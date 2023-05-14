import React from 'react';

const Footer = () => {
    return( 
      <footer
        class="bg-neutral-200 text-center text-neutral-600 dark:bg-neutral-600 dark:text-neutral-200 lg:text-left">
        
        <div class="mx-6 py-10 text-center md:text-left">
          <div class="grid-1 grid gap-8 md:grid-cols-2 lg:grid-cols-4">

            <div class="">
              <h6
                class="mb-4 flex items-center justify-center font-semibold uppercase md:justify-start text-gray-900">
                Aurora Organic
              </h6>
              <p className='mb-4'>Quem Somos</p>
              <p className='mb-4'>Sustentabilidade</p>
              <p className='mb-4'>Blog</p>
              <p className='mb-4'>Entre em Contato</p>
            </div>

            <div class="">
              <h6
                class="mb-4 flex justify-center font-semibold uppercase md:justify-start text-gray-900">Termos & Condições</h6>
              <p class="mb-4">Política de Pagamento</p>
              <p class="mb-4">Política de Privacidade</p>
              <p class="mb-4">Política de Cookies</p>
              <p class="mb-4">Troca e Devolução</p>
            </div>

            <div class="">
              <h6 class="mb-4 flex items-start justify-start font-semibold uppercase md:justify-start text-gray-900">Nossas Redes</h6>
              <div class="flex justify-start">
                <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                  </svg>
                </a>
                <a href="#!" class="mr-6 text-neutral-600 dark:text-neutral-200">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-4 w-4"
                    fill="currentColor"
                    viewBox="0 0 24 24">
                    <path
                      d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                  </svg>
                </a>
          </div>
            </div>
          </div>
        </div>

        <div class="bg-aurora-fundoEscuro p-1 text-center dark:bg-neutral-700">
          <span>© 2023 Copyright </span>
          <a class="font-semibold text-neutral-500 dark:text-neutral-400"
            href="#">Aurora Organic | Desenvolidor por Flavia Pinheiro e Márcio Roberto</a>
        </div>
      </footer>
              
    );
};
export default Footer;
