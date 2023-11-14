const arr = [1, -2, 3, 5, 6, 7, 8, 9, 10]


//1. Tạo 1 mảng mới chứa các phần tử lớn hơn 5 từ mảng ban đầu.

const newArr = arr.map((number) => {
    if (number > 5) {
        return number;
    }
});
console.log(newArr);


//2.Tính tổng các phần tử trong mảng.

const sumArr = arr.reduce((sumArr, number) => sumArr + number);
console.log(sumArr);

//3.Kiểm tra 1 mảng có chứa số V hay ko nếu có trả về V nếu ko trả về"ko tìm thấy"

let checkNumber = (number) => {
    if (arr.some(num1 => num1 === number)) {
        // console.log(number);
        return number;
    } else {
        console.log("Không tìm thấy");
    }
}
console.log(checkNumber(5));

//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có >0 hay ko

let checkBig = (array) => {
    return array.every(element => element > 0);
}
console.log(checkBig(arr));


//5 tìm phần tử đầu tiên trong mảng lớn hơn 3
let checkBigThanThree = (arr2) => {
    return arr2.find((number) => number > 3);
}
console.log(checkBigThanThree(arr));

//6. Sử dụng destructuring với rest parameter để
// trích xuất phần tử đầu tiên vào biến "first" và các phần tử còn lại vào một mảng mới "rest".

const extractElement = ([first, ...rest]) => {
    console.log("First element:", first);
    console.log("Rest element:", rest);
}
extractElement(arr);

//7 Sử dụng destructuring để trích xuất các giá trị "name" và "age" từ một mảng chứa các đối tượng "person".
let person = {
    name: "Trung",
    age: 10,
    gender: "Nam"
}

let {name, age} = person;
console.log(name, age);

//8 sử dụng Rest parameter và Spread operator để tạo một hàm nhận vào danh sách các số và trả về tổng của chúng.
const addtional = [10, 20, 30]
let newArray = [...arr, ...addtional].reduce((sum, item) => sum + item, 0)
console.log(newArray);
//9

