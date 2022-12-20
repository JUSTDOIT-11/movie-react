import { FaAlignJustify } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FiTwitter } from "react-icons/fi";

/**상단 바*/
function HomeTopbar() {
  return (
    <div>
      <div>
        <FaAlignJustify size="24" />
      </div>
      <h1>The Movies!</h1>
      <div>
        <div>
          <FiTwitter size="20" />
        </div>
        <div>
          <FaInstagram size="20" />
        </div>
      </div>
    </div>
  );
}

export default HomeTopbar;
