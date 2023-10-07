window.addEventListener('load', function () {
    const scriptSelector = window.inlineScriptSelector || "script"
    const scriptAttribute = '[' + scriptSelector + ']'
    function processElementsWithScriptAttribute(elements) {
        elements.forEach((element) => {
            const scriptValue = element.getAttribute(scriptSelector);

            new Function('me', scriptValue)(element);
        });
    }

    function handleMutations(mutationsList, observer) {
        mutationsList.forEach((mutation) => {
            if (mutation.type === 'childList') {
                mutation.addedNodes.forEach((node) => {
                    console.log(node)
                    if (node.nodeType === 1) {
                        if (node.matches(scriptAttribute)) {
                            processElementsWithScriptAttribute([node]);
                        }
                        const elementsWithScript = node.querySelectorAll(scriptAttribute);
                        processElementsWithScriptAttribute(elementsWithScript);
                    }
                })

            }
        });
    }

    const observer = new MutationObserver(handleMutations);

    observer.observe(document.body, {
        childList: true,
        subtree: true
    });

    const elementsWithScript = document.querySelectorAll(scriptAttribute);
    processElementsWithScriptAttribute(elementsWithScript);

})