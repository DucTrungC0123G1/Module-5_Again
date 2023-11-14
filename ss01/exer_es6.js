const arr = [1, 2, 3, 5, 6, 7, 8, 9, 10]


//1. Tạo 1 mảng mới chứa các phần tử lớn hơn 5 từ mảng ban đầu.

let newArr = arr.filter((number) => number > 5);
console.log(newArr);

//2.Tính tổng các phần tử trong mảng.

const sumArr = arr.reduce((sumArr, number) => sumArr + number);
console.log(sumArr);

//3.Kiểm tra 1 mảng có chứa số V hay ko nếu có trả về V nếu ko trả về"ko tìm thấy"

let checkNumber = (number) => {
    if (arr.includes(number)) {
        // console.log(number);
        return number;
    } else {
        console.log("Không tìm thấy");
    }
}
console.log(checkNumber(9));

//4. Kiểm tra 1 mảng tất cả các phần tử trong mảng đó có >0 hay ko

let checkBig = (array) => {
    // let newArray = array.filter((number) => number < 0)
    // return newArray.length === 0;
    if (array.filter((number) => number < 0)) {
        return array.length === 0;
    } else {
        return true;
    }
}
console.log(checkBig(arr));

