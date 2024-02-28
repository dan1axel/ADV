// Question 1.

function mergeTwoArray(a, b) {
    const newarray = [...new Set([...a,...b])];
    newarray.sort((a, b) => a - b);
    return newarray;
    }
    
    console.log(mergeTwoArray([-10, 22, 333, 42], [-11, 5, 22, 41, 42]));
    // Expected output: [-11, -10, 5, 22, 41, 42, 333]
    
    // --------------------------------------------------------------------------
    
    // Question 2.
    
    function sortPrice(obj) {
    return drinks.sort((a, b) => a.price - b.price);
    }
    
    const drinks = [
        {name: "lemonade", price: 50},
        {name: "lime", price: 10},
        {name: "lemon", price: 5},
    ]
    
    console.log(sortPrice(drinks));
    /** 
    Expected output: [
        {name: "lemon", price: 5},
        {name: "lime", price: 10},
        {name: "lemonade", price: 50},
    ] 
    **/
    
   // --------------------------------------------------------------------------
    
    
    // Question 3.
    
    const students = [
        { name: "Alice", age: 23, grades: [88, 76, 92] },
        { name: "Bob", age: 20, grades: [70, 85, 78] },
        { name: "Charlie", age: 22, grades: [95, 85, 85] },
        { name: "David", age: 21, grades: [64, 72, 68] }
      ];
    
      function calculateAverage(grades) {
        const sum = grades.reduce((acc, grade) => acc + grade, 0);
        return sum / grades.length;
      }
      
      
      function calculateAverageGrade(students) {
        return students.map(student => ({
            name: student.name,
            age: student.age,
            average: calculateAverage(student.grades),
          }));
      }
      
      console.log(calculateAverageGrade(students));
      
     
    /**
    Expected output: [
      { name: 'Alice', age: 23, average: 85.33333333333333 },
      { name: 'Bob', age: 20, average: 77.66666666666667 },
      { name: 'Charlie', age: 22, average: 88.33333333333333 },
      { name: 'David', age: 21, average: 68 }
    ]
    **/
    
    // --------------------------------------------------------------------------
    
    // Question 4.
    
    const students = [
      { name: "Alice", age: 23, grades: [88, 76, 92] },
      { name: "Bob", age: 20, grades: [70, 85, 78] },
      { name: "Charlie", age: 22, grades: [95, 85, 85] },
      { name: "David", age: 21, grades: [64, 72, 68] }
    ];
    
    function findStudentByName(students, name) {
      return students.find(student => student.name === name);
    }
    
    console.log(findStudentByName(students, "Bob"));
    // Expected output: { name: 'Bob', age: 20, grades: [70, 85, 78] }
    
    // --------------------------------------------------------------------------
    
    // Question 5. 
    
    const students = [
      { name: "Alice", age: 23, grades: [88, 76, 92] },
      { name: "Bob", age: 20, grades: [70, 85, 78] },
      { name: "Charlie", age: 22, grades: [95, 85, 85] },
      { name: "David", age: 21, grades: [64, 72, 68] }
    ];
    
    function filterAge(students, age) {
      return students.filter(student => student.age > age);
    }
    
    console.log(filterAge(students, 20));
    /**
    Expected output: [
      { name: 'Alice', age: 23, grades: [88, 76, 92] },
      { name: 'Charlie', age: 22, grades: [95, 85, 85] },
      { name: 'David', age: 21, grades: [64, 72, 68] }
    ] 
     */