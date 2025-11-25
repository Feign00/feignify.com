const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

export const vScramble = {
  mounted(el) {
    el.dataset.originalText = el.innerText;
    
    el.addEventListener("mouseenter", () => {
      let iteration = 0;
      const originalText = el.dataset.originalText;
      clearInterval(el.interval);

      el.interval = setInterval(() => {
        el.innerText = originalText
          .split("")
          .map((letter, index) => {
            // "Back to front" sorting effect:
            // Characters at the end stabilize first.
            // We compare index with a threshold that moves from length down to 0.
            
            // Actually, usually "decoding" effects go from left to right (start to end).
            // The user asked for "back to front" sorting effect.
            // So we want indices closer to length-1 to be correct, and indices closer to 0 to be random, initially?
            // Wait, "back to front" usually means the end is sorted first? Or the end is where the "mess" is?
            // "乱码排序的一个效果但最后还是会显示正常的名称(其实是从后往前的一个排序效果，看着像乱码)"
            // "Sorting effect from back to front, looks like garbled text"
            // This implies the "correctness" flows from back to front.
            // So the last character becomes correct first, then the second to last, etc.
            
            // Let's try: if index > (length - iteration), show original, else random.
            
            if (index >= originalText.length - iteration) {
              return originalText[index];
            }
            
            return letters[Math.floor(Math.random() * 26)]; // Keep it simple with just letters for the scramble to look cleaner, or use full set
          })
          .join("");

        if (iteration >= originalText.length) {
          clearInterval(el.interval);
          el.innerText = originalText; // Ensure final state is clean
        }

        iteration += 1 / 3; // Control speed
      }, 30);
    });
    
    // Optional: Reset on mouse leave? Or just let it finish?
    // Usually these effects just play out. If we reset immediately it might look jerky.
    // But if the user leaves, maybe we should ensure it goes back to normal?
    el.addEventListener("mouseleave", () => {
        // Let's just ensure it finishes or we can speed it up. 
        // For now, let's let it finish naturally as it's a short animation.
        // If we want to force reset:
        // clearInterval(el.interval);
        // el.innerText = el.dataset.originalText;
    });
  }
};
