class Heap {
    constructor(array) {
        this.heap = [0];
        this.sorted = [];
        while (array.length > 0) {
            this.add(array.pop());
        }
    }

    add (value) {
        this.heap.push(value);
        let index = this.heap.length - 1;
        while (index > 1 && this.heap[index] < this.heap[Math.floor(index / 2)]) {
            let tmp = this.heap[index];
            this.heap[index] = this.heap[Math.floor(index / 2)];
            this.heap[Math.floor(index / 2)] = tmp;
            index = Math.floor(index / 2)
        }
    }

    delete(i) {
        if (this.heap.length > 2) {
            let value = this.heap[i];
            this.heap[i] = this.heap.pop();
            let k = i;
            let n = this.heap.length - 1;
            while (k * 2 <= n) {
                let min_elem = k * 2;
                if (min_elem + 1 <= n && this.heap[min_elem] > this.heap[min_elem + 1]) {
                    min_elem++;
                }
                if (this.heap[k] > this.heap[min_elem]) {
                    let tmp = this.heap[k];
                    this.heap[k] = this.heap[min_elem];
                    this.heap[min_elem] = tmp;
                }
                k = min_elem;
            }
            return value;
        } else if (this.heap.length === 2) {
            return this.heap.pop();
        } else {
            return null;
        }
    }

    sort() {
        while (this.heap.length > 1) {
            let value = this.delete(1);
            this.sorted.push(value);
        }

        return this.sorted;
    }
}