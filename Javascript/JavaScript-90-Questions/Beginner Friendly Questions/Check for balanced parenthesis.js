function isBalanced(s) {
    const stack = [];
    const mapping = { ')': '(', '}': '{', ']': '[' };

    for (const char of s) {
        if (char in mapping) {
            const top = stack.pop() || '#'; 
            if (mapping[char] !== top) {
                return false;
            }
        } else {
            stack.push(char);
        }
    }

    return stack.length === 0;
}

// Example usage
console.log(isBalanced('()'));
console.log(isBalanced('{[()]}')); 
console.log(isBalanced('{[(])}'));
