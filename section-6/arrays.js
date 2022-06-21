const letters = ['a', 'b', 'c', 'd', 'e']; // 4byte * 5 = 24byte

letters.push('F') // O(1) =>> Maybe O(n) //? When there is no more connected space in array location -> in this case array will move to new location.
letters.pop() // O(1)

letters.unshift('Z') // O(n)
letters.shift() // O(n)

letters.splice(2, 0, 'ADD'); // O(n)
