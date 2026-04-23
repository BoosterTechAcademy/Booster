function copyCode(button) {
  const parent = button.closest('.code-container') || button.parentElement;
  const codeBlock = parent.querySelector('pre, code');

  if (codeBlock) {
    const text = codeBlock.innerText;

    navigator.clipboard.writeText(text)
      .then(() => {
        // Create a temporary feedback message
        let copiedMsg = document.createElement('div');
        copiedMsg.innerText = 'Copied!';
        copiedMsg.style.position = 'absolute';
        copiedMsg.style.top = '40px';
        copiedMsg.style.right = '12px';
        copiedMsg.style.backgroundColor = '#4caf50';
        copiedMsg.style.color = 'white';
        copiedMsg.style.padding = '4px 8px';
        copiedMsg.style.borderRadius = '4px';
        copiedMsg.style.fontSize = '0.85rem';
        copiedMsg.style.zIndex = '10';

        // Add and remove the message
        parent.appendChild(copiedMsg);
        setTimeout(() => {
          parent.removeChild(copiedMsg);
        }, 1500);
      })
      .catch(err => {
        console.error("Copy failed:", err);
      });
  }
}

window.copyCode = copyCode;
