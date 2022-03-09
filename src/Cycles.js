/*
  В функцию rangeSum() приходят два целых неотрицательных числа.
  Используя цикл for, просуммируйте все четные числа в диапазоне между этими значениями (включительно)
  и верните итоговый результат.
*/
export function rangeSum(start, end) {
    var result = 0

    for (var i = start; i <= end; i++ ) {
        if (i % 2 === 0) {
            result += i;
        }
    }

    return result
}

/*
  В функцию iterationCount() приходит неотрицательное число.
  Используя цикл while, выполняйте деление этого числа на два до тех пор, пока результат деления больше 0.1
  и верните количество потребовавшихся итераций (т.е. сколько раз пришлось выполнить деление).
*/
export function iterationCount(a) {
    var result = 0

    while (a > 0.1) {
        result++
        a /= 2
    };

    return result
}

/*
  В функцию symbolsReplace() приходит строка текста.
  Используя цикл do while, замените в тексте каждый третий символ на символ нижнего подчеркивания
  и верните итоговый результат.
*/
export function symbolsReplace(message) {
    var result = []

    do {
        if ((result.length + 1) % 3 === 0) {
            result.push('_')
        } else {
            result.push(message[result.length])
        }

    } while (message.length > result.length);

    return result.join('')
}
