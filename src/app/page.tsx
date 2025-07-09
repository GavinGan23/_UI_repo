"use client"

import Header from "@/component/header";
import Products from "@/component/product";
import Coffeeshops from "@/component/cafe";
import Footer from "@/component/footer";
import useScrollReveal from "@/js/useScrollReveal"
export default function Home() {

  useScrollReveal();
  return (
    <div>
      <div id="loading-overlay" className="loading-overlay">
        <img src="/coffee.svg" alt="Loading..." className="w-32 h-32 animate-pulse" />
      </div>
      <link href="https://cdn.jsdelivr.net/npm/remixicon@2.5.0/fonts/remixicon.css" rel="stylesheet"></link>
      <Header />
      <main className="main" id="main">
        <section
        className="main_sec"
        id="home"
        style={{backgroundImage: 'url(/image.png)',}}>
          <h1 className="main_sec_title">
            Begin your morning <br />
            with coffee
          </h1>
            <a href="#" className="main_sec_button">
              Get Started <i className="ri-arrow-right-s-line"></i>
            </a>
        </section>
 

      <Products/>
      <Coffeeshops/>
      <Footer />
      </main>
    </div>

  );
}
