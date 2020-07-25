try {

  ; (() => {

    ////////////////////////////////////////////////////////////////////////////
    // Button
    ////////////////////////////////////////////////////////////////////////////

    // -------------------------------------------------------------------------
    // Find the button container in the DOM
    // -------------------------------------------------------------------------
    const findButtonContainer = () => {
      const participantsIconXpath = `//div[@aria-label='Show everyone']//*[@d='M15 8c0-1.42-.5-2.73-1.33-3.76.42-.14.86-.24 1.33-.24 2.21 0 4 1.79 4 4s-1.79 4-4 4c-.43 0-.84-.09-1.23-.21-.03-.01-.06-.02-.1-.03A5.98 5.98 0 0 0 15 8zm1.66 5.13C18.03 14.06 19 15.32 19 17v3h4v-3c0-2.18-3.58-3.47-6.34-3.87zM9 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 9c-2.7 0-5.8 1.29-6 2.01V18h12v-1c-.2-.71-3.3-2-6-2M9 4c2.21 0 4 1.79 4 4s-1.79 4-4 4-4-1.79-4-4 1.79-4 4-4zm0 9c2.67 0 8 1.34 8 4v3H1v-3c0-2.66 5.33-4 8-4z']`;
      const chatIconXpath = `//div[@aria-label='Chat with everyone']//*[@d='M20 2H4c-1.1 0-1.99.9-1.99 2L2 22l4-4h14c1.1 0 2-.9 2-2V4c0-1.1-.9-2-2-2zm0 14H4V4h16v12z']`;

      const participantsIcon = xpath(participantsIconXpath, document);
      const chatIcon = xpath(chatIconXpath, document);

      return getCommonAncestor(participantsIcon, chatIcon);
    };

    const removeClockLoop = () => {
      const buttonContainer = findButtonContainer();

      if (buttonContainer) {
        for(let i = 0; i < buttonContainer.childNodes.length; i++)
        {
          var timeButtonCandidate = buttonContainer.children[i];
          var spanAMTP = xpath('.//div[2]/span[2]', timeButtonCandidate);
          if (spanAMTP) {
            if (spanAMTP.textContent == 'AM' || spanAMTP.textContent == 'PM')
            {
              buttonContainer.children[i].style.display = 'none';
            }
          } 
        }
      }
    }
    ////////////////////////////////////////////////////////////////////////////
    // DOM Utilities
    ////////////////////////////////////////////////////////////////////////////

    // -------------------------------------------------------------------------
    // create a list of all ancestor nodes
    // -------------------------------------------------------------------------
    const parents = (node) => {
      const nodes = [node]
      for (; node; node = node.parentNode) {
        nodes.unshift(node);
      }
      return nodes;
    }

    // -------------------------------------------------------------------------
    // find the common ancestor of two nodes if one exists
    // -------------------------------------------------------------------------
    const getCommonAncestor = (node1, node2) => {
      const parents1 = parents(node1);
      const parents2 = parents(node2);

      if (parents1[0] === parents2[0]) {
        for (let i = 0; i < parents1.length; i++) {
          if (parents1[i] !== parents2[i]) {
            return parents1[i - 1];
          }
        }
      }
    }

    // -------------------------------------------------------------------------
    // execute an xpath query and return the first matching node
    // -------------------------------------------------------------------------
    const xpath = (search, root = document) => {
      return document.evaluate(search, root, null, XPathResult.FIRST_ORDERED_NODE_TYPE).singleNodeValue;
    };

    ////////////////////////////////////////////////////////////////////////////
    // General utilities
    ////////////////////////////////////////////////////////////////////////////

    // -------------------------------------------------------------------------
    // pad numbers 0-9 with 0
    // -------------------------------------------------------------------------
    const pad = (integer) => {
      if (integer < 10) {
        return `0${integer}`;
      } else {
        return integer;
      }
    };

    // -------------------------------------------------------------------------
    // console.log only if DEBUG is false
    // -------------------------------------------------------------------------
    const debug = (...args) => {
      if (DEBUG) {
        console.log('[google-meet-removetime]', ...args);
      }
    };

    // -------------------------------------------------------------------------
    // await the function and return its value, logging an error if it rejects
    // -------------------------------------------------------------------------
    const tryTo = (fn, label) => async (...args) => {
      try {
        return await fn(...args);
      } catch (e) {
        console.error(`error ${label}:`, e);
      }
    };

    ////////////////////////////////////////////////////////////////////////////
    // Main App
    ////////////////////////////////////////////////////////////////////////////

    setInterval(tryTo(removeClockLoop, 'removing click'), 1000);
  })();

} catch (e) {
  console.error('init error', e);
}
