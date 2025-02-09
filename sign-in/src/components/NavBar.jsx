import { Link } from "react-router-dom";
import SidePanel from "../animations/SidePanel";
import { useState } from "react";
import Spinner from "../animations/Spinner";

export default function NavBar() {
  const [isPanelOpen, setIsPanelOpen] = useState(false);

  return (
    <div>
      <button
        className="flex items-center justify-center bg-gray-100"
        onClick={() => setIsPanelOpen(true)}
      >
        Open Menu
      </button>

      <SidePanel isOpen={isPanelOpen} onClose={() => setIsPanelOpen(false)}>
        <h2 className="text-xl font-bold">Menu</h2>
        <Spinner />
        <ul className="mt-4">
          <li className="py-2">
            <nav>
              <Link to="/">Home</Link> |
            </nav>
          </li>
          <li className="py-2">
            <nav>
              <Link to="/animations">Animations</Link>
            </nav>
          </li>
          <li className="py-2">
            <nav>
              <Link to="/animations2">Animations 2</Link>
            </nav>
          </li>
          <li className="py-2">
            <nav>
              <Link to="/parallax">Parallax</Link>
            </nav>
          </li>
          <li className="py-2">
            <nav>
              <Link to="/animations3">Animations 3</Link>
            </nav>
          </li>
        </ul>
      </SidePanel>
    </div>
  );
}
