/**
 * - Khi reduce hoạt động nó gọi lại callback và trả lại 4 đối số  
 * + total: biến tích trữ
 * + number: currentValue 
 * + index: Chỉ mục của mảng 
 * + array: Mảng gốc gọi từ chính phương thức reduce ~ arrNums
 * - Phương thức Reduce có thể gọi lại hàm callback nhiều lần
 * - Điểm khác nhau giữa việc có truyền initialValue hay không thì nó chỉ khác nhau lần gọi đầu tiên thôi
 * ! TH1: Chỉ truyền callback không truyền initValue
 * - Khi callback được gọi thì:
 * + Biến tích trữ chính là phần tử đầu tiên của mảng
 * + CurrentValue là phần tử thứ hai của mảng
 * ! TH2: Truyền cả callback và initValue
 * - Khi callback được gọi thì: 
 * + Biến tích trữ chính là giá trị khởi tạo
 * + CurrentValue là phần tử đầu tiên của mảng
 * !Lưu ý: Biến khởi tạo ~ biến kết quả hiển thị ra màn hình
 */

Array.prototype.reduce2 = function(callback, result) {
    let i = 0;

    if(arguments.length < 2) {
        i = 1;
        result = this[0];
    }

    for (; i < this.length; i++) {
        result = callback(result, this[i], i, this);
    }
    
    return result;
}

const arrNums = [1, 2, 3, 4, 5];

const result = arrNums.reduce2((total, number) => {
    return total + number;
});

console.log(result);
