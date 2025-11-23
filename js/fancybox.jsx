import { useEffect } from "react";
import PropTypes from "prop-types";

import { Fancybox as NativeFancybox } from "@fancyapps/ui/dist/fancybox.esm.js";
import "@fancyapps/ui/dist/fancybox.css";

function Fancybox({ delegate = "[data-fancybox]", options = {}, children }) {
  useEffect(() => {
    NativeFancybox.bind(delegate, options);

    return () => {
      NativeFancybox.destroy();
    };
  }, [delegate, options]);

  return <>{children}</>;
}

Fancybox.propTypes = {
  delegate: PropTypes.string,
  options: PropTypes.object,
  children: PropTypes.node,
};

export default Fancybox;
