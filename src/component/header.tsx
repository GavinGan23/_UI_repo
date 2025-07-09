

"use client"



export default function Header() {
  return (
      <header className="w-full fixed top-0 left-0 z-[99] bg-black/15 backdrop-blur-sm ">
      <nav className="navigation normal_con">
        <a href="#home" className="menulogo">CoffeeGuide<img src="/coffee.svg" className="w-10 h-32" /></a>
          <ul className="nav_menu">
            <li className="menu_item">
              <div className="hover:scale-125 transition-transform duration-300">
                <a href="/" className="menu_link">Latte </a>
              </div>
            </li>
            <li className="menu_item">
              <div className="hover:scale-125 transition-transform duration-300">
                <a href="/" className="menu_link ">Cafe</a>
              </div>
            </li>
            <li className="menu_item">
              <div className="hover:scale-125 transition-transform duration-300">
                <a href="/" className="menu_link">Bean</a>
              </div>
            </li>
          </ul>
      </nav>
    </header>

  );
}
